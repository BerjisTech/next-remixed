import { useAppDispatch } from "@/lib/store/hooks";
import { setProfileSliceBits } from "@/lib/store/features/profile/profileSlice";
import { setNavigationSliceBits } from "@/lib/store/features/navigation/navigationSlice";

export const useProfileHook = () => {
  const dispatch = useAppDispatch();

  const stopPseudoSession = () => {
    dispatch(setProfileSliceBits({ bitToSet: "pseudoId", value: 0 }));
    dispatch(setProfileSliceBits({ bitToSet: "isPseudo", value: false }));
    dispatch(setNavigationSliceBits({ bitToSet: "showPseudoPopup", value: false }));
    dispatch(setProfileSliceBits({ bitToSet: "forceReload", value: true }));
  };

  const startPseudoSession = (pseudoId: number): void => {
    dispatch(setProfileSliceBits({ bitToSet: "pseudoId", value: pseudoId }));
    dispatch(setProfileSliceBits({ bitToSet: "isPseudo", value: true }));
    dispatch(setNavigationSliceBits({ bitToSet: "showPseudoPopup", value: false }));
    dispatch(setProfileSliceBits({ bitToSet: "forceReload", value: true }));
  };

  const resetUserData = (): void => {
    // removePseudoId();
    // removeStoredPseudoUser();
    // removeStoredUser()
  };

  return { startPseudoSession, stopPseudoSession, resetUserData };
};
