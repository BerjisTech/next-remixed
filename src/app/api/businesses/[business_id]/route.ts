// app/api/businesses/[business_id]/route.ts

import { NextRequest, NextResponse } from "next/server";
import { getBusinessById } from "@/server/data/businesses";
import { executeQuery } from "@/server/database/mysql/queryHelper";
import { BusinessResponse } from "@/interfaces/business";

// Define allowed tables and their fields
type TableName = "business_data" | "businesses";

interface AllowedFields {
  business_data: readonly string[];
  businesses: readonly string[];
}

const allowedFields: AllowedFields = {
  business_data: [
    "common_name",
    "legal_name",
    "slogan",
    "description",
    "website_url",
    "contact_phone",
    "city",
  ] as const,
  businesses: ["current_membership_package", "completeness_score"] as const,
} as const;

interface PatchRequestBody {
  field: string;
  value: string | number;
  table: TableName;
}

interface PutRequestBody {
  current_membership_package?: string;
  completeness_score?: number;
  business_data: {
    common_name?: string;
    legal_name?: string;
    slogan?: string;
    description?: string;
    website_url?: string;
    contact_phone?: string;
    city?: string;
  };
}

export async function GET(
  request: NextRequest,
  { params }: { params: { business_id: string } }
): Promise<NextResponse<BusinessResponse>> {
  try {
    if (!params.business_id) {
      return NextResponse.json(
        {
          success: false,
          message: "Business ID is required",
          data: null,
          error: "Missing business_id parameter",
        },
        { status: 400 }
      );
    }

    const business = await getBusinessById(parseInt(params.business_id));

    if (!business) {
      return NextResponse.json(
        {
          success: false,
          message: "Business not found",
          data: null,
          error: "Business not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Business fetched successfully",
      data: business,
    });
  } catch (error) {
    console.error("Error fetching business:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch business data",
        data: null,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { business_id: string } }
): Promise<NextResponse<BusinessResponse>> {
  try {
    const businessId = parseInt(params.business_id);
    const data = (await request.json()) as PutRequestBody;

    // Validate business exists
    const existingBusiness = await getBusinessById(businessId);
    if (!existingBusiness) {
      return NextResponse.json(
        {
          success: false,
          message: "Business not found",
          data: null,
          error: "Business not found",
        },
        { status: 404 }
      );
    }

    // Update business data
    if (data.current_membership_package !== undefined || data.completeness_score !== undefined) {
      const updateBusinessQuery = `
                UPDATE business.businesses
                SET 
                    current_membership_package = COALESCE(?, current_membership_package),
                    completeness_score = COALESCE(?, completeness_score)
                WHERE business_id = ?
            `;

      await executeQuery(updateBusinessQuery, "master", [
        data.current_membership_package,
        data.completeness_score,
        businessId,
      ]);
    }

    // Update business_data
    if (data.business_data) {
      const updateBusinessDataQuery = `
                UPDATE business.business_data
                SET 
                    common_name = COALESCE(?, common_name),
                    legal_name = COALESCE(?, legal_name),
                    slogan = COALESCE(?, slogan),
                    description = COALESCE(?, description),
                    website_url = COALESCE(?, website_url),
                    contact_phone = COALESCE(?, contact_phone),
                    city = COALESCE(?, city)
                WHERE business_id = ?
            `;

      await executeQuery(updateBusinessDataQuery, "master", [
        data.business_data.common_name,
        data.business_data.legal_name,
        data.business_data.slogan,
        data.business_data.description,
        data.business_data.website_url,
        data.business_data.contact_phone,
        data.business_data.city,
        businessId,
      ]);
    }

    // Fetch updated business
    const updatedBusiness = await getBusinessById(businessId);
    return NextResponse.json({
      success: true,
      message: "Business updated successfully",
      data: updatedBusiness,
    });
  } catch (error) {
    console.error("Error updating business:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to update business",
        data: null,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { business_id: string } }
): Promise<NextResponse<BusinessResponse>> {
  try {
    const businessId = parseInt(params.business_id);
    const { field, value, table = "business_data" } = (await request.json()) as PatchRequestBody;

    // Validate business exists
    const existingBusiness = await getBusinessById(businessId);
    if (!existingBusiness) {
      return NextResponse.json(
        {
          success: false,
          message: "Business not found",
          data: null,
          error: "Business not found",
        },
        { status: 404 }
      );
    }

    // Type guard for table name
    if (!["business_data", "businesses"].includes(table)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid table name",
          data: null,
          error: "Invalid table specified",
        },
        { status: 400 }
      );
    }

    // Validate field name
    if (!allowedFields[table].includes(field)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid field name",
          data: null,
          error: `Invalid field name: ${field}`,
        },
        { status: 400 }
      );
    }

    // Update single field
    const updateQuery = `
            UPDATE business.${table}
            SET ${field} = ?
            WHERE business_id = ?
        `;

    await executeQuery(updateQuery, "master", [value, businessId]);

    // Fetch updated business
    const updatedBusiness = await getBusinessById(businessId);
    return NextResponse.json({
      success: true,
      message: "Business field updated successfully",
      data: updatedBusiness,
    });
  } catch (error) {
    console.error("Error updating business field:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to update business field",
        data: null,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
