export interface attendees {
  attendee_id: number;
  entity_id: number;
  time_entered: string;
  attendee_title: string;
  attendee_blurb: string;
  event_id: number;
}

export interface casual_contest {
  casual_contest_id: number;
  organizer_id: number;
  contest_title: string;
  contest_body: string;
  contest_start: string;
  contest_vote: string;
  contest_end: string;
  point_votes: number;
  entries_visible: "y" | "n";
  time_contest: string;
  winners: "y" | "n";
}

export interface casual_contest_entity_vote {
  casual_contest_vote_id: number;
  entity_id: number;
  total_points: number;
  casual_contest_id: number;
  lang_code: string;
}

export interface casual_contest_entries {
  casual_contest_entry_id: number;
  casual_contest_id: number;
  entity_id: number;
  entry_text: string;
  visible: "y" | "n";
  lang_code: string;
  time_entry: string;
  time_edit: string;
}

export interface casual_contest_message_board {
  message_id: number;
  casual_contest_id: number;
  entity_id: number;
  message: string;
  time_message: string;
  visible: "y" | "n";
}

export interface casual_contest_voters_banner {
  voter_banner_id: number;
  entity_id: number;
  user_option: "1" | "2" | "3";
  saved_time: string;
}

export interface casual_contest_votes {
  casual_contest_votes_id: number;
  entry_vote: number;
  points: number;
  entity_vote_id: number;
  time_vote: string;
  casual_contest_id: number;
}

export interface casual_contest_winners {
  casual_contest_winners_id: number;
  casual_contest_id: number;
  entity_id: number;
  pos: number;
  points: number;
  bio: string;
}

export interface change_logs {
  change_log_id: number;
  action: "delete" | "edit" | "create";
  entity_id: number;
  time_action: string;
  event_type: "conference" | "powwow" | "session" | "training" | "event";
  event_type_id: number;
}

export interface conference_mailinglist {
  conference_mailinglist_id: number;
  entity_id: number;
  email: string;
  event_id: number;
  time_added: string;
  active: "y" | "n";
  contacted: number;
}

export interface conference_preferences {
  conference_preference_id: number;
  entity_id: number;
  preference_name: string;
  preference_key: string;
  preference_value: string;
}

export interface conference_proposals {
  conference_proposal_id: number;
  proposer_eid: number;
  proposed_country_code: string;
  proposed_region_code: string;
  proposed_region_name: string;
  proposed_city_code: string;
  proposed_city_name: string;
  proposed_city_name_reason: string;
  time_proposed: string;
  proposed_date_start: string;
  proposed_date_end: string;
  proposed_date_reason: string;
  theme: string;
  theme_justification: string;
  why_me: string;
  expectations_and_goals: string;
  visible: "y" | "n";
}

export interface conference_sponsoring {
  sponsoring_id: number;
  conference_id: number;
  corp_eid: number;
  time_posted: string;
  sponsoring_offer: string;
  company_name: string;
  company_address: string;
  company_email: string;
}

export interface contests {
  contest_id: number;
  time_created: string;
  time_end_preparation: string;
  time_start_comming_soon: string;
  time_end_comming_soon: string;
  time_start_submissions: string;
  time_end_submissions: string;
  time_start_qualification: string;
  time_end_qualification: string;
  time_start_voting: string;
  time_end_voting: string;
  time_start_results: string;
  time_end_results: string;
  title: string;
  organizer_id: number;
  voting_min_entries: number;
  qualification_approved: number;
  qualification_deprecated: number;
  qualification_floor: number;
  organizer_text: string;
  contest_bases: string;
  results_text: string;
  large_image: string;
  small_image: string;
  theme: string;
  preparation_text: string;
  comming_soon_text: string;
  submissions_text: string;
  qualification_text: string;
  voting_text: string;
  past_text: string;
  image_file: string;
  contest_status:
    | "preparing"
    | "submission"
    | "hybrid"
    | "finals"
    | "running"
    | "finished"
    | "past";
  open_to_public: "y" | "n";
  show_to_public: "y" | "n";
  enable_comments_over_translations: "y" | "n";
  submission_enabled: "y" | "n";
  submissions_enabled_new_pairs: "y" | "n";
  award_browniz: "y" | "n";
  certificate_id: number;
  visibility_query_filter: string;
  visibility_filter_message: string;
}

export interface contests_banner_user_show {
  banner_record_id: number;
  contest_id: number;
  contest_phase_id: number;
  type: "banner" | "popup";
  entity_id: number;
  time_saved: string;
}

export interface contests_news {
  events_news_id: number;
  title: string;
  new: string;
  events_news_time: string;
  contest_id: number;
}

export interface contests_notifications {
  contest_notification_id: number;
  subject: string;
  body: string;
  language: string;
  enabled: "y" | "n";
  name: string;
}

export interface contest_comment_agreement {
  contest_agreement_id: number;
  contest_entry_tag_id: number;
  entity_id: number;
  agreement: "0" | "1";
  link: string;
  visible: "y" | "n";
  date_agreement: string;
  comment: string;
  vetted: "y" | "n" | "d";
  vetted_by: number;
}

