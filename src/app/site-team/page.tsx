import React from "react";
import dynamic from "next/dynamic";

const LiveHelpNoSSR = dynamic(() => import("./_liveHelp"), { ssr: false });
const SupportTeamNoSSR = dynamic(() => import("./_supportTeam"), { ssr: false });
const SiteTeam = () => {
  return (
    <div className="w-full relative bg-[#fbfafa] dark:bg-dark">
      <LiveHelpNoSSR />
      <SupportTeamNoSSR />
    </div>
  );
};

export default SiteTeam;
