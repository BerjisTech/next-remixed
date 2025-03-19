export interface Testimonial {
  id: number;
  entity_id?: number;
  name: string;
  title?: string; // Software reviews have titles
  message: string;
  type:
    | "business"
    | "community"
    | "CPN"
    | "invoicing"
    | "moderator Program"
    | "events"
    | "training"
    | "general"
    | "mentorship"
    | "probono";
  language: string; // For specifying the language of the testimonial
  country: string; // For specifying the country of the testimonial
  image_url?: string; // For specifying the avatar of the testimonial
  category?: string; // optional
}

export interface TestimonialMembership {
  testimonial_id: number;
  entity_id: number;
  title?: string;
  testimonial_type: string;
  type_specific_id: number;
  message: string;
  date_added: string; // ISO 8601 format
  visibility: "y" | "n";
  photo_visible: "y" | "n";
  language: string;
  account_type: string;
  name: string;
  country: string;
  site_url: string;
  image_url: string;
  workplace_id: number;
  virtual_conference_id: number;
  show_in_membership_page: "y" | "n";
}

export interface WebsiteFeedBack {
  suggestion: string;
  url: string;
  rating: number;
}
