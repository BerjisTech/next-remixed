"use client";
import { TAGLINES_SERVICES } from "@/constants/common";
import { useContentHook } from "@/hooks/useContentHook";
import { AboutMe, ProzUser } from "@/interfaces/account";
import { usePathname } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";

const Bio = ({ user }: { user: ProzUser }) => {
  let pathname = usePathname() ?? "";
  const [isMounted, setIsMounted] = useState(false); // Need this for the react-tooltip
  const { setDrawerVisibility } = useContentHook();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const currentTab = useMemo(() => pathname.split("/").pop() as string, [pathname]);

  const { title, aboutMe } = useMemo(() => {
    let aboutMe = "";
    let filteredBio: AboutMe[] = [];
    let title = "Bio";

    if (currentTab && ["translating", "interpreting", "subtitling"].includes(currentTab)) {
      const { pools_profiles, pools_about_me } = user.pools_data;
      const serviceId = TAGLINES_SERVICES[currentTab];

      if (currentTab === "interpreting" && pools_profiles?.interpreters) {
        title = `${user.site_name}'s interpreting introduction as an interpreter`;
        aboutMe = pools_about_me?.interpreters || "";
      } else if (currentTab === "subtitling" && pools_profiles?.subtitlers) {
        title = `${user.site_name}'s subtitling introduction as a subtitler`;
        aboutMe = pools_about_me?.subtitlers || "";
      } else {
        title = `${user.site_name}'s translating introduction as a translator`;
        filteredBio =
          user.service_specific_about_me?.filter((item) => item.service_id === serviceId) || [];
        aboutMe = filteredBio.length > 0 ? filteredBio[0].value : "";
      }
    } else {
      filteredBio = user.service_specific_about_me?.filter((item) => item.service_id === 0) || [];
      aboutMe = filteredBio.length > 0 ? filteredBio[0].value : "";
    }

    return { title, aboutMe };
  }, [currentTab, user]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex flex-col justify-start items-start self-stretch gap-4 p-6 rounded-custom bg-accent dark:bg-black">
      <div className="flex justify-between items-center self-stretch relative gap-4">
        {aboutMe ? (
          <p className="w-full text-lg font-semibold text-left dark:text-white text-dark-blue-hue">
            {title}
          </p>
        ) : (
          <p className="w-full text-lg font-semibold text-left text-dark-blue-hue dark:text-accent-foreground">
            Start by adding a bio to let other linguists know who you are
          </p>
        )}
        {user?.can_edit && (
          <span
            className="material-symbols-outlined text-primary dark:text-primary"
            role="button"
            onClick={() => setDrawerVisibility("bio")}
          >
            edit
          </span>
        )}
      </div>
      <div className="w-full">
        <p
          id="bio-overview-container"
          className="prose !max-w-full dark:text-white"
          dangerouslySetInnerHTML={{ __html: aboutMe }}
        ></p>
      </div>
    </div>
  );
};

export default Bio;
