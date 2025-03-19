import { POOL_CATEGORIES } from "@/constants/pool";
import { Service } from "./general";
import { IPoolProfile } from "@/server/models/Mongoose/Pools/Common";

// User API
export interface ProzTokenResponse {
  access_token: string;
  expires_in: number;
  token_type: string;
  scope: string;
}

export interface User {
  self_link: string;
  uuid: string;
  date_registered: string;
  site_name: string;
  account_type: number;
  freelancer_profile_link: string;
  profile_url: string;
  image_url: string;
  is_proz_member: boolean;
  proz_membership_type: string;
  is_id_verified: boolean;
  is_cpn: boolean;
  cpn_language_pair: string;
  native_languages: string[];
  timezone: string;
  country: string;
  skype: string;
}

export interface ProzUser {
  entity_id: number;
  registered_date: string;
  start_date: string;
  contact_first: string;
  contact_last: string;
  contact_email: string;
  pronouns: string;

  can_edit: boolean;
  is_owner: boolean;
  is_admin: boolean;
  is_pseudo: boolean;
  pseudo_id: number;

  prof_prefs: PersonalPreferences;
  error?: string;
  end_date?: string;
  referrer_entity_id?: string;
  certified?: any;

  membership_type: string;
  is_professional_member: boolean;
  membership_level?: string;
  entity_volunteer_settings: VolunteerSetting;
  entity_ai_preference: EntityAiPreference;

  location_coordinates?: any;
  contact_middle?: any;
  contact_address_line1?: string;
  contact_address_line2?: string;
  contact_address_line3?: string;
  contact_address?: string;
  contact_city?: string;
  contact_city_code?: any;
  contact_region?: string;
  contact_region_code?: any;
  contact_postal?: string;
  contact_country?: string;
  contact_country_code?: string;
  geo_region_id?: string;
  geo_region_other?: string;
  geo_city_id?: string;
  geo_city_other?: string;
  geo_time_updated?: string;
  contact_phone?: any;
  contact_skype?: string;
  contact_fax?: any;
  contact_url?: any;
  company_id?: any;
  date_agreement_read?: string;
  timezone?: any;
  form_mask?: string;
  kudoz?: string;
  kudoz_current?: string;
  browniz?: string;
  last_login?: string;
  subdomain?: string;
  disciplines_mask?: string;
  default_language?: string;
  local_only?: string;
  show_online_status?: string;
  golden_number?: string;
  account_type?: number;
  agency_name?: string;
  renewal_date?: string;
  platinum_since?: string;
  show_platinum_since?: string;
  gpa?: string;
  percent_oked?: string;
  show_gpa?: string;
  show_percent_oked?: string;
  show_mode?: string;
  paypal_email?: string;
  mails_left?: string;
  contact_email_2?: string;
  show_personal_page?: string;
  kudoz_spent?: string;
  browniz_spent?: string;
  email_type_mask?: string;
  updated_address?: string;
  verification_seal_id?: string;
  verification_last_attempt?: string;
  auto_renewal_period?: string;
  allow_payment?: string;
  preferred_currency?: string;
  verified_by?: string;
  profile_status?: string;
  verification_method?: string;
  use_design_version?: string;
  show_kudoz_in_profile?: string;
  simple_account?: string;
  vat_num?: string;
  show_vat_num?: string;
  select_pro?: string;
  reason_removed?: string;
  removed_by?: string;
  allow_profmail_from?: string;
  vet_profmail?: string;
  moneybookers_email?: string;
  writing?: string;
  birthday?: string;
  merged_into?: string;
  show_hit_count?: string;
  site_lang?: string;
  show_phone_dir?: string;
  prof_score?: string;
  tax_id?: string;
  tax_id_type?: string;
  show_birthday_note?: string;
  default_corp_eid?: string;
  mod_not_avail?: string;
  prof_updated?: string;
  profile_updated_by_eid?: string;
  prof_reminders?: string;

  num_kudoz_answers?: string;
  num_kudoz_answers_time_cached?: string;
  owner_corp_eid?: string;
  prof_dont_modify_profile?: string;
  common_entity_id?: string;
  duplicate_of_eid?: string;
  business_id_guessed?: any;
  navigation_type?: string;
  country_name?: string;
  username?: string;
  password_hint?: any;

