import { Button } from "@/components/shadcn/button";
import SideMenuDropdown from "@/components/shared/sideMenuDropdown";
import { Badge } from "@/components/shadcn/badge";
import React from "react";

const GlossariesSideMenu = () => {
  return (
    <div className="flex flex-col gap-8 sticky top-[80px]">
      <div className="flex flex-col gap-2">
        <Button className="justify-between" variant="default" size="xl">
          <div className="flex gap-2 items-center">
            <p className="text-sm font-semibold">Glossaries</p>
          </div>
          <Badge variant="secondary" className="text-sm text-primary font-semibold">
            3
          </Badge>
        </Button>
        <Button className="justify-between bg-grey-50" variant="secondary" size="xl">
          <div className="flex gap-2 items-center">
            <p className="text-sm text-grey-700">Glosspost</p>
          </div>
        </Button>
      </div>

      {/* My glossaries*/}
      <SideMenuDropdown title="My glossaries" defaultOpen={true}>
        <Button className="bg-grey-50 justify-start" variant="secondary" size="xl">
          <p className="text-sm text-grey-500 hover:text-primary">Menu item</p>
        </Button>
        <Button className="bg-grey-50 justify-start" variant="secondary" size="xl">
          <p className="text-sm text-grey-500 hover:text-primary">Menu item</p>
        </Button>
        <Button className="bg-grey-50 justify-start" variant="secondary" size="xl">
          <p className="text-sm text-grey-500 hover:text-primary">Menu item</p>
        </Button>
      </SideMenuDropdown>

      {/* Categories*/}
      <SideMenuDropdown title="Categories" defaultOpen={false}>
        <Button className="bg-grey-50 justify-start" variant="secondary" size="xl">
          <p className="text-sm text-grey-500 hover:text-primary">Terminology marketplace</p>
        </Button>
        <Button className="bg-grey-50 justify-start" variant="secondary" size="xl">
          <p className="text-sm text-grey-500 hover:text-primary">Open KudoZ Glossary</p>
        </Button>
        <Button className="bg-grey-50 justify-start" variant="secondary" size="xl">
          <p className="text-sm text-grey-500 hover:text-primary">Public personal glossaries</p>
        </Button>
        <Button className="bg-grey-50 justify-start" variant="secondary" size="xl">
          <p className="text-sm text-grey-500 hover:text-primary">TermWatch glossary</p>
        </Button>
        <Button className="bg-grey-50 justify-start" variant="secondary" size="xl">
          <p className="text-sm text-grey-500 hover:text-primary">Other terminology resources</p>
        </Button>
      </SideMenuDropdown>

      {/* Quick access */}
      <SideMenuDropdown title="Quick access" defaultOpen={false}>
        <Button className="bg-grey-50 justify-start" variant="secondary" size="xl">
          <p className="text-sm text-grey-500 hover:text-primary">Menu item</p>
        </Button>
        <Button className="bg-grey-50 justify-start" variant="secondary" size="xl">
          <p className="text-sm text-grey-500 hover:text-primary">Menu item</p>
        </Button>
        <Button className="bg-grey-50 justify-start" variant="secondary" size="xl">
          <p className="text-sm text-grey-500 hover:text-primary">Menu item</p>
        </Button>
      </SideMenuDropdown>
    </div>
  );
};

export default GlossariesSideMenu;