export interface contest_entity_entry_order {
  entity_entry_order_id: number;
  entity_id: number;
  contest_id: number;
  contest_target_language_id: number;
  phase_id: number;
  entries_order: string;
  quant: number;
  time_order: string;
  source_lang: string;
  target_lang: string;
}

export interface contest_entries {
  contest_entry_id: number;
  contest_target_language_id: number;
  entity_id_: number;
  time_created: string;
  text: string;
  visibility:
    | "y"
    | "h"
    | "uv"
    | "vf"
    | "vt"
    | "huv"
    | "hvt"
    | "d"
    | "x"
    | "n"
    | "m"
    | "mp"
    | "td"
    | "e";
  is_withdrawn: "y" | "n";
  entity_level: "always" | "winner";
  entry_level: "feedback" | "no_feedback" | "none";
  ip_address: string;
  entry_status: string;
  lang_variant: string;
}

export interface contest_entries_stats {
  contest_entries_stat_id: number;
  contest_entry_id: number;
  qualification_points: number;
  best_points: number;
  prize: number;
  qualified_for_finals: "yes" | "no" | "na";
  entries_above: number;
  entries_tied: number;
  entries_below: number;
}

export interface contest_entry_tags {
  contest_entry_tag_id: number;
  contest_entry_id: number;
  entity_id: number;
  ip_address: string;
  time_tagged: string;
  tag: "1" | "-1" | "0";
  reason: string;
  comment: string;
  link: string;
  start: number;
  occurrence: number;
  selected_txt: string;
  vetted: "y" | "n" | "d";
  vetted_by: number;
  visible: "y" | "n";
}

export interface contest_feedback {
  contest_feedback_id: number;
  contest_id: number;
  contest_target_language_id: number;
  entity_id: number;
  body: string;
  time_created: string;
  visibility: "y" | "n" | "uv" | "x";
  vetted_by: number;
  visible: "y" | "n" | "x" | "td";
  vetted: "y" | "n" | "nv";
}

export interface contest_interest_votes {
  contest_interest_vote_id: number;
  contest_proposed_language_id: number;
  entity_id: number;
  value: "c" | "y" | "n";
  time: string;
}

export interface contest_mod_notes {
  mod_note_id: number;
  contest_feedback_id: number;
  contest_note_id: number;
  entity_id: number;
  mod_note: string;
  time_saved: string;
}

export interface contest_notes {
  contest_note_id: number;
  contest_entry_id: number;
  entity_id: number;
  time_created: string;
  ip_address: string;
  note: string;
  visible: "y" | "n" | "x";
  visible_to: "public" | "contestant" | "staff";
  vetted: "y" | "n";
  vetted_by: number;
}

export interface contest_personal_notes {
  contest_personal_note_id: number;
  contest_entry_id: number;
  tag: "candidate" | "not_a_candidate" | "not_yet_sure";
  note: string;
  entity_id: number;
  ip_address: string;
  time_created: string;
}

export interface contest_profiles {
  contest_profile_id: number;
  entity_id: number;
  suscription_mask: number;
}

export interface contest_proposed_languages {
  contest_proposed_language_id: number;
  iso_three: string;
  state: "n" | "y" | "?" | "b";
  entity_id: number;
  time_proposed: string;
  contest_text_id: number;
}

export interface contest_target_languages {
  contest_target_language_id: number;
  contest_text_id: number;
  language: string;
  max_winners: number;
  qualification_max_winners: number;
  time_extended: "y" | "n";
  qualification_floor: number;
  qualification_floor_points: number;
  phase_id: number;
  phase_state: "open" | "closed";
  rating_mode: "entry" | "segment" | "both";
  allow_rating_during_finals_round: "y" | "n";
  enable_composite_translation: "y" | "n";
  enable_tagging: "y" | "n";
  tagging_require_vetting: "n" | "with_comment";
  ignore_votes_for_own_entries: "y" | "n";
  promo: "y" | "n";
}

export interface contest_teams {
  contest_team_id: number;
  contest_entry_id: number;
  entity_id: number;
  state: "o" | "n" | "y" | "?";
}

export interface contest_texts {
  contest_text_id: number;
  time_entered: string;
  entered_by_entity_id: number;
  contest_id: number;
  text: string;
  language: string;
  language_variant: string;
  state: "proposed" | "open" | "closed";
  source: string;
  url: string;
  permission_to_use: "y" | "n";
  use_segmentation: "y" | "n";
}

export interface contest_text_comments {
  contest_text_comment_id: number;
  source_text_id: number;
  contest_target_language_id: number;
  contest_text_segment_id: number;
  entity_id: number;
  comment: string;
  time_submitted: string;
  visible: "y" | "n";
  edited_by: number;
  time_edited: string;
}

export interface contest_text_comment_agreements {
  agreement_id: number;
  contest_text_comment_id: number;
  entity_id: number;
  agreed: "y" | "n";
  decision_note: string;
  agree: "y" | "n";
  disagree: "y" | "n";
  date_submitted: string;
}