  entity_resource_id?: string;
  resource_image_url?: string;
  square_resource_image_url?: string;
  resource_image_is_broken?: string;
  square_resource_image_is_broken?: string;
  time_images_checked?: string;
  image_visible?: string;
  resource_video_url?: any;
  resource_audio_url?: any;
  resource_resume_url?: string;
  resume_type_desc?: any;
  resume_lang?: string;
  my_skills?: any;
  my_background?: any;

  my_tagline?: string;
  service_specific_taglines?: Taglines[];
  pools_data: PoolsData;
  service_specific_seo?: SeoData[];
  about_me?: string;
  service_specific_about_me: AboutMe[];

  showname?: string;
  showname_pools?: string;
  keywords?: string;
  meta_description?: string;
  use_design?: string;
  degree?: string;
  degree_school?: string;
  months_experience?: any;
  increment_experience?: string;
  time_experience_updated?: string;
  yrs_experience?: any;
  yr_started?: string;

  user_message?: string;
  profile_title?: string;

  meta_robots?: string;
  default_lang?: string;
  force_to_lang?: string;
  current_avail?: string;
  allow_location_search?: string;
  cv_visibility?: string;
  host_interns?: string;
  accept_subcontract?: string;
  subcontract_work?: string;
  gender?: string;
  contact_cell_phone?: string;
  twitter_username?: string;
  number_of_tweets?: string;
  twitter_visibility?: string;
  moodle_user_id?: string;
  wordpress_user_id?: string;
  proz_invoice_client_id?: string;
  hobby?: string;
  hobby_show_in_profile?: string;
  profile_uuid?: string;
  other_objective?: string;
  career_level?: string;
  resource_audio_mediafile_id?: string;
  site_name?: string;
  name?: string;
  tagline?: string;
  image?: string;
  services: Service;
  wallet?: string;
  balance?: string;
  image_url: string;
  avg_rating: any;
  pro_tag_data: ProTagRow[];
  pro_bono_data: ProBonoData;
  profile_completeness_data: ProfileCompletenessData;
}

export interface UserGeneralInfo {
  entity_id: number;
  site_name: string;
  photo_url: string | null;
  is_professional_member: boolean;
  is_business_member: boolean;
  is_probono_volunteer: boolean;
  is_secure_pro: boolean | null;
  is_commission_based: boolean | null;
  company_name: string | null;
  is_verified: string | null;
  is_certified_pro: any | null;
  country: string | null;
  account_type: string | null;
}

export interface PoolsData {
  pools_taglines?: Record<keyof typeof POOL_CATEGORIES, string> | null;
  pools_profiles?: Record<keyof typeof POOL_CATEGORIES, IPoolProfile> | null;
  pools_about_me?: Record<keyof typeof POOL_CATEGORIES, string> | null;
}
export interface AboutMe {
  lang: string;
  value: string;
  service_id: number;
}

export interface UsersResponse {
  users: User[];
}

export interface ContactInfo {
  email: string;
  first_name: string;
  middle_name: string;
  last_name: string;
}

export interface ProzMembership {
  status: string;
  expiration_date: string;
  expired_date: string;
  certified_pro_network_status: string;
  plus_package: boolean;
  membership_type: string;
  membership_package: string;
}

export interface Employer {
  business_id: number;
  business_name: string;
  business_membership_package: string;
  business_membership_expiration_date: string;
  lwa_avg_five_year: number;
  lwa_num_entries_five_year: number;
  jobs_posted_12_months: number;
  business_link: string;
  self_link: string;
  is_employee: boolean;
  employee_title: string;
  employee_is_admin: boolean;
}

export interface ActiveUser {
  uuid: string;
  site_name: string;
  account_type: number;
  email: string;
  profile_url: string;
  contact_info: ContactInfo;
  proz_membership: ProzMembership;
  employers: Employer[];
}

export interface UserUUIDResponse {
  user: User;
}

// Availability API
export interface WorkingHours {
  self_link: string;
  user: string;
  workday_start: string;
  workday_end: string;
  opted_out: boolean;
  available_off_hours: boolean;
  available_weekends: boolean;
}

export interface Availability {
  available: boolean;
  hours: AvailableHours[];
}

export interface AvailableHours {
  start: string;
  end: string;
}

export interface DayAvailability {
  self_link: string;
  user: string;
  date: string;
  availability: Availability;
}

