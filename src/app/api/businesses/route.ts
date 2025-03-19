export const dynamic = "force-dynamic";

import { getBusinesses } from "@/server/data/businesses";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const filters: { [key: string]: string | undefined } = {};

    // Extract page and pageSize from search params
    const page = Number(searchParams.get("page")) || 1;
    const pageSize = Number(searchParams.get("pageSize")) || 10;

    // Extract filters using forEach instead of for...of
    searchParams.forEach((value, key) => {
      if (key !== "page" && key !== "pageSize") {
        filters[key] = value;
      }
    });

    // Get businesses with or without filters
    const businesses = await getBusinesses(filters, page, pageSize);

    if (!businesses || businesses.data.length === 0) {
      return NextResponse.json(
        {
          message: "No businesses found",
          data: [],
          total: 0,
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        message: "Businesses fetched successfully",
        data: businesses,
        page,
        pageSize,
        filters,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching businesses:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch businesses",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

// export async function PUT(request: NextRequest) {
//     try {
//         const data = await request.json();
//         const response = await fetch(
//             `https://docker-syr10.proz.com/next/api/businesses?business_id=${data.business_id}`,
//             {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(data),
//             }
//         );

//         if (!response.ok) {
//             throw new Error('Failed to update business');
//         }

//         return NextResponse.json({
//             success: true,
//             message: 'Business updated successfully'
//         });
//     } catch (error) {
//         console.error('Error updating business:', error);
//         return NextResponse.json({
//             error: 'Failed to update business',
//             details: error instanceof Error ? error.message : 'Unknown error'
//         }, { status: 500 });
//     }
// }