export interface contest_voters_banner {
  voter_banner_id: number;
  entity_id: number;
  user_option: "1" | "2" | "3";
  saved_time: string;
}

export interface contest_voter_weightings {
  contest_voter_weighting_id: number;
  entity_id: number;
  pair: string;
  voting_phase: "qualification" | "finals" | "all";
  qualification_vote_type: "accuracy_of_translation" | "quality_of_writing";
  weighting: number;
  time_updated: string;
}

export interface contest_votes_best {
  contest_vote_best_id: number;
  contest_entry_id: number;
  entity_id: number;
  value: number;
  time_created: string;
  ip_address: string;
  is_valid: "y" | "n";
}

export interface contest_votes_qualification {
  contest_vote_qualification_id: number;
  contest_entry_id: number;
  entity_id: number;
  ip_address: string;
  value: number;
  time_created: string;
  reason_note: string;
  points_quality: number;
  weighting_quality: number;
  points_accuracy: number;
  weighting_accuracy: number;
  is_valid: "y" | "n";
}

export interface contest_votes_qualification_segments {
  contest_vote_qualification_segment_id: number;
  contest_entry_id: number;
  segment_id: number;
  entity_id: number;
  ip_address: string;
  time_created: string;
  points_quality: number;
  weighting_quality: number;
  points_accuracy: number;
  weighting_accuracy: number;
  is_valid: "y" | "n";
}

export interface entity_contest_permissions {
  entity_contest_permission_id: number;
  contest_id: number;
  entity_id: number;
  time_created: string;
  created_by_eid: number;
}

export interface entity_powwows {
  entity_powwow_id: number;
  powwow_id: number;
  entity_id: number;
  powwow_note: string;
  time_posted: string;
  pcd: string;
  status_attendance: "na" | "y" | "n" | "m";
  status_payment: "paid" | "not_paid";
  item_id: number;
  attended: "y" | "n" | "na";
  one_liner: string;
  details: string;
  roles: "organizer" | "recorder" | "profiler" | "promoter" | "photographer";
  visibility: "n" | "y";
  organizer: "no" | "volunteer" | "pending" | "ok" | "ng" | "declined";
  proposer: "no" | "volunteer" | "pending" | "ok" | "ng" | "declined";
  photographer: "no" | "volunteer" | "pending" | "ok" | "ng" | "declined";
  reporter: "no" | "volunteer" | "pending" | "ok" | "ng" | "declined";
  pns_interviewer: "no" | "volunteer" | "pending" | "ok" | "ng" | "declined";
  speaker: "no" | "volunteer" | "pending" | "ok" | "ng" | "declined";
  host: "no" | "volunteer" | "pending" | "ok" | "ng" | "declined";
  track: "y" | "n";
  notices_sent: number;
}

export interface entity_powwows_favorite {
  entity_powwows_favorite_id: number;
  entity_id: number;
  powwow_id: number;
  time_created: string;
}

export interface entity_registration_answers {
  entity_registration_answer_id: number;
  entity_id: number;
  notify_new_trainings: "y" | "n" | "unspecified";
  interested_trainer: "y" | "n" | "unspecified";
  interested_trainer_topic: string;
  invite_to_sn_groups: "y" | "n" | "unspecified";
  subscribe_tgb: "y" | "n" | "unspecified";
}

export interface entity_statements {
  statement_id: number;
  entity_id: number;
  statement_note: string;
  time_posted: string;
}

export interface Event {
  event_id: number;
  allow_feedback: "y" | "n";
  organizer_id: number;
  co_organizer_id: number;
  co_organizer_id2: number;
  co_organizer_id3: number;
  co_organizer_id4: number;
  co_organizer_id5: number;
  event_name: string;
  conference_type: "international" | "regional" | "seminar";
  allow_registration: "y" | "n";
  time_posted: string;
  description: string | Uint8Array;
  description_virtual: string;
  description_backup: string;
  image_url: string;
  image_thumb_url: string;
  date_start: string;
  date_end: string;
  time_start: string;
  time_end: string;
  country_code: string;
  city_region: string;
  event_visible: "y" | "n" | "d";
  call_for_speakers: string;
  display_schedule: "y" | "n";
  display_photos: "y" | "n";
  display_map: "y" | "n";
  display_gallery: "y" | "n";
  quick_pay: "y" | "n";
  group_image_url: string;
  associated_powwow_id: number;
  hits: number;
  description_not_published: string;
  principal_image: string;
  short_info: string;
  short_description: string;
  mail: string;
  quotes_page: string;
  prepare_page: string;
  public_forum_id: number;
  event_type: "local_institution" | "online" | "hybrid";
  lead_with: "local_institution" | "online";
  primary_audience: "freelancer" | "company" | "end_client";
  certificate_id: number;
  display_country_counter: "y" | "n";
  registration_requires_payment: "y" | "n";
  show_support_link: "y" | "n";
  show_mailing_list: "y" | "n";
  show_email_friend: "y" | "n";
  show_cancellation_policy: "y" | "n";
  show_frontpage_attendance: "y" | "n";
  show_custom_registration: "y" | "n";
  default_currency: "usd" | "eur";
  subtitle: string;
  manual_registrant_approval: "y" | "n";
  new_registrant_notif: "y" | "n";
  parent_id: number;
  lang: string;
  include_recruitment: "y" | "n";
  show_membership_offer: "y" | "n";
  months_since_membership: number;
  show_sales: "y" | "n";
  sales_custom_html: "y" | "n";
  twitter_widget: string;
  linkedin_group: string;
  twitter_hashtag: string;
  display_live_coverage: "y" | "n";
  livestream_url: string;
  custom_faq: string;
}

