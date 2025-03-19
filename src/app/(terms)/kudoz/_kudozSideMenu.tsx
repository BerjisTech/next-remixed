import { Button } from "@/components/shadcn/button";
import Image from "next/image";
import SideMenuDropdown from "@/components/shared/sideMenuDropdown";
import { Activity, MessageCircleQuestion, Rss } from "lucide-react";
import { Badge } from "@/components/shadcn/badge";
import React from "react";

const KudozSideMenu = () => {
  return (
    <div className="flex flex-col gap-8 sticky top-[80px]">
      <Button variant="secondary" size="xl">
        <Image
          src="/next/next_assets/images/icons/add-light-green.svg"
          alt="Add button"
          width="20"
          height="20"
        />
        <p className="text-sm text-primary font-semibold">Ask a question</p>
      </Button>

      <div className="flex flex-col gap-2">
        <Button className="justify-between" variant="default" size="xl">
          <div className="flex gap-2 items-center">
            <MessageCircleQuestion />
            <p className="text-sm font-semibold">Recent questions</p>
          </div>
          <Badge variant="secondary" className="text-sm text-primary font-semibold">
            3
          </Badge>
        </Button>
        <Button className="justify-between bg-grey-50" variant="secondary" size="xl">
          <div className="flex gap-2 items-center">
            <Activity className="text-grey-700" />
            <p className="text-sm text-grey-700">My activity</p>
          </div>
        </Button>
        <Button className="justify-between bg-grey-50" variant="secondary" size="xl">
          <div className="flex gap-2 items-center">
            <Rss className="text-grey-700" />
            <p className="text-sm text-grey-700">Feed</p>
          </div>
        </Button>
      </div>

      {/* Recent Activity*/}
      <SideMenuDropdown title="Recent Activity" defaultOpen={true}>
        <Button className="bg-grey-50 justify-start" variant="secondary" size="xl">
          <p className="text-sm text-grey-500 hover:text-primary">New TermWatch terms</p>
        </Button>
        <Button className="bg-grey-50 justify-start" variant="secondary" size="xl">
          <p className="text-sm text-grey-500 hover:text-primary">New personal glossaries</p>
        </Button>
        <Button className="bg-grey-50 justify-start" variant="secondary" size="xl">
          <p className="text-sm text-grey-500 hover:text-primary">Newly glossaries for sale</p>
        </Button>
        <Button className="bg-grey-50 justify-start" variant="secondary" size="xl">
          <p className="text-sm text-grey-500 hover:text-primary">Activity from tracked users</p>
        </Button>
      </SideMenuDropdown>

      {/* Glossary Tools*/}
      <SideMenuDropdown title="Glossary Tools" defaultOpen={false}>
        <Button className="bg-grey-50 justify-start" variant="secondary" size="xl">
          <p className="text-sm text-grey-500 hover:text-primary">My glossaries</p>
        </Button>
        <Button className="bg-grey-50 justify-start" variant="secondary" size="xl">
          <p className="text-sm text-grey-500 hover:text-primary">Open glossaries</p>
        </Button>
        <Button className="bg-grey-50 justify-start" variant="secondary" size="xl">
          <p className="text-sm text-grey-500 hover:text-primary">TermWatch glossary</p>
        </Button>
        <Button className="bg-grey-50 justify-start" variant="secondary" size="xl">
          <p className="text-sm text-grey-500 hover:text-primary">User-curated glossaries</p>
        </Button>
        <Button className="bg-grey-50 justify-start" variant="secondary" size="xl">
          <p className="text-sm text-grey-500 hover:text-primary">Terminology marketplace</p>
        </Button>
      </SideMenuDropdown>
    </div>
  );
};

export default KudozSideMenu;
