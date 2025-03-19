import { ProzUser } from "@/interfaces/account";
import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next";
import { AuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { getServerSession } from "next-auth";
import LinkedInProvider from "next-auth/providers/linkedin";
import {
  getEntityIdFromSession,
  isSiteStaff,
  parseAndValidateId,
  getAccessToken,
} from "@/server/data/common";
import { getUserInfo, getUserByEmail } from "@/server/data/user";
import { DEFAULT_USER_INFO_COLS } from "@/constants/common";
import { logToFile } from "@/lib/logger";
import { validateUserPassword } from "@/server/data/signin";

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.NEXTAUTH_GOOGLE_ID as string,
      clientSecret: process.env.NEXTAUTH_GOOGLE_SECRET as string,
    }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID as string,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email_or_username: { label: "Email", type: "text", placeholder: "example@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { email_or_username, password } = credentials || {};

        if (email_or_username && password) {
          const entityId = await validateUserPassword(email_or_username, password);
          let userRes: ProzUser | null = null;
          if (entityId) {
            //const userByEmail = await getUserByEmail(email_or_username);
            //const entityId = (userByEmail as any).entity_id;

            // if (userByEmail) {
            const options = {
              ...DEFAULT_USER_INFO_COLS,
              include_entity_resources_table: true,
              entity_id: entityId,
            };
            try {
              userRes = await getUserInfo(options);
            } catch (error) {
              logToFile(`Error in authorize: ${JSON.stringify(error)}`);
              return null;
            }
            // }
            if (userRes) {
              userRes.is_admin = isSiteStaff(entityId);
              // To decrease payload and also we dont need these in initial data only added specific required fields should be added @fawad
              delete userRes.my_skills;
              delete userRes.about_me;
              delete userRes.keywords;
            }
            return userRes as User;
          } else {
          }
        }

        // logToFile('authorize called');
        const { phpSessionId, pseudoId } = req.body as Record<string, any>;
        if (phpSessionId) {
          // logToFile('phpSessionId found');
          let entityId = await getEntityIdFromSession(phpSessionId);
          // logToFile(`entityId: ${entityId}`);
          entityId = Number(pseudoId) > 0 ? pseudoId : entityId;
          if (entityId && parseAndValidateId(entityId)) {
            const options = {
              ...DEFAULT_USER_INFO_COLS,
              include_entity_resources_table: true,
              entity_id: entityId,
            };
            let userRes: ProzUser | null;
            try {
              userRes = await getUserInfo(options);
            } catch (error) {
              logToFile(`Error in authorize: ${JSON.stringify(error)}`);
              return null;
            }
            if (userRes) {
              userRes.is_admin = isSiteStaff(entityId);
              userRes.is_pseudo = Number(pseudoId) > 0 ? true : false;
              userRes.pseudo_id = Number(pseudoId);
              // To decrease payload and also we dont need these in initial data only added specific required fields should be added @fawad
              delete userRes.my_skills;
              delete userRes.about_me;
              delete userRes.keywords;
            }
            return userRes as User;
          }
        }
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET, // https://next-auth.js.org/configuration/options#:~:text=You%20can%20quickly%20create%20a%20good%20value%20on%20the%20command%20line%20via%20this%20openssl%20command.
  pages: {
    signIn: "/next/signin",
  },
  session: { strategy: "jwt" },
  jwt: {
    // The maximum age of the NextAuth.js issued JWT in seconds.
    // Defaults to `session.maxAge`.
    maxAge: 60 * 60 * 24 * 30,
    // You can define your own encode/decode functions for signing and encryption
    // async encode() { },
    // async decode() { },
  },
  callbacks: {
    async jwt({ token, user, account }) {
      console.log("jwt", token, user, account);
      if (account) {
        token.provider = account.provider; // Save the provider in the token
        if (account.provider === "google" && account.id_token) {
          const decodedToken = JSON.parse(
            Buffer.from(account.id_token.split(".")[1], "base64").toString()
          );
          token.email = decodedToken.email; // Extract and save the email from the ID token
        }
        // if (account.provider === "linkedin" && account.access_token) {
        //   const response = await fetch("https://api.linkedin.com/v2/me", {
        //     headers: {
        //       Authorization: `Bearer ${account.access_token}`,
        //     },
        //   });
        //   const linkedInProfile = await response.json();
        //   token.linkedin = linkedInProfile; // Save the linkedInProfile in the token
        //   token.email = linkedInProfile.emailAddress; // Extract and save the email if available
        // }
      }

      console.log("provider", account?.provider);

      if (user) {
        token.user = user as ProzUser; // only add the user to the token if it exists (after login)
      }
      return token;
    },
    async session({ session, token }) {
      // Attach the token to the session

      let userRes: ProzUser | null = null;
      console.log("token", token);
      if (token?.provider === "google" && token?.email) {
        const userByEmail = await getUserByEmail(token?.email);
        const entityId = (userByEmail as any).entity_id;
        if (entityId) {
          const options = {
            ...DEFAULT_USER_INFO_COLS,
            include_entity_resources_table: true,
            entity_id: entityId,
          };
          try {
            userRes = await getUserInfo(options);
          } catch (error) {
            logToFile(`Error in authorize: ${JSON.stringify(error)}`);
            session.user = token.user as ProzUser;
          }
          if (userRes) {
            userRes.is_admin = isSiteStaff(entityId);
            delete userRes.my_skills;
            delete userRes.about_me;
            delete userRes.keywords;
            session.user = userRes as ProzUser;
          } else {
            session.user = token.user as ProzUser;
          }
        } else {
          session.user = token.user as ProzUser;
        }
      } else {
        session.user = token.user as ProzUser; // assuming the `user` is stored in token after jwt callback
      }
      return session;
    },
    // async signIn({user, account, profile, email}) {
    //     if (account && profile && account.provider === 'google' &&
    //         profile.email && profile.email.endsWith('@gmail.com')) {
    //       return true
    //     } else {
    //       return false
    //     }
    //   },
    async redirect({ url, baseUrl }) {
      return url.startsWith("/") ? `${baseUrl}${url}` : url;
    },
    async signIn({ user, account, profile }): Promise<boolean | string | any> {
      try {
        let userRes: ProzUser | null = null;
        if ((account?.provider === "google" || account?.provider === "linkedin") && user?.email) {
          const userByEmail = await getUserByEmail(user?.email);
          const entityId = (userByEmail as any).entity_id;
          if (userByEmail) {
            const options = {
              ...DEFAULT_USER_INFO_COLS,
              include_entity_resources_table: true,
              entity_id: entityId,
            };
            try {
              userRes = await getUserInfo(options);
            } catch (error) {
              logToFile(`Error in authorize: ${JSON.stringify(error)}`);
              return null;
            }
          }
          if (userRes) {
            userRes.is_admin = isSiteStaff(entityId);
            // To decrease payload and also we dont need these in initial data only added specific required fields should be added @fawad
            delete userRes.my_skills;
            delete userRes.about_me;
            delete userRes.keywords;
          }
          return userRes as User;

          // if (!existingUser) {
          //   const newUser = {
          //     email: "", // Google or LinkedIn Email
          //     name: "", // Google or LinkedIn Name
          //     image: "", // Google or LinkedIn Profile Picture
          //     provider: account.provider,
          //   };

          // await saveUserToDatabase(newUser);
        }

        return true;
      } catch (error) {
        console.error("Error in signIn callback for: " + account?.provider, error);
        return false;
      }
    },
  },
  debug: true,
} satisfies AuthOptions;

// Use it in server contexts
export function auth(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, authOptions);
}

export async function authUser(): Promise<ProzUser | null> {
  const session = await auth();
  return session?.user || null;
}
