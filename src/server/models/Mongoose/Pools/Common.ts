import { Schema, Document } from "mongoose";

// Constants as per your PHP code
const STATUS_ACTIVE = "active";
const STATUS_INACTIVE = "inactive";
const STATUS_APPLICATION_PENDING = "application_pending";
const STATUS_APPLICATION_REJECTED = "application_rejected";

const VIABILITY_UNASSESSED = null;
const VIABILITY_APPARENT = "apparent";
const VIABILITY_CONFIRMED = "confirmed";

const OPT_IN_UNASSESSED = null;
const OPT_IN_YES_IMPLICIT = "yes_implicit";
const OPT_IN_YES_EXPLICIT = "yes_explicit";
const OPT_IN_NO = "no";

const MAX_VARIANTS_PER_SOURCE = 5;
const MAX_VARIANTS_PER_TARGET = 2;
const MAXLEN_TAGLINE = 55;
const MAXLEN_BIO = 500;

// Base Interface for PoolProfile
export interface IPoolProfile extends Document {
  pool_status:
    | typeof STATUS_ACTIVE
    | typeof STATUS_INACTIVE
    | typeof STATUS_APPLICATION_PENDING
    | typeof STATUS_APPLICATION_REJECTED;
  pool_opt_in:
    | typeof OPT_IN_UNASSESSED
    | typeof OPT_IN_YES_IMPLICIT
    | typeof OPT_IN_YES_EXPLICIT
    | typeof OPT_IN_NO;
  bio: string;
  pool_tagline: string;
  year_started: number;
  time_agreed_to_terms: Date;
  anonymized_name_override: string;
  pool_profile_link: string;

  entity_id: number;
  uuid: string;
  encoded_eid: string;
  site_name: string;
  first_name: string;
  last_name: string;
  country_code: string;
  image_url: string;
  video_id: string;
  native_langs: string[];
  specialties: string[];
  credentials: string[];
  timezone: string;
  phone_num: string;
  phone_is_public: boolean;
  mobile_num: string;
  mobile_is_public: boolean;
  skype: string;
  skype_is_public: boolean;
  contact_country_visible: boolean;
  timezone_visible: boolean;
  proz_first_name: string;
  proz_last_name: string;
  proz_site_name: string;

  pairs: {
    pair_code: string;
    source: string;
    source_variants: string[];
    target: string;
    target_variants: string[];
    commercial_viability: string | null;
  }[];
  languages_known: any[];
  screened_pairs: any[];
}

// Base schema for pool profiles
const PoolProfileSchema: Schema = new Schema({
  pool_status: {
    type: String,
    enum: [STATUS_ACTIVE, STATUS_INACTIVE, STATUS_APPLICATION_PENDING, STATUS_APPLICATION_REJECTED],
    default: STATUS_ACTIVE,
  },
  pool_opt_in: {
    type: String,
    enum: [OPT_IN_UNASSESSED, OPT_IN_YES_IMPLICIT, OPT_IN_YES_EXPLICIT, OPT_IN_NO],
    default: OPT_IN_UNASSESSED,
  },
  bio: {
    type: String,
    maxlength: MAXLEN_BIO,
  },
  pool_tagline: {
    type: String,
    maxlength: MAXLEN_TAGLINE,
  },
  year_started: Number,
  time_agreed_to_terms: Date,
  anonymized_name_override: String,
  pool_profile_link: String,

  entity_id: Number,
  uuid: String,
  encoded_eid: String,
  site_name: String,
  first_name: String,
  last_name: String,
  country_code: String,
  image_url: String,
  video_id: String,
  native_langs: [String],
  specialties: [String],
  credentials: [String],
  timezone: String,
  phone_num: String,
  phone_is_public: { type: Boolean, default: false },
  mobile_num: String,
  mobile_is_public: { type: Boolean, default: false },
  skype: String,
  skype_is_public: { type: Boolean, default: false },
  contact_country_visible: { type: Boolean, default: false },
  timezone_visible: { type: Boolean, default: false },
  proz_first_name: String,
  proz_last_name: String,
  proz_site_name: String,

  pairs: [
    {
      pair_code: { type: String, required: true },
      source: { type: String, required: true },
      source_variants: { type: [String], required: true },
      target: { type: String, required: true },
      target_variants: { type: [String], required: true },
      commercial_viability: { type: String, default: null },
    },
  ],
  languages_known: [{ type: Schema.Types.Mixed }],
  screened_pairs: [{ type: Schema.Types.Mixed }],
});

// Export the base schema for reuse
export {
  PoolProfileSchema,
  STATUS_ACTIVE,
  STATUS_INACTIVE,
  STATUS_APPLICATION_PENDING,
  STATUS_APPLICATION_REJECTED,
};
