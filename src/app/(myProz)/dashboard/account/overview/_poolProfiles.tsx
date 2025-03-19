import { Pool } from "@/interfaces/pool";
import Image from "next/image";
import React from "react";
interface PoolProfiles {
  pools_affiliations?: Pool[];
}

const PoolProfiles: React.FC<PoolProfiles> = ({ pools_affiliations = [] }) => {
  return (
    <div className="sm:w-full md:w-[48%] mb-5 border-[1px] border-solid border-custom rounded-xl p-5 bg-white dark:bg-black min-h-[200px] flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <Image
          src="/next/next_assets/images/icons/gridicons_add.svg"
          alt="Add Widgets"
          width={30}
          height={30}
          className="w-[30px] h-[30px]"
        />
        {/*<Image src="/next/next_assets/images/users.svg" alt="Pool profiles" className="w-[30px] h-[30px]" />*/}
        {/*<h3 className="text-primary text-[20px] dark:text-primary">Pool profiles</h3>*/}
      </div>
      {!pools_affiliations || pools_affiliations.length === 0 ? (
        <div className="flex flex-col gap-9 items-center justify-between">
          {/*<p className="dark:text-primary">*/}
          {/*    Pools are curated directories of pre-screened ProZ experts. Business members can browse them or*/}
          {/*    integrate the full list of pre-screened freelancers into their platforms.*/}
          {/*</p>*/}
          {/*<a href="#" target="_blank"*/}
          {/*    className="inline-table text-white dark:text-primary text-center text-[14px] w-full font-semibold bg-green-gradient dark:bg-green-gradient-dark p-3 rounded-xl">*/}
          {/*    Find pre-screened professionals*/}
          {/*</a>*/}
          <p className="dark:text-primary">
            You will be able to customize your dashboard with widgets, shortcuts, and more.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-9 items-center justify-between">
          {/* <div *ngFor="let affiliation of pools_affiliations" className="flex items-center justify-between">
                <span className="dark:text-primary">{{ getPoolNameAndStatus(affiliation) }} </span>
                <a href="https://www.proz.com/bb/{{affiliation.entity_pools_cache_id}}"
                    className="text-primary bg-accent dark:bg-dark px-3 py-2 rounded-lg" role="button">View
                    Application</a>
            </div> */}
        </div>
      )}
    </div>
  );
};

export default PoolProfiles;
