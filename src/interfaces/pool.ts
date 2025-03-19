export interface Pool {
  entity_pools_cache_id: string;
  entity_id: string;
  pool_id: string;
  status: string;
  time_cached: string;
  assigned_staff_eid: string;
  request_id: string;
  request_id_time_updated: string;
  request_id_by_eid: string;
}

export interface Mentor {
  entity_id: string;
  site_name: string;
  profile_picture: string;
  country_code: string;
  language_pairs: [];
}