export interface events_notes {
  event_note_id: number;
  event_type: string;
  event_id: number;
  projected_income_cur: string;
  projected_income_value: number;
  actual_income_cur: string;
  actual_income_value: number;
  income_notes: string;
  projected_expenses_cur: string;
  projected_expenses_value: number;
  actual_expenses_cur: string;
  actual_expenses_value: number;
  expenses_notes: string;
  event_notes: string;
  platform_fee: number;
}

export interface event_accommodation {
  event_accomadation_id: number;
  event_id: number;
  accommodation_data: string;
  time_modified: string;
}

export interface event_badges_disc_specs {
  event_badges_disc_spec_id: number;
  event_id: number;
  entity_id: number;
  disc_spec_1: number;
  disc_spec_2: number;
  disc_spec_3: number;
}

export interface event_badges_prefs {
  event_badge_pref_id: number;
  entity_id: number;
  event_id: number;
  time_added: string;
  first_name: string;
  last_name: string;
  country: string;
  translator_type: string;
  languages: string;
  parent_eid: number;
}

export interface event_comments {
  event_comment_id: number;
  event_id: number;
  entity_id: number;
  body: string;
  time_created: string;
  vetted: "y" | "n" | "?";
  removed: "y" | "n";
}

export interface event_days {
  event_day_id: number;
  event_id: number;
  event_date: string;
  event_day_title: string;
  event_day_description: string;
}

export interface event_discounts {
  event_discount_id: number;
  event_id: number;
  description: string;
  discount_type: "percentage" | "total";
  price: number;
  visible: "y" | "n";
  time_created: string;
  updated_by_eid: number;
}

export interface event_discount_codes {
  event_discount_code_id: number;
  event_id: number;
  discount_id: number;
  code: string;
  entity_id: number;
  time_created: string;
  updated_by_eid: number;
}

export interface event_feedbacks {
  event_feedback_id: number;
  event_id: number;
  entity_id: number;
  time: string;
  satisfaction_rating: number;
  liked_best: string;
  would_change: string;
  location_comment: string;
  length: "too_long" | "too_short" | "just_right" | "no_opinion";
  price_rating: number;
  did_attend: "y" | "n";
  future_will_attend: "y" | "n";
  future_location: string;
  future_volunteer: string;
  event_feedback_visible: "y" | "n";
}

export interface event_messages {
  event_message_id: number;
  event_id: number;
  time_to_send: string;
  time_sent: string;
  query: string;
  subject: string;
  msg_html: string;
  msg_txt: string;
}

export interface event_packages {
  package_id: number;
  event_id: number;
  comments: string;
  package_name: string;
  package_type: "early-bird" | "last-minute" | "normal" | "special" | "add-on";
  date_start: string;
  date_end: string;
  notes: string;
  show_student_discount_box: "y" | "n";
}

export interface event_packages_items {
  package_item_id: number;
  package_id: number;
  item_name: string;
  available_to:
    | "members"
    | "non-members"
    | "anyone"
    | "student_members"
    | "student_no_member"
    | "any_student"
    | "corporate"
    | "professional"
    | "moderators";
  membership: "y" | "n";
  store_item_id: number;
  notes: string;
  account_type: "" | "freelancer" | "company";
}

export interface event_parents {
  event_parent_id: number;
  name: string;
  subtitle: string;
  description: string;
  short_description: string;
  image_url: string;
  time_created: string;
}

export interface event_photos {
  event_photo_id: number;
  event_id: number;
  event_photo_url: string;
  event_photo_description: string;
  entity_id: number;
  visible: "y" | "n";
}

export interface event_presentations {
  event_presentation_id: number;
  event_id: number;
  speaker_id: number;
  session_id: number;
  presentation_title: string;
  visibility: "all" | "attendees" | "none";
  time_uploaded: string;
  file_path: string;
  file_url: string;
  deleted: "y" | "n";
}

export interface event_registrant_objectives {
  event_registrant_objective_id: number;
  event_id: number;
  entity_id: number;
  professional_education: "y" | "n" | "p";
  meeting_new_clients: "y" | "n" | "p";
  meeting_new_clients_what_service: string;
  meeting_to_collaborate: "y" | "n" | "p";
  meeting_to_collaborate_with_type: string;
  meeting_translators_to_outsource: "y" | "n" | "p";
  meeting_translators_to_outsource_areas: string;
  get_discount_software: "y" | "n" | "p";
  socializing: "y" | "n" | "p";
  having_fun_translation_day: "y" | "n" | "p";
  experience_a_virtual_conference: "y" | "n" | "p";
  winning_prizes: "y" | "n" | "p";
  other: "y" | "n" | "p";
  other_specify: string;
}

