import Calendar from "@/components/shared/calender";
import UserCard from "@/components/shared/cards/userCard";
import { ProzUser } from "@/interfaces/account";
import React from "react";

const ProfileSidebar = ({ user }: { user: ProzUser }) => {
  return (
    <React.Fragment>
      <UserCard user={user} />
      <Calendar miniCalendar={true} user={user} />
    </React.Fragment>
  );
};

export default ProfileSidebar;
