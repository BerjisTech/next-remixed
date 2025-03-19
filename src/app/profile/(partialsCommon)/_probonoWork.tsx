import PersonalPrefs from "@/components/shared/preferences/personalPref";
import { ProzUser } from "@/interfaces/account";
import Image from "next/image";
import React from "react";

const ProbonoWork = ({ user }: { user: ProzUser }) => {
  if (!user.pro_bono_data) return null; // Do nothing if no pro bono data

  const { total_words_count, interpreting_hours } = user.pro_bono_data;
  const { entity_volunteer_settings } = user;

  let proBonoStatsStr = "";
  if (total_words_count > 0 && interpreting_hours === 0) {
    proBonoStatsStr = `A ProZ.com Pro Bono volunteer who has translated ${total_words_count.toLocaleString()} words.`;
  } else if (total_words_count === 0 && interpreting_hours > 0) {
    proBonoStatsStr = `A ProZ.com Pro Bono volunteer who has interpreted ${interpreting_hours} `;
    proBonoStatsStr += interpreting_hours === 1 ? "hour." : "hours.";
  } else if (total_words_count > 0 && interpreting_hours > 0) {
    proBonoStatsStr = `A ProZ.com Pro Bono volunteer who has translated ${total_words_count.toLocaleString()} words and interpreted ${interpreting_hours} `;
    proBonoStatsStr += interpreting_hours === 1 ? "hour." : "hours.";
  }

  return (
    <div className="bg-secondary flex flex-col justify-center items-start self-stretch gap-3 p-6 rounded-custom dark:bg-black">
      <div className="flex flex-col xl:flex-row justify-start items-start relative gap-4 w-full">
        <div className="w-full md:w-[70px] h-[70px] relative overflow-hidden">
          <Image
            src="/next/next_assets/images/svg/proz-probono-badge.svg"
            alt="probono-logo.png"
            width={200}
            height={200}
          />
        </div>
        <div className="flex flex-col justify-center items-start relative gap-3 flex-1 flex-grow">
          <div className="flex flex-row justify-between w-full">
            <p className="flex-grow-0 flex-shrink-0 text-lg font-semibold text-left text-dark-blue-hue">
              ProZ Pro Bono volunteer
            </p>
            {user.is_owner && (
              <div className="flex flex-row gap-3">
                <PersonalPrefs
                  category="entity_volunteer_settings"
                  prefName="visible"
                  value={
                    entity_volunteer_settings && entity_volunteer_settings.visible === "y"
                      ? "y"
                      : "n"
                  }
                  entityId={user.entity_id}
                />
              </div>
            )}
          </div>
          <div className="w-full flex justify-center items-center relative gap-2.5 px-4 py-2 rounded-lg bg-accent dark:bg-dark">
            <p className="w-full text-sm font-medium text-left text-primary">{proBonoStatsStr}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProbonoWork;
