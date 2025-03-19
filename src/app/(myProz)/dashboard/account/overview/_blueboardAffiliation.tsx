import Image from "next/image";
import React from "react";

const BlueboardAffiliation = () => {
  // blueboard_affiliations
  return (
    <div className="sm:w-full md:w-[48%] mb-5 border-[1px] border-solid border-custom rounded-xl p-5 bg-white dark:bg-black min-h-[200px] flex flex-col gap-4">
      {false ? (
        <React.Fragment>
          <div className="flex items-center gap-3">
            <Image
              src="/next/next_assets/images/group.svg"
              alt="Affiliations"
              width={30}
              height={30}
            />

            <h3 className="text-primary text-[20px] dark:text-primary">Affiliations</h3>
          </div>
          <div className="w-full flex flex-col gap-3">
            {/* <div *ngFor="let affiliation of blueboard_affiliations" className="flex items-center justify-between">
                    <span className="dark:text-primary">Blue Board: {{ affiliation.name }} </span>
                    <a href="https://www.proz.com/bb/{{affiliation.agency_id}}"
                        className="text-primary bg-accent dark:bg-dark px-3 py-2 rounded-lg" role="button">View</a>
                </div> */}
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="w-full flex items-center gap-3">
            <Image
              src="/next/next_assets/images/icons/gridicons_add.svg"
              alt="Add Widgets"
              width={30}
              height={30}
            />
            {/*<Image src="/next/next_assets/images/blueboard_icon.png" className="w-[30px] h-[30px]" alt="Blueboard icon" />*/}
            {/*<h3 className="text-primary text-[20px] flex gap-2 items-center justify-center dark:text-primary">Browse*/}
            {/*    the Blue Board</h3>*/}
          </div>
          <div className="w-full flex flex-col gap-3">
            {/*<p className="dark:text-primary">*/}
            {/*    The Blue Board is your go-to resource for finding trusted language industry outsourcers, with*/}
            {/*    ProZ*/}
            {/*    user's ratings on their likelihood of working with them again (LWA) and valuable feedback.*/}
            {/*</p>*/}
            <p className="dark:text-primary">
              You will be able to customize your dashboard with widgets, shortcuts, and more.
            </p>
            {/*<a href="#" target="_blank"*/}
            {/*    className="inline-table text-white dark:text-primary text-center text-[14px] w-full font-semibold bg-green-gradient dark:bg-green-gradient-dark p-3 rounded-xl">*/}
            {/*    View and give feedback*/}
            {/*</a>*/}
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default BlueboardAffiliation;
