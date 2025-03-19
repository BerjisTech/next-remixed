import React from "react";
import SideNav from "./_sideNav";
import UpdateUsername from "./_updateUsername";
import UpdateAccountType from "./_updateAccountType";
import LoginRecovery from "./_loginRecovery";
import ActiveSessions from "./_activeSessions";
import { BookUser } from "lucide-react";
import { auth } from "../../../../../../auth.config";
import { DEFAULT_USER_INFO_COLS } from "@/constants/common";
import { getUserInfo } from "@/server/data/user";

export default async function page() {
  const session = await auth();
  let user = await getUserInfo({
    ...DEFAULT_USER_INFO_COLS,
    entity_id: session?.user.entity_id,
    include_entity_resources_table: true,
    include_user_pass_table: true,
  });
  user = JSON.parse(JSON.stringify(user));
  return (
    <div className="flex flex-col md:flex-row gap-2">
      <div>
        {user ? (
          <React.Fragment>
            <div className="col-span-3 max-sm:w-full ">
              <UpdateUsername user={user} />
            </div>
            <UpdateAccountType user={user} />
            <LoginRecovery user={user} />
            <ActiveSessions user={user} />
            <section
              id="administrative_history"
              className="dark:bg-black border-[1px] flex-grow border-custom-gray rounded-xl p-5 mt-5 bg-white flex flex-col gap-4 justify-start"
            >
              <div className="flex items-center justify-start">
                <BookUser className="text-primary" />
                &nbsp;<span className="text-primary">Administrative history</span>
              </div>
              <div className="bg-gray-100 dark:bg-dark text-black dark:text-primary p-5 rounded-xl gap-4 flex flex-col">
                <p>
                  By using the site, you indicate your understanding of, and agreement to abide by
                  the{" "}
                  <a href="/rules" className="font-semibold text-primary">
                    site rules
                  </a>
                  . An administrative action might be taken by community moderators or by site staff
                  if they find that you are not following these rules. Administrative actions are
                  only visible to you —in addition to moderators and staff. Other users won't see
                  this information.
                </p>
                <p>
                  Administrative actions can be broken down into warnings and restrictions. A
                  warning may be placed on your profile, depending on the action, in a first
                  instance of rule violation. A warning does not prevent you from participating in
                  any area of the site; rather, it serves as a reminder to avoid further violating
                  the site rule(s) involved. A restriction may be placed on your profile upon
                  further site rule violation, or if the infraction is deemed to be serious. A
                  restriction will block your use of the area of the site upon which it has been
                  placed.
                </p>
                <p>
                  Administrative actions may also be divided into those which are active and
                  inactive. An active block or warning is still in effect, while an inactive block
                  or warning has either expired or been de-activated by site staff or moderators.
                  Valid administrative actions which are inactive will remain in your administrative
                  history. If you feel you have received an administrative action in error, please
                  submit a support request. Include details in your description of the situation,
                  and the issue will be reviewed by site staff.
                </p>
              </div>
            </section>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <section className="dark:bg-black border-[1px] flex-grow border-custom-gray rounded-xl p-5 mt-5 bg-white flex flex-col gap-4 justify-start">
              Invalidd User
            </section>
          </React.Fragment>
        )}
      </div>
      <SideNav />
    </div>
  );
}