export interface AvailabilityResponse {
  working_hours: WorkingHours;
  days_availability: DayAvailability[];
}

export interface DayAvailabilityResponse {
  day_availability: DayAvailability;
}

export interface ParentDiscipline {
  disciplineId: number;
  disciplineName: string;
}

export interface Discipline {
  discipline_id: number; // Assuming discipline_id is of type number
  discipline_name: string;
}

export interface CommunityResourcesSummary {
  service_agreement_count: number;
  user_list_data: number;
  kudoz_points: number;
  user_glossaries_count: number;
  invoices: number;
  user_terminology_questions_count: number;
}
export interface ProTagRow {
  qualified: string;
  language_pair: string;
  tag_type: string;
  service: string;
}

export interface ProBonoData {
  total_words_count: number;
  interpreting_hours: number;
}

export interface ProfileCompletenessData {
  prof_comp_req_count?: string;
  prof_comp_enc_count?: string;
  prof_comp_has_all_req?: string;
  prof_comp_has_all_enc?: string;
}
export interface Taglines {
  tagline_id: string;
  entity_id: string;
  service_id: number;
  lang: string;
  value: string;
  was_migrated_initially: string;
  time_created: string;
  time_updated: string;
}

export interface ProjectHistory {
  project_history_id: number;
  entity_id: number;
  feedback: number;
  date_reviewed: string;
  verified: string;
  poster_id: number;
  short_description: Buffer;
  visible: string;
  job_type: string;
  outsourcer_comment: string;
  outsourcer_name: string;
  show_in_project_history: string;
  comment: Buffer;
  language_pairs: string[];
  outsourcer_country: string;
  date_completed: string;
  volume_amount: string;
  disc_specs: string[];
  disc_specs_ids: string[];
}

export interface ProjectHistoryFeedback {
  neutral: number;
  positive: number;
  negative: number;
}

export interface ProjectHistoryData {
  projects?: ProjectHistory[];
  feedback: ProjectHistoryFeedback;
  num_projects: number;
  num_corroborated: number;
  num_feedback: number;
  positive_pct: string | number;
  collaborator_feedback: ProjectHistoryFeedback;
  num_collaboration_feedback: number;
}

export interface DiscSpec {
  disc_spec_id: number;
  disc_spec_name: string;
  type: string;
  disc_gen_mask?: number;
  sort_order: number;
  parent_gen_discs: ParentDiscipline[];
}

export interface ProjectDiscSpec extends DiscSpec {
  project_history_id: number;
}

export interface ProjectSummary {
  total_with_feedback: number;
  total_pos: number;
  total_neg: number;
  total_neu: number;
  twelve_mo_total: number;
  twelve_mo_pos: number;
  twelve_mo_neg: number;
  twelve_mo_neu: number;
  project_total: number;
  corr_total: number;
  total_spec: number;
  total_others: number;
  languages: Record<string, number>;
  job_types: Record<string, number>;
  spec_arr: Record<string, number>;
  other_spec_arr: Record<string, number>;
}

export interface PortfolioEntry {
  translation_id?: number;
  language_pair: string;
  source_text?: string | null;
  target_text?: string | null;
  title: string;
  general_field?: string;
  general_field_id?: number;
  detailed_field?: string;
  detailed_field_id?: number;
  content_type?: string;
}

