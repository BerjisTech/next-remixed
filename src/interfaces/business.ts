export interface Business {
  business_id: number;
  account_manager_eid: number;
  time_account_manager_assigned: string | null;
  time_created: string;
  entered_by_eid: number;
  main_profile_eid: number;
  current_membership_package: string | null;
  time_membership_expires: string | null;
  expired_membership_package: string;
  time_membership_expired: string | null;
  hubspot_company_id: string;
  cached_avg_lwa_five_year: string;
  cached_total_entries_five_year: number;
  completeness_score: number;
  cached_total_jobs_posted_6_month: number;
  business_data?: BusinessData;
}

export interface BusinessData {
  business_data_id: number;
  business_id: number;
  common_name: string;
  legal_name: string;
  is_cpn: string;
  slogan: string | null;
  country_code: string;
  city: string | null;
  address: string | null;
  website_url: string | null;
  logo_url: string | null;
  logo_original_url: string | null;
  logo_cloudinary_id: string | null;
  is_end_client: string;
  contact_phone: string | null;
  contact_email: string | null;
  year_established: number | null;
  size_employees: string | null;
  capacity_words_per_day: string | null;
  description: string | null;
  location_latitude: number;
  location_longitude: number;
}

export interface BusinessProfile extends Business {
  business_data: BusinessData;
}

export interface BusinessFilters {
  business_id?: number;
  common_name?: string;
  country_code?: string;
  is_cpn?: string;
  completeness_score_min?: number;
}

// Response interfaces for API endpoints
export interface BusinessResponse {
  success: boolean;
  message: string;
  data: BusinessProfile | null;
  error?: string;
  service_id?: string;
  lang_pair?: string;
  specialty?: string;
  search?: string;
}

export interface BusinessesResponse {
  success: boolean;
  message: string;
  data: BusinessProfile[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
  filters?: BusinessFilters;
  error?: string;
}
