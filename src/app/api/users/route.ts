import { NextRequest, NextResponse } from "next/server";
import { getAllUsers } from "@/server/data/users";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const filters: any = {};

    const services = searchParams.get("services");
    const gen_spec = searchParams.get("gen_spec");
    const service_id = searchParams.get("service_id");
    const lang_pairs = searchParams.get("lang_pairs");
    const page = searchParams.get("page");

    if (services) {
      filters.services = services.split(",").map((s) => s.trim());
    }
    if (gen_spec) {
      try {
        filters.gen_spec = JSON.parse(gen_spec);
      } catch (error) {
        console.error("Error parsing gen_spec:", error);
      }
    }
    if (service_id) {
      filters.service_id = service_id;
    }
    if (lang_pairs) {
      filters.lang_pairs = lang_pairs.split(",").map((lp) => lp.trim());
    }

    // Clean and improve filters
    for (const key in filters) {
      if (Array.isArray(filters[key])) {
        filters[key] = filters[key].filter((item) => item !== "");
      } else if (typeof filters[key] === "object" && filters[key] !== null) {
        filters[key] = Object.fromEntries(
          Object.entries(filters[key]).filter(([_, v]) => v !== "")
        );
      } else if (filters[key] === "") {
        delete filters[key];
      }
    }

    const getUsers = await getAllUsers(filters, page ? parseInt(page) : 1);
    return NextResponse.json(getUsers, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch users", err_msg: error }, { status: 500 });
  }
}