export interface SeoData {
  entity_id: number;
  service_id: number;
  meta_title: string;
  meta_description: string;
}
export interface Project {
  project_history_id?: number;
  pwd?: string;
  date_added?: string; // Assuming a date string in ISO format
  entity_id?: number;
  job_id?: number;
  agency_id?: number;
  poster_id?: number;
  show_outsourcer?: "y" | "n";
  show_outsourcer_perm?: "y" | "n";
  outsourcer_email?: string;
  visible?: "y" | "n";
  feedback?: string | null;
  outsourcer_comment?: string;
  comment_reply?: string;
  date_reply?: string; // Assuming a date string in ISO format
  date_completed?: string; // Assuming a date string in ISO format
  duration_start?: string; // Assuming a date string in ISO format
  duration_end?: string; // Assuming a date string in ISO format
  needs_ver?: "y" | "n";
  verified?: "y" | "n";
  date_reviewed?: string; // Assuming a date string in ISO format
  review_ip?: string;
  email_sent?: string;
  review_method?: string;
  outsourcer_name?: string;
  outsourcer_city?: string;
  outsourcer_country?: string;
  short_description?: string;
  job_type?: string;
  language_pairs: Array<any>; // Assuming array of language pair objects
  disc_mask?: number;
  sample_text?: string;
  volume_amount?: number;
  volume_unit?: string;
  pricing_amount?: number;
  pricing_unit?: string;
  pricing_currency?: string;
  outsourcer_paid?: "y" | "n";
  date_due?: string; // Assuming a date string in ISO format
  comment?: string;
  private_comment?: string;
  met_via?: number;
  sort_order?: string;
  pfe_need_id?: number;
  connect_project?: string;
  leave_wwa?: string;
  general_disciplines?: Array<any>; // Assuming array of general disciplines
  specific_disciplines?: Array<any>; // Assuming array of specific disciplines
  disc_specs_ids: string[];
  cat_tool?: string;
  business_id?: number;
  show_in_project_history?: "y" | "n";
  wiwo_id?: number;
  pricing_total_amount_usd?: number;
  pricing_total_amount?: number;
}

export interface VolunteerSetting {
  entity_id: number;
  is_willing: "y" | "n" | "w" | "x";
  visible: "y" | "n";
}

export interface EntityAiPreference {
  preference: string;
  visible: string;
}

