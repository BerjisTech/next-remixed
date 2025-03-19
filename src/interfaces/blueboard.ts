export enum UserRole {
  ADMIN = "admin",
  JOB_MOD = "job_mod",
  USER = "user",
}

export enum EditStatus {
  MAIN = "main",
  DRAFT = "dr",
}

export enum RatingVisibility {
  VISIBLE = "y",
  HIDDEN = "n",
  TO_DELETE = "td",
}

export enum VetStatus {
  OK = "ok",
  PENDING = "pending",
  REJECTED = "rejected",
}

export interface Agency {
  agency_id: number;
  name: string;
  pwd: string;
  country: string;
  entity_id: number;
  avg_lwa: number;
}
export interface AgencyRating {
  agency_id: number;
  agency_rating_id: number;
  avg_lwa: number | null; // Nullable
  name: string;
  pwd: string;
  country: string;
  entity_id: number;
  rater_id: number;
  would_work_for: string;
  comment: string | null;
  comment_reply: string | null;
  vet_reply: string | null;
  reply_visibility: string;
  rating_visibility: string;
  request_reply_time: string | null; // Nullable datetime
  would_work_for_reply: string | null;
  time_reply: string | null; // Nullable datetime
}

export interface SearchOptions {
  search?: string;
  entityId?: number;
  isAdmin?: boolean;
  isJobMod?: boolean;
}
