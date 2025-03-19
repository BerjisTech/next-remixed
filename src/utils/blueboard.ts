import { RatingVisibility, UserRole } from "@/interfaces/blueboard";

export const isUserAuthorized = (
  userRole: UserRole,
  requiredRoles: UserRole[] = [UserRole.ADMIN, UserRole.JOB_MOD]
): boolean => {
  return requiredRoles.includes(userRole);
};

export const formatRating = (rating: number): string => {
  return rating.toFixed(1);
};

export const getVisibilityLabel = (visibility: RatingVisibility): string => {
  const labels = {
    [RatingVisibility.VISIBLE]: "Visible",
    [RatingVisibility.HIDDEN]: "Hidden",
    [RatingVisibility.TO_DELETE]: "To Delete",
  };
  return labels[visibility] || "Unknown";
};
