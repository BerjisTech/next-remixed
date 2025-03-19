export interface KudozNotificationPreference {
  entity_id: string;
  easy: string;
  pro: string;
  asker_type: string;
  all_discs: string;
  global_notifications: string;
  notifications_on: string;
  ignore_neophytes: string;
  point_types: string;
  ignore_homework: string;
  ignore_offensive: string;
  ignore_kog_team: string;
  peer_comments: string;
  question_contributed: string;
  question_asked: string;
}

export interface KudozActivity {
  point_totals_by_level: Record<string, number>;
  total_points_all_levels: number;
  count_pairs: number;
  count_fields: number;
  count_fields_detailed: number;
  top_language_pairs: Record<string, number>;
  top_fields: Record<string, number>;
  top_detailed_fields: Record<string, number>;
}

export interface PointsInTopPairs {
  [pair: string]: number;
}

export interface PointsInTopFields {
  [field: string]: number;
}

export interface PointsInTopFieldsDetailed {
  [fieldDetailed: string]: number;
}
