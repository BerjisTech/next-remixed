export interface Wiwo {
  id: number;
  entity_id: number;
  time: string; // Assuming this is a timestamp in string format
  time_updated: string; // Assuming this is a timestamp in string format
  message: string;
  message_language: string;
  source_language: string | null; // Nullable if not always present
  target_language: string | null; // Nullable if not always present
  wordcount: number | null; // Nullable if not always present
  disc_spec_id: number | null;
  disc_gen_id: number | null;
  discipline: string | null; // Nullable if not always present
  cat_tool: string | null;
  public: boolean;
  from_platform: string | null;
  platform_specific_id: string | null;
  replies: any[]; // Replace `any` with a specific type if reply structure is known
  terms: any[]; // Replace `any` with a specific type if term structure is known
  percent_complete: number; // Range 0-100
  busy_meter: number; // Range 1-5
  latitude: number | null;
  longitude: number | null;
  show_location: boolean;
  image_media_id: number | null;
  hidden: boolean; // If true, considered "deleted"
  time_hidden: string | null; // Assuming this is a timestamp in string format
  hidden_by_eid: number | null;
  payment_amount: number | null;
  payment_currency: string | null;
  payment_amount_usd: number | null;
  payment_due_date: string | null; // Assuming this is a timestamp in string format
  payment_already_made: boolean | null;
  payment_info_visible: boolean;
  business_id: number | null;
  client_name: string | null;
  client_info_visible: boolean;
  service_type_id: number | null;
  date_project_completed: string | null; // Assuming this is a timestamp in string format
  project_history_id: number | null;
  show_in_project_history: boolean;
}
