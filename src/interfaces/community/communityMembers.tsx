// Type definitions
export interface Member {
  id: number;
  name: string;
  profilePicture: string;
  languages: string | string[];
  country: string;
  membership: string; // 'platinum' | 'pro_premium' | 'pro_plus' | 'pro_premium_yearly' | 'bus_enterprise' | 'corporate' | 'none'
  isOnline?: boolean;
  status?: "pending" | "approved" | "removed";
  isActive?: boolean;
  membershipStatus?: string;
  timeStart?: string;
  timeEnd?: string;
  specialization?: string[];
  businessSize?: string;
  yearsInBusiness?: number;
  isProfessionalMember?: boolean;
}
export interface WhosInSectionProps {
  communityType: "mastermind" | "womenInTranslation" | "proBono" | "interpreters" | "cpn";
  members: Member[];
  communityName: string;
  membership: "premium" | "none" | "certified_pro";
  renewal_date: string;
  isAdmin?: boolean;
  onMemberStatusChange?: (memberId: number, status: "approved" | "removed") => Promise<void>;
}

export type CommunityType = "mastermind" | "womenInTranslation" | "proBono" | "interpreters";

export const fetchWomenInTranslationMembers = async (): Promise<Member[]> => {
  try {
    const response = await fetch(
      "https://docker-syr10.proz.com/next/api/communities/landing-members?community_id=1",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data.map((member: any) => ({
      id: member.id,
      name: member.name,
      profilePicture: member.profilePicture || "",
      languages: Array.isArray(member.languages) ? member.languages : [],
      country: member.country || "Not specified",
      isOnline: Boolean(member.isOnline),
      specialization: member.specialization || [],
      businessSize: member.businessSize,
      yearsInBusiness: member.yearsInBusiness,
      membership: member.membership || "none",
      membershipStatus: member.membershipStatus,
      isActive: member.isActive,
      status: member.status,
      timeStart: member.timeStart,
      timeEnd: member.timeEnd,
      isProfessionalMember: member.isProfessionalMember,
    }));
  } catch (error) {
    console.error("Error fetching WIT members:", error);
    throw error;
  }
};

export const fetchMastermindMembers = async (): Promise<Member[]> => {
  try {
    const response = await fetch(
      "https://docker-syr10.proz.com/next/api/communities/landing-members?community_id=2",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data.map((member: any) => ({
      id: member.id,
      name: member.name,
      profilePicture: member.profilePicture || "",
      languages: Array.isArray(member.languages) ? member.languages : [],
      country: member.country || "Not specified",
      isOnline: Boolean(member.isOnline),
      specialization: member.specialization || [],
      businessSize: member.businessSize,
      yearsInBusiness: member.yearsInBusiness,
      membership: member.membership || "none",
      membershipStatus: member.membershipStatus,
      isActive: member.isActive,
      status: member.status,
      timeStart: member.timeStart,
      timeEnd: member.timeEnd,
      isProfessionalMember: member.isProfessionalMember,
    }));
  } catch (error) {
    console.error("Error fetching mastermind members:", error);
    throw error;
  }
};

export const fetchProBonoMembers = async (): Promise<Member[]> => {
  try {
    const response = await fetch(
      "https://docker-syr10.proz.com/next/api/communities/landing-members?community_id=3",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data.map((member: any) => ({
      id: member.id,
      name: member.name,
      profilePicture: member.profilePicture || "",
      languages: Array.isArray(member.languages) ? member.languages : [],
      country: member.country || "Not specified",
      isOnline: Boolean(member.isOnline),
      specialization: member.specialization || [],
      businessSize: member.businessSize,
      yearsInBusiness: member.yearsInBusiness,
      membership: member.membership || "none",
      membershipStatus: member.membershipStatus,
      isActive: member.isActive,
      status: member.status,
      timeStart: member.timeStart,
      timeEnd: member.timeEnd,
      isProfessionalMember: member.isProfessionalMember,
    }));
  } catch (error) {
    console.error("Error fetching Pro Bono members:", error);
    throw error;
  }
};

export const fetchInterpretersMembers = async (): Promise<Member[]> => {
  try {
    const response = await fetch(
      "https://docker-syr10.proz.com/next/api/communities/landing-members?community_id=4",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data.map((member: any) => ({
      id: member.id,
      name: member.name,
      profilePicture: member.profilePicture || "",
      languages: Array.isArray(member.languages) ? member.languages : [],
      country: member.country || "Not specified",
      isOnline: Boolean(member.isOnline),
      specialization: member.specialization || [],
      businessSize: member.businessSize,
      yearsInBusiness: member.yearsInBusiness,
      membership: member.membership || "none",
      membershipStatus: member.membershipStatus,
      isActive: member.isActive,
      status: member.status,
      timeStart: member.timeStart,
      timeEnd: member.timeEnd,
      isProfessionalMember: member.isProfessionalMember,
    }));
  } catch (error) {
    console.error("Error fetching Interpreters members:", error);
    throw error;
  }
};

// Initialize member counts with default values
export const memberCounts: Record<CommunityType, number> = {
  mastermind: 0,
  womenInTranslation: 0,
  proBono: 0,
  interpreters: 0,
};

// Function to update member counts dynamically
export const updateMemberCount = (type: CommunityType, count: number) => {
  memberCounts[type] = count;
};

export const getMembersByCommunity = async (community: CommunityType): Promise<Member[]> => {
  switch (community) {
    case "mastermind":
      return await fetchMastermindMembers();
    case "womenInTranslation":
      return await fetchWomenInTranslationMembers();
    case "proBono":
      return await fetchProBonoMembers();
    case "interpreters":
      return await fetchInterpretersMembers();
    default:
      return [];
  }
};