export interface EventRegistrations {
  event_registration_id: number;
  event_id: string;
  entity_id: number;
  time_registered: string;
  time_admitted: string;
  registration_type: "freelancer" | "company";
  registered_for: "local" | "virtual";
  participant_bio: string;
  event_message: string;
  event_registration_visible: "y" | "n" | "pending";
  part_paid: "y" | "n";
  days: number;
  certificate: "yes" | "no";
  contact_email: string;
  contact_first: string;
  contact_last: string;
  company_name: string;
  contact_country_code: string;
  use_profile_photo: "y" | "n";
  contact_job_title: string;
  contact_phone: string;
  contact_address: string;
  contact_city: string;
  contact_region: string;
  contact_postal: string;
  can_dress_rehearsal: "y" | "n";
}

export interface event_registrations_inxpo {
  event_registration_inxpo_id: number;
  event_registration_id: number;
  time_registered: string;
  time_updated: string;
  api_password: string;
  image_uploaded_filename: string;
}

export interface event_registrations_restored {
  event_registration_id: number;
  event_id: number;
  entity_id: number;
  time_registered: string;
  time_admitted: string;
  registration_type: "freelancer" | "company";
  registered_for: "local" | "virtual";
  participant_bio: string;
  event_message: string;
  event_registration_visible: "y" | "n" | "pending";
  part_paid: "y" | "n";
  days: number;
  certificate: "yes" | "no";
  contact_email: string;
  contact_first: string;
  contact_last: string;
  company_name: string;
  contact_country_code: string;
  use_profile_photo: "y" | "n";
  contact_job_title: string;
  contact_phone: string;
  contact_address: string;
  contact_city: string;
  contact_region: string;
  contact_postal: string;
}

export interface event_registration_answers {
  event_registration_answer_id: number;
  event_id: number;
  entity_id: number;
  event_registration_id: number;
  company_size: string;
  planned_purchase_types_agency: string;
  planned_purchase_types_client: string;
  planned_software_purchases: string;
  industries: string;
  other_industry: string;
  purchase_authority: string;
  purchase_timeframe: string;
  annual_spend: string;
  referral_source: string;
}

export interface event_registration_entity_amounts {
  event_registration_entity_amount_id: number;
  event_id: number;
  entity_id: number;
  conference_amount: number;
  social_event_amount: number;
  time_updated: string;
  updated_by_eid: number;
}

export interface event_registration_items {
  event_registration_item_id: number;
  event_id: number;
  event_day_id: number;
  entity_id: number;
  event_workshop_id: number;
  event_session_id: number;
  event_service_id: number;
  event_service_item_id: number;
  event_service_menu_item_id: number;
  quantity: number;
  visible: "y" | "n";
  time_created: string;
  last_updated: string;
  updated_by_eid: number;
  ip_address: string;
}

export interface event_registration_messages {
  event_registration_message_id: number;
  event_id: number;
  account_type: string;
  subject: string;
  message_plaintxt: string;
  message_html: string;
}

export interface event_restrictions {
  event_restriction_id: number;
  event_id: number;
  type: string;
  value: string;
}

export interface event_rooms {
  event_room_id: number;
  event_id: number;
  room_name: string;
  capacity: number;
  event_room_visible: "y" | "n";
  specific_date: string;
}

export interface event_services {
  event_service_id: number;
  event_id: number;
  service_type: "hotel" | "restaurant" | "tour";
  name: string;
  address: string;
  phone: string;
  email: string;
  description: string;
  logo_url: string;
  image_url: string;
  time_created: string;
  updated_by_eid: number;
}

export interface event_service_items {
  event_service_item_id: number;
  event_service_id: number;
  event_id: number;
  event_day_id: number;
  service_item_type:
    | "breakfast"
    | "lunch"
    | "snack"
    | "dinner"
    | "single"
    | "double"
    | "tour"
    | "lunch_no_guests";
  description: string;
  seats: number;
  price: number;
  time_created: string;
  updated_by_eid: number;
}

export interface event_service_menu_items {
  event_service_menu_item_id: number;
  event_id: number;
  event_service_item_id: number;
  food_type: "meat" | "fish" | "vegetable" | "other";
  starter_description: string;
  main_course_description: string;
  desert_description: string;
  remarks_description: string;
}

export interface event_social {
  event_social_id: number;
  event_id: number;
  social_data: string;
  time_modified: string;
}

export interface event_social_entries {
  event_social_entry_id: number;
  event_id: number;
  time_updated: string;
  title: string;
  link: string;
}

export interface event_social_entry_entities_interested {
  event_social_entry_entities_interested_id: number;
  event_id: number;
  entity_id: number;
  event_social_entry_id: number;
  time_added: string;
}

