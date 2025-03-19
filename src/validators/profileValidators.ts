import { entityGetDatum } from "@/server/data/common";
import { executeQuery } from "@/server/database/mysql/queryHelper";
import { z } from "zod";

// Common validations name, email, dates, phone, amount
const nameValidation = z
  .string()
  .min(2, { message: "Length must be between 2 and 50 characters in length." })
  .max(50, { message: "Length must be between 2 and 50 characters in length." })
  .optional();

const contactValidation = z
  .string()
  .min(2, { message: "Name must be between 2 and 50 characters in length." })
  .max(50, { message: "Name must be between 2 and 50 characters in length." })
  // .refine((value) => !/([0-9]|-|_|\.){3,}/.test(value), {
  //     message: 'Please specify your real name. You can use the privacy settings to prevent the public from seeing your name.',
  // })
  .optional();

const dateValidation = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}(?: \d{2}:\d{2}:\d{2})?$/, {
    message: "Invalid format. Expected format: YYYY-MM-DD or YYYY-MM-DD HH:MM:SS.",
  })
  .refine(
    (dateTime) => {
      const [date, time] = dateTime.split(" ");
      const [year, month, day] = date.split("-").map(Number);

      // Check for valid date
      if (!(year > 0 && month >= 1 && month <= 12 && day >= 1 && day <= 31)) {
        return false;
      }
      // If time is provided, validate it
      if (time) {
        const [hours, minutes, seconds] = time.split(":").map(Number);
        return (
          hours >= 0 &&
          hours <= 23 &&
          minutes >= 0 &&
          minutes <= 59 &&
          seconds >= 0 &&
          seconds <= 59
        );
      }

      return true; // Valid date without time
    },
    { message: "Invalid date or time format." }
  );

const validEmail = z
  .string()
  .max(80, { message: "Email cannot be more than 80 characters in length." })
  .refine(
    (email) => email === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email), // Email is either empty or valid
    { message: "Invalid email." }
  );

// Account type validation
const accountTypeSchema = z.object({
  account_type: z.coerce
    .number()
    .min(1, { message: "Invalid account type." })
    .max(8, { message: "Invalid account type." }),
});

// Birthday validation
const dateSchema = z.object({
  birthday: dateValidation,
});

// Agency name validation
const agencyNameSchema = z
  .object({
    agency_name: z
      .string()
      .min(3, { message: "Company name must be between 2 and 60 characters in length." })
      .max(60, { message: "Company name must be between 2 and 60 characters in length." })
      .optional(),
    entity_id: z.coerce.number().min(1, { message: "Invalid entity_id" }),
  })
  .refine(
    async (data) => {
      const accountType = await entityGetDatum(data.entity_id, "account_type");
      if ([1, 3, 7].includes(accountType)) {
        // Validate the agency name length when account type matches
        return data.agency_name && data.agency_name.length >= 3 && data.agency_name.length <= 60;
      }
      // If account type does not match, agency_name is optional but must not exceed 60 characters
      return !data.agency_name || data.agency_name.length <= 60;
    },
    {
      message: "Company name must be between 2 and 60 characters in length.",
      path: ["agency_name"],
    }
  );

const usernameSchema = z
  .object({
    username: z
      .string()
      .min(3, { message: "Username must be between 3 and 15 characters in length." })
      .max(15, { message: "Username must be between 3 and 15 characters in length." })
      .refine(
        (username) => /^[\x20-\x7E]+$/.test(username), // Valid ASCII letters, numbers, spaces, hyphens, and underscores
        {
          message:
            "Usernames must contain only ASCII letters, numbers, hyphens, underscores, or spaces.",
        }
      )
      .refine(
        (username) => !/^xxx/.test(username.trim()), // Invalid prefix check
        { message: "This username is not accepted by the system, please enter a new username." }
      ),
    entity_id: z.coerce.number().min(1, { message: "Invalid entity_id" }),
  })
  .refine(
    async (data) => {
      const { username, entity_id } = data;

      // Query to check for duplicate username
      const sqlQuery = `
        SELECT entity_id
        FROM proz.user_pass
        WHERE username = ?
    `;
      const rows = (await executeQuery(sqlQuery, "slave", [username])) as any[];

      if (rows.length === 0) return true; // Username is available
      return rows[0].entity_id === entity_id; // Allow if the username belongs to the same entity
    },
    {
      message: "That username is already taken.",
      path: ["username"],
    }
  );

