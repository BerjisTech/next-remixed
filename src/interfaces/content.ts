export interface Notification {
  message: string;
  type: "success" | "error" | "info" | "warning";
}

export interface Languages {
  [key: string]: LanguageKnown; // Index signature to allow dynamic language keys
}

export interface LanguageKnown {
  entity_id: number;
  entity_languages_known_id: number;
  language_code: string; // e.g., "jpn"
  level: string; // Assuming levels like "A1", "B2", etc.
  time_updated: string; // ISO date string format, e.g., "2023-07-14 12:14:48"
  variants: LanguageVariant[]; // Nested object for variants
  is_native: boolean;
  is_verified: boolean;
}

export interface LanguageVariant {
  entity_id: number;
  entity_languages_known_variant_id: number;
  familiarity: string; // Assuming 'familiarity' can be "med", "high", etc.
  language_code: string; // e.g., "jpn"
  time_updated: string; // ISO date string format, e.g., "2023-07-14 12:14:48"
  variant_code: string; // e.g., "japajpn"
}
export interface StarRating {
  entity_rating_id: number;
  entity_feedback_id: number;
  feedbackee_id: number;
  feedbacker_id: number;
  business_id?: number | null;
  business_id_by_eid?: number | null;
  record_created_at: string; // ISO date string
  wwa_rating: number; // assuming 1-5 for star rating
  visibility?: string | null;
  comment?: string;
  reply?: string | null;
  reply_visibility?: string | null;
  source_lang: string;
  target_lang: string;
  service_id: string;
  disc_spec_id: string;
  word_count?: number | null;
  years_with_client?: number | null;
  met_in_person?: boolean | null;
  external_project_id?: string | null;
  external_rating_source?: string | null;
  edit_status: string;
  vet: string;
  vet_comment?: string | null;
  vet_time?: string | null; // ISO date string
  vetted_by?: number | null;
  vet_no_reason?: string | null;
  vet_reply?: string | null;
  vet_reply_time?: string | null; // ISO date string
  vet_reply_comment?: string | null;
  vet_reply_no_reason?: string | null;
  vetted_reply_by?: number | null;
  replacing: number;
  original_rating_id: number;
  private: string; // "y" or "n" for privacy status
  private_comment?: string | null;
  feedbacker_ip: string;
  native_language_of_sp: string;
  fb_from: string;
  service_type_other?: string | null;
  contest_rating?: number | null;
  contest_rating_other?: string | null;
  is_pool_feedback: string; // "y" or "n"
  feedbacker_name?: string | null;
  feedbacker_email?: string | null;
  feedbacker_company?: string | null;
  project_date?: string | null; // ISO date string
  duration_of_interpreting_call?: string | null; // Duration in "HH:MM:SS"
  request_id?: number | null;
  date_of_last_collaboration?: string | null; // ISO date string
  table_name: string;
}