export interface event_sponsors {
  sponsor_id: number;
  event_id: number;
  corp_eid: number;
  sponsor_name: string;
  sponsor_description: string;
  image: string;
  sponsor_url: string;
  type:
    | "platinum"
    | "exhibiting"
    | "contributing"
    | "gold"
    | "premium"
    | "supporting"
    | "hosting"
    | "online"
    | "";
  visible: "y" | "n";
  display_order: number;
  logo_orientation: "horizontal" | "vertical";
  virtual_booth_key: string;
  page_html: string;
  slug: string;
  room_id: string;
  chat_on: "y" | "n";
}

export interface event_sponsorship_docs {
  event_sponsorship_doc_id: number;
  event_id: number;
  file_path: string;
  description: string;
  uploaded_by_eid: number;
  time_uploaded: string;
}

export interface event_sponsors_ads {
  ad_id: number;
  sponsor_id: number;
  ad_name: string;
  ad_html: string;
  start_date: string;
  end_date: string;
  featured: "y" | "n";
}

export interface event_venue {
  event_venue_id: number;
  event_id: number;
  venue_data: string;
  time_modified: string;
}

export interface event_workshops {
  event_workshop_id: number;
  workshop_name: string;
  workshop_description: string;
  workshop_category_id: number;
  workshop_date: string;
  event_id: number;
  room_id: number;
  logo_url: string;
  web_url: string;
  visible: "y" | "n";
  time_created: string;
}

export interface event_workshop_speakers {
  event_workshop_speaker_id: number;
  event_workshop_id: number;
  speaker_id: number;
}

export interface featured_session {
  id_featured_session: number;
  session_id: number;
  display: "yes" | "no";
  event_id: number;
  hours_to_next_change: number;
  days_to_next_change: number;
  last_change: string;
}

export interface group_event_purchases {
  group_purchase_id: number;
  group_id: number;
  entity_id: number;
  group_purchased: "y" | "n";
  date_purchased: string;
}

export interface image_galleries {
  gallery_id: number;
  event_id: number;
  gallery_name: string;
  gallery_description: string;
  status: "disabled" | "enabled";
  time_created: string;
}

export interface image_gallery_items {
  image_gallery_item_id: number;
  gallery_id: number;
  image_name: string;
  image_tag: string;
  time_inserted: string;
  visible: "y" | "n";
  image_original_name: string;
}

export interface mail_a_friend {
  friend_id: number;
  entity_id: number;
  mail: string;
  date: string;
  conference_id: number;
}

export interface notification_templates {
  notification_template_id: number;
  type: string;
  subject: string;
  text: string;
  time_last_updated: string;
  updated_by: number;
  active: "y" | "n";
}

export interface powwows {
  powwow_id: number;
  organizer_id: number;
  "co-organizer": number;
  time_posted: string;
  visible: "y" | "n" | "d";
  powwow_city: string;
  powwow_country_code: string;
  powwow_date: string;
  powwow_end_date: string;
  powwow_tzid: string;
  powwow_details: string;
  proposer_id: number;
  powwow_image_city: string;
  powwow_image_guests: string;
  profiler_id: number;
  recorder_id: number;
  validated: "n" | "y";
  powwow_theme: string;
  powwow_advance_payment: "none" | "local" | "via_proz";
  advance_payment_amount: number;
  advance_payment_currency: string;
  powwow_language: string;
  help_offered: "y" | "n";
  lat: number;
  lng: number;
  geo_city_id: number;
  hash_tag: string;
  embed_virtual_room: "y" | "n";
  powwow_type: "in_person" | "virtual" | "virtual_in_person";
  notify_users: "y" | "n";
}

export interface powwow_attendance {
  powwow_attendance_id: number;
  powwow_id: number;
  enterer_id: number;
  entered_date: string;
  entity_id: number;
  name: string;
  email_address: string;
  phone: string;
  verified: number;
  verified_by: string;
}

export interface powwow_disc_specs {
  powwow_disc_specs_id: number;
  powwow_id: number;
  disc_spec_id: number;
}

export interface powwow_notes {
  powwow_note_id: number;
  powwow_id: number;
  entity_id: number;
  note_body: string;
  time_posted: string;
  note_title: string;
  visibility: "y" | "n";
  mailout: "y" | "n";
  time_mail_ok: string;
  time_mail_sent: string;
  allow_testimonie: "y" | "n";
  testimonie: "y" | "n" | "?";
  language: string;
}

export interface powwow_photos {
  powwow_photo_id: number;
  powwow_id: number;
  entity_id: number;
  comment: string;
  visible: "y" | "n";
  date: string;
}

export interface powwow_photos_items {
  id: number;
  powwow_photo_id: number;
  file: string;
  comment: string;
  visibility: "yes" | "no";
}

export interface powwow_reports {
  powwow_report_id: number;
  powwow_id: number;
  entity_id: number;
  language: string;
  report: string;
  images: string;
  visible: number;
}

export interface powwow_services {
  powwow_service_id: number;
  powwow_id: number;
  service_id: number;
}

