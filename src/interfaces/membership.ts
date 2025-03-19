export interface Plan {
  name: string;
  yearlyPrice: string;
  monthlyPrice: string;
  description: string;
  popular?: boolean;
  features: string[];
}

export interface BusinessPlanFeature {
  name: string;
  standard: string | boolean;
  plus: string | boolean;
  enterprise: string | boolean;
}

export interface BusinessPlanCategory {
  name: string;
  features: BusinessPlanFeature[];
}

export interface PremiumOnboarding {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  availability: string;
  bookingUrl: string;
}

export interface PremiumBenefit {
  title: string;
  description: string;
  icon?: string;
}

export interface PremiumPlan extends Plan {
  onboarding: PremiumOnboarding[];
  benefits: PremiumBenefit[];
}

export interface ProPlanFeature {
  name: string;
  free: string | undefined;
  standard: string | undefined;
  plus: string | undefined;
  premium: string | undefined;
  detailUrl?: string;
  value?: number;
}

export interface ProPlanCategory {
  name: string;
  features: ProPlanFeature[];
}
