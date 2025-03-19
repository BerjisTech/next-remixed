import { executeQuery } from "../database/mysql/queryHelper";
import * as crypto from "crypto"; // To create the hash according to the corresponding algorithm

/**
 * Check if an email exists in the database.
 *
 * @param {string} email - The email to check.
 * @returns {Promise<number>} - Returns entity_id if the email exists, otherwise 0.
 */
export async function getUsersByEmail(email: string): Promise<any[]> {
  const query = `
        SELECT e.entity_id, up.password, up.salt, up.version
        FROM proz.entities e
        LEFT JOIN proz.user_pass up ON e.entity_id = up.entity_id
        WHERE e.contact_email = ? AND e.end_date = "0000-00-00 00:00:00"
    `;
  return (await executeQuery(query, "slave", [email])) as any[];
}

/**
 * Check if a username exists in the database.
 *
 * @param {string} username - The username to check.
 * @returns {Promise<number>} - Returns entity_id if the username exists, otherwise 0.
 */
export async function getUsersByUsername(username: string): Promise<any[]> {
  const query = `
        SELECT entity_id, password, salt, version
        FROM proz.user_pass
        WHERE username = ?
    `;
  return (await executeQuery(query, "slave", [username])) as any[];
}

/**
 * Validate the password for a given email.
 *
 * @param {string} identifier - The email or username to validate the password for.
 * @param {string} inputPassword - The password provided by the user.
 * @returns {Promise<number>} - Returns true if the password is valid, otherwise false.
 */
export async function validateUserPassword(
  identifier: string,
  inputPassword: string
): Promise<number> {
  let users: any[] = [];

  if (!identifier.includes("@")) {
    users = await getUsersByUsername(identifier);
  } else {
    users = await getUsersByEmail(identifier);
  }

  if (users.length === 0) {
    return 0; // No users found
  }

  for (const user of users) {
    const { entity_id, password: storedPassword, salt, version } = user;

    // Apply the hash algorithm according to the version.
    let hashedInputPassword: string;

    switch (version) {
      case 1:
        // Use the OLD_PASSWORD function for version 1
        const queryOldPassword = "SELECT OLD_PASSWORD(?) AS pass";
        const oldPasswordResult = (await executeQuery(queryOldPassword, "slave", [
          inputPassword,
        ])) as any;

        if (oldPasswordResult.length === 0) {
          continue; // Skip this user if hashing fails.
        }

        hashedInputPassword = oldPasswordResult[0].pass;
        break;

      case 2:
        // SHA-512 hashing method
        const secretKey = "G_4B}4kjs4T-dW-Pt%O4_-1";
        const suffix = "Mpkf;lN>7#.Rv%2";
        const inputString = `${secretKey}${entity_id}${salt}${inputPassword}${suffix}`;

        hashedInputPassword = crypto.createHash("sha512").update(inputString).digest("hex");
        break;

      default:
        console.warn(`Unsupported hashing version: ${version}`);
        continue; // Skip this user for unsupported versions.
    }

    // Compare the generated hash with the stored one
    if (hashedInputPassword === storedPassword) {
      return entity_id; // Return the entity_id if the password is valid.
    }
  }

  return 0; // Return 0 if no valid password is found.
}
