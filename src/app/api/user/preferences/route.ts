import { dbCleanColumnName, parseAndValidateId } from "@/server/data/common";
import { executeQuery } from "@/server/database/mysql/queryHelper";
import { parseSerializedPhp } from "@/utils/helpers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const entityId = parseAndValidateId(request.nextUrl.searchParams.get("entityId"));
  if (!entityId) {
    return NextResponse.json({ error: "Invalid user id" }, { status: 400 });
  }
  const { prefName, value, category, defaultSetting } = await request.json();
  try {
    if (category && category === "about_me_module") {
      const updateStr = updatePhpSerializedSetting(
        prefName,
        value === "y" ? "on" : "off",
        defaultSetting
      );

      const sql = `
      UPDATE personal.prof_prefs
      SET ${dbCleanColumnName(category)} = ?
      WHERE entity_id = ?
      `;
      const result = await executeQuery(sql, "master", [updateStr, entityId]);
    } else if (category === "entity_volunteer_settings") {
      const sql = `
      UPDATE proz.entity_volunteer_settings
      SET visible = ?
      WHERE entity_id = ?
      `;

      const result = await executeQuery(sql, "master", [value, entityId]);
    } else {
      const sql = `
      UPDATE personal.prof_prefs
      SET ${dbCleanColumnName(prefName)} = ?
      WHERE entity_id = ?
      `;
      const result = await executeQuery(sql, "master", [value, entityId]);
    }

    return NextResponse.json([]);
  } catch (error) {
    console.error("Error fetching pairs :", error);
    return NextResponse.json({ error: "Error fetching pairs" }, { status: 500 });
  }
}

// Main function to update the settings and serialize back to PHP format
function updatePhpSerializedSetting(
  prefName: string,
  preference: string,
  defaultSetting: string
): string {
  // Parse the current serialized settings
  const parsedSettings = parseSerializedPhp(defaultSetting) as Record<string, string>;

  // Update the setting for the given preference name
  parsedSettings[prefName] = preference;

  // Serialize back to PHP format
  return serializeToPhpString(parsedSettings);
}

// Serialize a JavaScript object back into PHP's serialized format
function serializeToPhpString(obj: Record<string, string>): string {
  const entries = Object.entries(obj);
  let serialized = `a:${entries.length}:{`;

  for (const [key, value] of entries) {
    serialized += `s:${key.length}:"${key}";s:${value.length}:"${value}";`;
  }

  serialized += "}";
  return serialized;
}
