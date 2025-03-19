export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { getCommunityMembers } from "@/server/data/communities";
import { entityGetPhoto } from "@/server/data/common";
import { ProzMembershipManager } from "@/server/services/Membership";

const MEMBERSHIP_TYPES = {
  PROFESSIONAL: ["pro_plus", "pro_premium", "pro_premium_yearly"],
  BUSINESS: ["bus_plus", "bus_enterprise", "corporate"],
  PREMIUM: [
    "premium",
    "prem_to_plat",
    "platinum",
    "jobs_platinum",
    "kudoz_platinum",
    "blue_board_platinum",
    "community_platinum",
    "tools_platinum",
  ],
} as const;

const getMembershipCategory = (membershipType: string): string => {
  const type = membershipType?.toLowerCase();

  if (MEMBERSHIP_TYPES.PROFESSIONAL.includes(type as any)) return "professional";
  if (MEMBERSHIP_TYPES.BUSINESS.includes(type as any)) return "business";
  if (MEMBERSHIP_TYPES.PREMIUM.includes(type as any)) return "premium";
  return "free";
};

export async function GET(req: NextRequest) {
  try {
    const params = req.nextUrl;
    const communityId = parseInt(params.searchParams.get("community_id") || "0", 10);

    if (!communityId || communityId <= 0) {
      return NextResponse.json({ error: "Invalid community_id" }, { status: 400 });
    }

    const membersData = await getCommunityMembers(communityId);
    const members = Array.isArray(membersData) ? membersData : membersData.rows;
    console.log("Raw members data:", members);

    const membershipService = new ProzMembershipManager();

    const memberIds = members.map((member) => member.id);
    const membershipTypes = await membershipService.getMembershipTypesByEntityIds(memberIds);
    console.log("Membership types:", membershipTypes);

    const membersWithDetails = await Promise.all(
      members.map(async (member: any) => {
        let profilePicture = "";

        try {
          profilePicture = await entityGetPhoto(member.id, "square");
        } catch (error) {
          console.warn(`Failed to fetch profile picture for member ID ${member.id}:`, error);
        }

        const membershipType = membershipTypes[member.id] || "free";
        const isActive = membershipType !== "free";
        const membershipCategory = getMembershipCategory(membershipType);

        const languages = Array.isArray(member.languages)
          ? member.languages
          : typeof member.languages === "string"
            ? member.languages
                .split(",")
                .filter(Boolean)
                .map((lang: string) => lang.trim())
            : [];

        return {
          id: member.id,
          name: member.name,
          profilePicture,
          languages,
          country: member.country || "",
          isOnline: Math.random() > 0.5,
          membership: membershipType,
          membershipStatus: isActive ? "active" : "expired",
          isActive,
          membershipCategory,
          isProfessionalMember: membershipCategory === "professional",
        };
      })
    );

    const sortedMembers = membersWithDetails.sort((a, b) => {
      const priorityOrder = ["business", "professional", "premium", "free"];
      const priorityA = priorityOrder.indexOf(a.membershipCategory);
      const priorityB = priorityOrder.indexOf(b.membershipCategory);

      if (priorityA !== priorityB) return priorityA - priorityB;

      return a.name.localeCompare(b.name);
    });

    console.log("Final sorted members:", sortedMembers);
    return NextResponse.json(sortedMembers);
  } catch (error) {
    console.error("Error processing community members:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