export interface powwow_virtual_rooms {
  powwow_virtual_room_id: number;
  powwow_id: number;
  room_name: string;
  order: number;
}

export interface prize_pages {
  prize_page_id: number;
  event_id: number;
  page_html: string;
  draft_html: string;
  time_created: string;
  created_by: number;
  updated_by: number;
  last_updated: string;
}

export interface recruitment_applications {
  recruitment_application_id: number;
  applicant_eid: number;
  poster_eid: number;
  event_id: number;
  post_id: number;
  applicant_first_name: string;
  applicant_last_name: string;
  applicant_email: string;
  applicant_phone: string;
  applicant_cell: string;
  applicant_services: string;
  applicant_experience: string;
  time_created: string;
  has_been_read: "y" | "n";
  app_status: "under_review" | "accepted" | "rejected";
}

export interface recruitment_num_emails_sent {
  email_sent_id: number;
  event_id: number;
  sender_eid: number;
  num_sent: number;
  time_updated: string;
}

export interface recruitment_posts {
  recruitment_post_id: number;
  event_id: number;
  poster_id: number;
  agency_id: number;
  source_language: string;
  target_language: string;
  recruitment_type: string;
  description: string;
  time_created: string;
  deleted: "y" | "n";
  deleted_by: number;
  time_deleted: string;
  closed: "y" | "n";
  closed_time: string;
}

export interface registrant_activities {
  registrant_activity_id: number;
  event_id: number;
  entity_id: number;
  type: "session" | "event" | "sale" | "exhibitor";
  type_id: number;
  time: string;
  event_state: "not_yet" | "underway" | "over" | "unknown";
}

export interface reported_abuse {
  abuse_id: number;
  reporter_eid: number;
  reported_name: string;
  reported_eid: number;
  reported_url: string;
  reported_description: string;
  time_reported: string;
  resolved: "y" | "n";
  resolved_by: number;
  resolved_time: string;
}

export interface sessions {
  session_id: number;
  event_id: number;
  proposed_by: string;
  date: string;
  time_start: string;
  time_end: string;
  event_room_id: number;
  session_name: string;
  description: string;
  session_type: "local" | "virtual";
  type:
    | "speech"
    | "focus_group"
    | "training"
    | "break"
    | "meal"
    | "workshop"
    | "Registration/Reception"
    | "round_table"
    | "no_session"
    | "on_demand"
    | "virtual_powwow";
  session_visible: "y" | "n";
  session_vetted: "y" | "n";
  display_time: "y" | "n";
  allow_guests: "y" | "n";
  capacity: number;
  signup_visible: "yes" | "no";
  can_be_featured: "yes" | "no";
  chat_enable: "y" | "n";
  chat_type: "external" | "internal";
  chat_room_id: string;
  livestream_channel_name: string;
  video_embed_code: string;
  external_room_number: number;
  members_only: "y" | "n";
  is_placeholder: "y" | "n";
  vote_enable: "y" | "n";
  vote_message: string;
  session_help_text: string;
  group_id: number;
  q_and_a: "y" | "n";
  redirect_at_end: "y" | "n";
  redirect_seconds: number;
}

export interface session_annotations {
  annotation_id: number;
  session_id: number;
  text: string;
  date: string;
  entity_id: number;
  status: "visible" | "hidden";
  name_space: string;
}

export interface session_characteristics {
  session_characteristic_id: number;
  session_id: number;
  characteristic_type: "disc_spec_id" | "country_code" | "language_code" | "service_id";
  type_specific_code: string;
}

export interface session_content_groups {
  content_group_id: number;
  event_id: number;
  group_name: string;
  type: string;
  type_specific_text: string;
  sort: number;
}

export interface session_feedbacks {
  session_feedback_id: number;
  entity_id: number;
  session_id: number;
  did_attend: "y" | "n";
  time: string;
  subject: string;
  comment: string;
  speaker_feedback: string;
  organizer_feedback: string;
  rating: number;
  learned: string;
  hide_name: "y" | "n";
  session_feedback_visible: "y" | "n";
  vetted: "yes" | "no" | "unvetted";
  mailed: "yes" | "no";
  vetted_time: string;
  vetted_by_eid: number;
}

export interface session_languages {
  session_language_id: number;
  session_id: number;
  event_id: number;
  language_code: string;
}

export interface session_permissions {
  session_permission_id: number;
  event_id: number;
  session_id: number;
  rule: string;
  rule_supporting_info: string;
  applies_to: string;
}

export interface session_poll_options {
  session_poll_option_id: number;
  session_poll_question_id: number;
  poll_option: string;
  time_added: string;
  added_by: number;
}

export interface session_poll_questions {
  session_poll_question_id: number;
  session_id: number;
  event_id: number;
  question: string;
  time_added: string;
  asker_eid: number;
  poll_is_visible: "y" | "n";
  voting_state: "open" | "closed" | "closed_show_results";
}

export interface session_poll_votes {
  poll_vote_id: number;
  voter_eid: number;
  session_poll_option_id: number;
  session_poll_question_id: number;
  time_voted: string;
}

