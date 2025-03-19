export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import {
  getCommunities,
  getUsersCommunities,
  removeUserFromCommunity,
} from "@/server/data/communities";
import { getUserInfo } from "@/server/data/user";
import { DEFAULT_USER_INFO_COLS } from "@/constants/common";

export async function GET(req: NextRequest) {
  try {
    const params = req.nextUrl;

    // pagination
    const page = parseInt(params.searchParams.get("page") || "1", 10);
    const limit = parseInt(params.searchParams.get("limit") || "10", 10);

    if (page <= 0 || limit <= 0) {
      return NextResponse.json({ error: "Invalid pagination parameters" }, { status: 400 });
    }

    // criteria
    const entity_id = params.searchParams.get("entity_id");
    const community_id = params.searchParams.get("community_id");

    const criteria: any = {};
    if (entity_id) criteria.entity_id = entity_id;
    if (community_id) criteria.community_id = community_id;

    // csv download
    const download_csv = params.searchParams.get("download_csv") === "true";

    // Get user communities
    const userCommunities = await getUsersCommunities(criteria, page, limit, download_csv);

    if (!userCommunities.users.length) {
      return NextResponse.json({
        totalPages: 0,
        users: [],
      });
    }

    const enrichedData = await Promise.all(
      userCommunities.users.map(async (userCommunity: any) => {
        const options = {
          ...DEFAULT_USER_INFO_COLS,
          entity_id: userCommunity.entity_id,
          include_entities_table: true,
        };

        try {
          const userDetails = await getUserInfo(options);
          return { ...userCommunity, ...userDetails };
        } catch (error) {
          console.error(
            `Error fetching user details for entity_id ${userCommunity.entity_id}:`,
            error
          );
          return { ...userCommunity, error: "Failed to fetch user details" };
        }
      })
    );

    if (download_csv) {
      const communities = await getCommunities();

      // Make CSV
      const headers = ["Entity ID", "Name", "Communities"];
      const csvRows = [
        headers.join(","),
        ...enrichedData.map((user: any) => {
          return [
            user.entity_id,
            `${user.contact_first} ${user.contact_last}`,
            user.communities
              .split(",")
              .map(
                (communityId: string) =>
                  communities.find((c: any) => c.community_id === parseInt(communityId, 10)).name
              )
              .join("-"),
          ].join(",");
        }),
      ];

      const csvContent = csvRows.join("\n");
      return new Response(csvContent, {
        headers: {
          "Content-Type": "text/csv",
          "Content-Disposition": "attachment; filename=user_communities.csv",
        },
      });
    }

    return NextResponse.json({
      totalPages: userCommunities.totalPages,
      totalUsers: userCommunities.totalUsers,
      users: enrichedData,
    });
  } catch (error) {
    console.error("Error in /next/api/communities/users:", error);
    return NextResponse.json(
      { error: "Failed to fetch enriched user communities" },
      { status: 500 }
    );
  }
}

// PUT: Remove user updating "is_removed" to "y"
export async function PUT(req: NextRequest) {
  try {
    const { community_id, entity_id } = await req.json();

    if (!community_id || !entity_id) {
      return NextResponse.json({ error: "Invalid community_id or entity_id" }, { status: 400 });
    }

    const result = await removeUserFromCommunity(community_id, entity_id);

    if (result.length === 0) {
      return NextResponse.json({ error: "User not found in the community" }, { status: 404 });
    }

    return NextResponse.json({ message: "User removed from the community" });
  } catch (error) {
    console.error("Error in /next/api/communities/users PUT:", error);
    return NextResponse.json(
      { error: "Failed to remove user from the community" },
      { status: 500 }
    );
  }
}