export interface PersonalPreferences {
  use_new_prof: "y" | "n";
  view_new_prof: "y" | "n";
  show_nav_menu: "y" | "n";
  view_nav_menu: "y" | "n";
  default_lang: string; // Max length: 3
  allow_reply_lwa: "y" | "n";
  show_bb_tab: "y" | "n";
  show_kudoz_tab: "y" | "n";
  show_forum_posts_tab: "y" | "n";
  show_client_names: "y" | "n" | "outsourcer" | "logged_in";
  show_project_history_tab: "y" | "n";
  show_wiwos: "y" | "n";
  show_tax_id: "y" | "n";
  show_tpx: "y" | "n";
  show_wwa: "y" | "n";
  show_wwa_private: "y" | "n";
  show_lwa: "y" | "n";
  show_lwa_private: "y" | "n";
  show_conferences: "y" | "n" | "m";
  show_contests: "y" | "n";
  show_trainings: "y" | "n" | "m";
  font_size: number; // Tinyint (4)
  contact_address_visible: "y" | "n" | "outsourcer";
  contact_city_visible: "y" | "n" | "outsourcer";
  contact_region_visible: "y" | "n" | "outsourcer";
  contact_postal_visible: "y" | "n" | "outsourcer";
  contact_country_visible: "y" | "n" | "outsourcer";
  contact_phone_visible: "y" | "n" | "outsourcer";
  contact_skype_visible: "y" | "n" | "outsourcer";
  contact_fax_visible: "y" | "n" | "outsourcer";
  contact_email_visible: "y" | "n" | "outsourcer";
  contact_url_visible: "y" | "n" | "outsourcer";
  contact_url_description_visible: "y" | "n" | "outsourcer";
  agency_name_visible: "y" | "n" | "outsourcer";
  paypal_email_visible: "y" | "n" | "outsourcer";
  moneybookers_email_visible: "y" | "n" | "outsourcer";
  birthday_visible: "y" | "n" | "outsourcer";
  timezone_visible: "y" | "n";
  preferred_currency_visible: "y" | "n" | "outsourcer";
  gender_visible: "y" | "n" | "outsourcer";
  show_referral_section: "y" | "n" | "outsourcer";
  default_view_owner: "aboutme" | "profile";
  default_view_viewer: "aboutme" | "profile" | "ownerpref";
  url_format: "profile" | "translator" | "interpreter";
  map_section_visible: "y" | "n" | "outsourcer";
  about_me_module: string; // Max length: 255
  show_my_bb_tab: "y" | "n";
  map_opt_out: "y" | "n";
  rates_opt_out: "y" | "n";
  name_opt_out: "y" | "n";
  region_opt_out: "y" | "n";
  city_opt_out: "y" | "n";
  postal_id_opt_out: "y" | "n";
  address_opt_out: "y" | "n";
  phone_opt_out: "y" | "n";
  map_visible: "y" | "n" | "outsourcer";
  allow_location_search: "y" | "n" | "outsourcer";
  port_as_tab: "y" | "n";
  show_min_rates: "y" | "n";
  hide_rates_in_directory: "y" | "n";
  calendar_visible: "y" | "n" | "outsourcer";
  rate_vis: number; // Int (11)
  portfolio_opt_out: "y" | "n";
  project_history_opt_out: "y" | "n";
  show_complete_profile_icon: "yes" | "no";
  jobs_feedback_opt_out: "y" | "n";
  corp_languages_list: "pair" | "idiom";
  software_opt_out: "y" | "n";
  corp_languages_opt_out: "y" | "n";
  company_size_opt_out: "y" | "n";
  webpage_opt_out: "y" | "n";
  official_language_opt_out: "y" | "n";
  services_opt_out: "y" | "n";
  specialties_opt_out: "y" | "n";
  contact_address_opt_out: "y" | "n";
  show_pg_endorsement: "y" | "n";
  time_format: "24hours" | "am_pm";
  surcharge_visible_to: string; // Max length: 30
  mincharge_visible_to: string; // Max length: 30
  show_pq_feedback_provider: "y" | "n";
  show_pq_feedback_buyer: "y" | "n";
  dtime_tzid: string; // Max length: 60
  dtime_date_format: string; // Max length: 10
  dtime_date_format_md: string; // Max length: 10
  dtime_date_format_my: string; // Max length: 10
  dtime_time_format: "12hr" | "24hr";
  dtime_tz_is_guess: "y" | "n";
  dtime_show_gmt_in_header: "y" | "n";
  show_last_updated: "y" | "n";
  show_corp_name: "company" | "sitename_company" | "company_sitename" | "sitename" | "none";
  contact_cell_phone_visible: "y" | "n" | "outsourcer";
  cell_phone_opt_out: "y" | "n";
  bb_country_visible: "all" | "logged_in" | "outsourcer" | "none";
  image_to_use: "photo" | "logo";
  show_news_stories_section: "y" | "n";
  show_volunteer_translations: "y" | "n";
  native_variant_opt_out: "y" | "n";
  native_variant_opt_out_langs: string; // Max length: 32
  set_timezone_manually: "y" | "n";
  set_coordinates_manually: "y" | "n";
  yrs_experience_opt_out: "y" | "n";
  allow_discovery_by_email: "y" | "n";
  show_tmtown_export: "y" | "n";
  dismissed_profile_wiwo_box: "y" | "n";
  dismissed_business_membership_modal: "y" | "n";
  business_profile_image: string | null; // Max length: 255
  turn_off_new_business_profile: "y" | "n";
  birthday_opt_out: "y" | "n";
  secure_pro_card_opt_out: "y" | "n";
  allow_discovery_by_phone: "y" | "n";
  time_updated_secure_pro_card_opt_out: string; // ISO datetime format
  security_procedures_opt_out: "y" | "n";
  citizenship_opt_out: "y" | "n";
  show_first_security_procedures: "y" | "n";
  show_prompt_find_more_freelancers: "y" | "n";
  show_wiwos_total_wordcount: "y" | "n";
  show_nav_transitions: "y" | "n";
  show_wwa_ratings: "y" | "n";
  pinned_wwa_table: "entity_feedback" | "entity_ratings" | null;
  pinned_wwa_id: number | null;
  feedback_card_display_compact: "y" | "n";
  deep_content_matches_opt_out: "y" | "n";
  hide_prof_completion_message: "y" | "n";
  objectives_opt_out: "y" | "n";
  objectives_visible: "y" | "n";
  suggestions_opt_out: "y" | "n";
  show_proz_pay_link: "y" | "n";
  profile_tags_visible: "y" | "n";
  show_cpd: "y" | "n";
}

export interface EntityTvCredentials {
  tv_event_id: number;
  entity_id: number;
  credential_type: string;
  credential_value: string;
  visible: "y" | "n";
  [key: string]: any; // For additional dynamic criteria
}

export interface Glossary {
  glossary_id: number;
  entity_id: number;
  glossary_name: string;
  glossary_visibility: "y" | "n"; // Assuming it's a binary visibility flag
  time_last_updated: string; // ISO 8601 date format
  gloss_count: number;
  gloss_pairs: string;
  team_id: number;
  visible_to: "all" | "team" | "user"; // Example values, adjust as needed
  own_priority: number;
}

export interface Article {
  articleId: number;
  title: string;
}
