import { INITIAL_STAFF, INITIAL_STAFF_DEV } from "@/constants/common";
import { Staff } from "@/interfaces/staff";
import { usePathname } from "next/navigation";
import { useState, useCallback, useEffect } from "react";

export function useStaffHook() {
  const [staffList, setStaffList] = useState<Staff[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    process.env.NEXT_PUBLIC_NODE_ENV === "development"
      ? setStaffList([...INITIAL_STAFF, ...INITIAL_STAFF_DEV])
      : setStaffList([...INITIAL_STAFF]);
  }, []);

  const getAllStaff = useCallback(() => {
    return staffList;
  }, [staffList]);

  const isStaff = useCallback(
    (id: number) => {
      return id === 1 || staffList.some((staff) => staff.id === id);
    },
    [staffList]
  );

  const getStaffById = useCallback(
    (id: number) => {
      return staffList.find((staff) => staff.id === id);
    },
    [staffList]
  );

  const getSpecificAreaTeam = useCallback(
    (area: string = "site-team") => {
      let filteredStaff: Staff[] = [];
      switch (area) {
        case "site-team":
          const mainSupportProviderByArea = [3608087, 3834148, 1445299];
          filteredStaff = staffList.filter((staff) => mainSupportProviderByArea.includes(staff.id));
          break;
        case "member-services":
          filteredStaff = staffList.filter((item) => item.title == "Member services");
          break;
        default:
          break;
      }
      return filteredStaff;
    },
    [staffList]
  );

  return { getAllStaff, isStaff, getStaffById, getSpecificAreaTeam };
}