// Email validation
const businessEmailSchema = z.object({
  business_contact_email: nameValidation,
});

const businessFirstNameSchema = z.object({
  business_contact_first: nameValidation,
});

// Business contact first
const businessContactLastNameSchema = z.object({
  business_contact_last: nameValidation,
});

const businessContactTitleSchema = z.object({
  business_contact_title: nameValidation,
});

const capacitySchema = z.object({
  capacity: z
    .string()
    .min(2, { message: "Capacity must be between 2 and 250 characters in length." })
    .max(250, { message: "Capacity must be between 2 and 250 characters in length." })
    .optional(),
});

const capacityWpdSchema = z.object({
  capacity_wpd: z
    .enum(["thousands", "tens_of_thousands", "hundreds_of_thousands", "millions"])
    .optional()
    .refine(
      (value) => {
        // If the value is provided, it must be one of the valid options
        return (
          value === undefined ||
          ["thousands", "tens_of_thousands", "hundreds_of_thousands", "millions"].includes(value)
        );
      },
      {
        message: "You must select a valid capacity",
      }
    ),
});

const companySizeSchema = z.object({
  company_size: z
    .enum(["lt_3", "4-9", "10-25", "25-50", "50-100", "100-500", "gt_500"] as [string, ...string[]])
    .optional(),
});

const contactFirstSchema = z.object({
  contact_first: z
    .string()
    .optional()
    .refine((val) => val === undefined || (val.length >= 2 && val.length <= 50), {
      message: "First name must be between 2 and 50 characters in length.",
    })
    .refine((val) => val === undefined || !/([0-9]|-|_|\.){3,}/.test(val), {
      message:
        "Please specify your real first name. You can use the privacy settings to prevent the public from seeing your name.",
    }),
});

const contactMiddleSchema = z.object({
  contact_middle: z
    .string()
    .optional()
    .refine((val) => val === undefined || val === "" || (val.length >= 2 && val.length <= 50), {
      message: "Middle name must be between 2 and 50 characters in length.",
    })
    .refine((val) => val === undefined || val === "" || !/([0-9]|-|_|\.){3,}/.test(val), {
      message:
        "Please specify your real middle name. You can use the privacy settings to prevent the public from seeing your name.",
    }),
});

const contactLastSchema = z.object({
  contact_last: z
    .string()
    .optional()
    .refine((val) => val === undefined || (val.length >= 2 && val.length <= 50), {
      message: "Last name must be between 2 and 50 characters in length.",
    })
    .refine((val) => val === undefined || !/([0-9]|-|_|\.){3,}/.test(val), {
      message:
        "Please specify your real last name. You can use the privacy settings to prevent the public from seeing your name.",
    }),
});

const contactFirstNameSchema = z.object({
  contact_first: contactValidation,
});

const contactMiddleNameSchema = z.object({
  contact_middle: contactValidation,
});

const contactLastNameSchema = z.object({
  contact_last: contactValidation,
});

// --------------------------------------------------------------------- Define schemas above ------------------------------------------------------------------------------//

// Central map for field type to schema
export const fieldSchemas: Record<string, z.ZodSchema> = {
  account_type: accountTypeSchema,
  birthday: dateSchema,
  agency_name: agencyNameSchema,
  business_contact_email: businessEmailSchema,
  business_contact_first: businessFirstNameSchema,
  business_contact_last: businessContactLastNameSchema,
  business_contact_title: businessContactTitleSchema,
  capacity: capacitySchema,
  capacity_wpd: capacityWpdSchema,
  company_size: companySizeSchema,

  contact_first: contactFirstSchema,
  contact_middle: contactMiddleSchema,
  contact_last: contactLastSchema,
  username: usernameSchema,
};