export interface session_questions {
  session_question_id: number;
  session_id: number;
  asker_eid: number;
  is_private: "y" | "n";
  is_vetted: "y" | "n" | "pending";
  question: string;
  time_asked: string;
}

export interface session_question_answers {
  session_question_answer_id: number;
  session_question_id: number;
  answerer_eid: number;
  answer: string;
  time_answered: string;
}

export interface session_registrations {
  session_registration_id: number;
  session_id: number;
  entity_id: number;
  time_registered: string;
  num_guests: number;
  session_registration_visible: "y" | "n";
  vegetarian_meals: number;
  comment: string;
  lead_discussion: "y" | "n";
}

export interface session_speakers {
  session_speaker_id: number;
  session_id: number;
  speaker_id: number;
  session_bio: string;
  session_speaker_visible: "y" | "n";
  speaker_type: "speaker" | "leader" | "participant";
}

export interface session_topics {
  session_topic_id: number;
  session_id: number;
  topic: string;
}

export interface session_training_courses {
  session_training_course_id: number;
  session_id: number;
  course_id: number;
  time_added: string;
}

export interface session_urls {
  session_url_id: number;
  session_id: number;
  url: string;
  url_name: string;
  sort_order: number;
}

export interface session_videos {
  session_video_id: number;
  session_id: number;
  video_id: number;
  time_added: string;
  visible_to:
    | "meets_requirements"
    | "event_attendees"
    | "paying_members"
    | "attendees_or_members"
    | "everyone";
  visible_starting: "event_start" | "event_end" | "session_start" | "session_end" | "always";
  group_id: number;
}

export interface session_video_votes {
  session_video_vote_id: number;
  video_id: number;
  event_id: number;
  session_id: number;
  entity_id: number;
  time_voted: string;
}

export interface session_votes {
  session_vote_id: number;
  session_id: number;
  vote: number;
  entity_id: number;
}

export interface speakers {
  speaker_id: number;
  entity_id: number;
  speaker_name: string;
  tagline: string;
  contact_country_code: string;
  contact_phone: string;
  contact_email: string;
  contact_url: string;
  company: string;
  general_bio: string;
  image_url: string;
  speaker_visible: "y" | "n";
  vetted_speaker: "y" | "n";
}

export interface speaker_applications {
  speaker_application_id: number;
  applicant_eid: number;
  time_applied: string;
  experienced: "y" | "n";
  experience_details: string;
  topic: string;
  travel_abilities: string;
  visible: "y" | "n";
  session_duration: string;
  session_type_speech: "y" | "n";
  session_type_workshop: "y" | "n";
  session_type_focus_group: "y" | "n";
  session_type_training: "y" | "n";
  session_type_other: string;
  session_outline: string;
  learning_objective: string;
  event_id: number;
  any_conference: "y" | "n";
  session_languages: string;
  session_equipment: string;
  other_equipment_details: string;
  biography: string;
}

export interface survey_event_questions {
  survey_event_question_id: number;
  event_id: number;
  survey_question_id: number;
}

export interface survey_questions {
  survey_question_id: number;
  question: string;
  search_form_label: string;
}

export interface survey_responses {
  survey_response_id: number;
  survey_question_id: number;
  entity_id: number;
  response: "y" | "n";
}

export interface testimonials {
  testimonial_id: number;
  type: "f" | "o" | "s";
  entity_id: number;
  corp_eid: number;
  time_added: string;
  added_by: number;
  time_updated: string;
  edited_by: number;
  text: string;
  image_url: string;
  url: string;
  name: string;
  visible: "y" | "n";
}

export interface translators_day_feedback {
  translators_feedback_id: number;
  text: string;
  entity_id: number;
  visibility: "y" | "n" | "?" | "x";
  time_posted: string;
  type: "feedback" | "blunder" | "quotation" | "theme";
}

// INSERT INTO `meetups_pre_register_clicks` (`id_click`, `meetup_id`, `entity_id`, `link`) VALUES
// (1, 176, 3512308, 'https://live.remo.co/e/part-two-surviving-cataclysms-in'),
// INSERT INTO `meetups_hosts` (`id`, `meetup_id`, `entity_id`) VALUES
// (1, 181, 3512308),
// INSERT INTO `meetups` (`id`, `description`, `img_banner`, `link`, `start_date`, `end_date`, `membership_restriction`, `visible`, `deleted`) VALUES
// (1, 'First test meetup here', NULL, 'https://maverick.proz.com/?sp=meetup&sp_mode=admin', '2020-10-20 12:50:00', '2020-10-20 13:27:00', '', 'y', 'y'),

export interface MeetupsPreRegisterClick {
  id_click: number;
  meetup_id: number;
  entity_id: number;
  link: string;
}

export interface MeetupsHost {
  id: number;
  meetup_id: number;
  entity_id: number;
}

export interface Meetup {
  id: number;
  description: string;
  img_banner: string;
  link: string;
  start_date: string;
  end_date: string;
  membership_restriction: string;
  visible: "y" | "n";
  deleted: "y" | "n";
}
