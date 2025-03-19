// src/types/polls.ts

export interface FeaturedPoll {
  poll_id: number;
  date_set: Date;
  expiration_date: Date;
  topic_id: number;
}

export interface PollComment {
  com_id: number;
  poll_id: number;
  time: number;
  host: string;
  browser: string;
  name: string;
  email: string;
  message: string;
}

export interface PollConfig {
  config_id: number;
  base_gif: string;
  lang: string;
  title: string;
  vote_button: string;
  result_text: string;
  total_text: string;
  voted: string;
  send_com: string;
  img_height: number;
  img_length: number;
  table_width: string;
  bgcolor_tab: string;
  bgcolor_fr: string;
  font_face: string;
  font_color: string;
  type: string;
  check_ip: number;
  lock_timeout: number;
  time_offset: string;
  entry_pp: number;
  poll_version: string;
  base_url: string;
  result_order: string;
  def_options: number;
  polls_pp: number;
}

export interface PollData {
  id: number;
  poll_id: number;
  option_id: number;
  option_text: string;
  color: string;
  votes: number;
}

export interface PollIndex {
  poll_id: number;
  question: string;
  timestamp: number;
  status: number;
  logging: number;
  exp_time: number;
  expire: number;
  comments: number;
  entity_id: number;
  can_be_featured: "y" | "n";
  vetted: "y" | "n";
  sort_order: number;
  link_url: string;
  credit_author: "y" | "n";
  permission: "all" | "plat" | "non-plat";
  time_created: Date;
  time_updated: Date;
  updated_by: number;
}

export interface PollIP {
  ip_id: number;
  poll_id: number;
  ip_addr: string;
  timestamp: number;
}

export interface PollLog {
  log_id: number;
  poll_id: number;
  option_id: number;
  timestamp: number;
  ip_addr: string;
  host: string;
  agent: string;
  entity_id: number;
}

export interface PollLogArchive {
  log_id: number;
  poll_id: number;
  option_id: number;
  timestamp: number;
  ip_addr: string;
  host: string;
  agent: string;
  entity_id: number;
}

export interface PollLogBak {
  log_id: number;
  poll_id: number;
  option_id: number;
  timestamp: number;
  ip_addr: string;
  host: string;
  agent: string;
  entity_id: number;
}

export interface PollLogSummary {
  poll_log_summary_id: number;
  entity_id: number;
  total_answers: number;
  time_updated: Date;
}

export interface PollTemplate {
  tpl_id: number;
  tplset_id: number;
  title: string;
  template: string;
}

export interface PollTemplateSet {
  tplset_id: number;
  tplset_name: string;
  created: Date;
}

export interface PollUser {
  user_id: number;
  username: string;
  userpass: string;
  session: string;
  last_visit: number;
}
