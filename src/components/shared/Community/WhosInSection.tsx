import React, { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import MemberAvatar from "./MemberAvatar";
import MembershipCard from "../account/membershipCard";
import { Member, WhosInSectionProps } from "@/interfaces/community/communityMembers";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/shadcn/tooltip";

const MEMBERSHIP_TYPES = {
  PROFESSIONAL: ["pro_plus", "pro_premium", "pro_premium_yearly"],
  BUSINESS: ["bus_plus", "bus_enterprise", "corporate"],
  PREMIUM: [
    "premium",
    "prem_to_plat",
    "platinum",
    "jobs_platinum",
    "kudoz_platinum",
    "blue_board_platinum",
    "community_platinum",
    "tools_platinum",
  ],
} as const;

const getMemberSortPriority = (member: Member): number => {
  const hasRibbon = hasActivePaidMembership(member);
  const hasProfilePic = Boolean(member.profilePicture);

  // Priority ordering (higher number = higher priority):
  // 4: Has ribbon + profile picture
  // 3: Has ribbon, no profile picture
  // 2: No ribbon, has profile picture
  // 1: No ribbon, no profile picture
  if (hasRibbon && hasProfilePic) return 4;
  if (hasRibbon) return 3;
  if (hasProfilePic) return 2;
  return 1;
};

const parseLanguages = (languages: string | string[]): string[] => {
  if (Array.isArray(languages)) {
    return languages;
  }
  return languages
    .split(",")
    .filter(Boolean)
    .map((lang) => lang.trim());
};

const getRibbonType = (membership?: string) => {
  if (!membership) return null;

  const membershipLower = membership.toLowerCase();

  if (MEMBERSHIP_TYPES.BUSINESS.includes(membershipLower as any)) {
    if (membershipLower === "bus_enterprise") return "business-enterprise";
    if (membershipLower === "corporate") return "business-corporate";
    return "business";
  }

  if (MEMBERSHIP_TYPES.PROFESSIONAL.includes(membershipLower as any)) {
    return "professional";
  }

  if (MEMBERSHIP_TYPES.PREMIUM.includes(membershipLower as any)) {
    return "premium";
  }

  return null;
};

const getRibbonColor = (membership?: string) => {
  if (!membership) return "";

  const membershipLower = membership.toLowerCase();

  if (membershipLower.includes("business") || membershipLower.includes("corporate")) {
    return "bg-yellow-400 text-black";
  }
  if (membershipLower.includes("professional") || membershipLower.includes("pro")) {
    return "bg-blue-600 text-white";
  }
  return "bg-primary text-white";
};
const decodeText = (text: string) => {
  try {
    return decodeURIComponent(escape(text));
  } catch (e) {
    console.error("Error decoding text:", e);
    return text;
  }
};

const hasActivePaidMembership = (member: Member) => {
  if (!member.membership || member.membership.toLowerCase() === "free") {
    return false;
  }

  return member.isActive && getRibbonType(member.membership) !== null;
};

const getMembershipDisplayText = (membership?: string) => {
  if (!membership || membership.toLowerCase() === "free") return "";

  const membershipFormatted = membership
    .replace(/_/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return `This is a Proz.com ${membershipFormatted} member - click for more information`;
};

const WhosInSection: React.FC<WhosInSectionProps> = ({
  communityType,
  members: initialMembers,
  communityName,
  membership,
  renewal_date,
  isAdmin = false,
  onMemberStatusChange,
}) => {
  const [members, setMembers] = useState<Member[]>(initialMembers);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [selectedMembers, setSelectedMembers] = useState<number[]>([]);

  const languageDropdownRef = useRef<HTMLDivElement>(null);
  const countryDropdownRef = useRef<HTMLDivElement>(null);

  const itemsPerPage = 9;

  // Only one filteredMembers implementation with priority sorting
  const filteredMembers = useMemo(() => {
    return members
      .filter((member) => {
        const memberLanguages = Array.isArray(member.languages)
          ? member.languages
          : member.languages
              .split(",")
              .filter(Boolean)
              .map((lang) => lang.trim());

        const matchesSearch =
          searchQuery === "" ||
          member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          member.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
          memberLanguages.some((lang) => lang.toLowerCase().includes(searchQuery.toLowerCase()));

        const matchesLanguages =
          selectedLanguages.length === 0 ||
          selectedLanguages.every((lang) => memberLanguages.includes(lang));

        const matchesCountries =
          selectedCountries.length === 0 || selectedCountries.includes(member.country);

        return matchesSearch && matchesLanguages && matchesCountries;
      })
      .sort((a, b) => {
        // First sort by priority (highest to lowest)
        const priorityA = getMemberSortPriority(a);
        const priorityB = getMemberSortPriority(b);

        if (priorityB !== priorityA) {
          return priorityB - priorityA; // Higher priority first
        }

        // If priorities are equal, sort alphabetically by name
        return a.name.localeCompare(b.name);
      });
  }, [members, searchQuery, selectedLanguages, selectedCountries]);
  useEffect(() => {
    if (initialMembers?.length) {
      console.log("Initial members from API:", initialMembers);
      const transformedMembers = initialMembers.map((member) => {
        return {
          ...member,
          name: decodeText(member.name),
          country: decodeText(member.country),
          languages: Array.isArray(member.languages)
            ? member.languages.map((lang) => decodeText(lang))
            : typeof member.languages === "string"
              ? member.languages
                  .split(",")
                  .filter(Boolean)
                  .map((lang) => decodeText(lang))
              : [],
          membership: member.membership || "free",
          membershipStatus: member.membershipStatus || member.status || "expired",
          isActive: Boolean(member.isActive || member.status === "approved"),
          timeStart: member.timeStart,
          timeEnd: member.timeEnd,
        };
      });
      console.log("Transformed members:", transformedMembers);
      setMembers(transformedMembers);
    }
  }, [initialMembers]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target as Node)
      ) {
        setShowLanguageDropdown(false);
      }
      if (
        countryDropdownRef.current &&
        !countryDropdownRef.current.contains(event.target as Node)
      ) {
        setShowCountryDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getSectionTitle = () => {
    switch (communityType) {
      case "proBono":
        return "Who's involved";
      case "cpn":
        return "Certified PRO Members";
      default:
        return "Who's in";
    }
  };

  const getSubheading = () => {
    switch (communityType) {
      case "proBono":
        return "Volunteers";
      case "cpn":
        return "Certified Professional Translators";
      default:
        return "Community members";
    }
  };

  const availableLanguages = useMemo(() => {
    const languages = new Set<string>();
    members.forEach((member) => {
      if (Array.isArray(member.languages)) {
        member.languages.forEach((lang) => languages.add(lang));
      } else if (typeof member.languages === "string") {
        member.languages
          .split(",")
          .filter(Boolean)
          .forEach((lang) => languages.add(lang.trim()));
      }
    });
    return Array.from(languages).sort();
  }, [members]);

  const availableCountries = useMemo(() => {
    const countries = new Set<string>();
    members.forEach((member) => {
      if (member.country) {
        countries.add(member.country);
      }
    });
    return Array.from(countries).sort();
  }, [members]);

  const totalMembers = filteredMembers.length;
  const totalPages = Math.ceil(totalMembers / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalMembers);
  const currentMembers = filteredMembers.slice(startIndex, endIndex);

  const handleMemberAction = async (memberId: number, action: "approved" | "removed") => {
    if (!onMemberStatusChange) return;

    try {
      await onMemberStatusChange(memberId, action);
      setMembers((prev) =>
        prev.map((member) => (member.id === memberId ? { ...member, status: action } : member))
      );
      setSelectedMembers((prev) => prev.filter((id) => id !== memberId));
    } catch (error) {
      console.error(`Error ${action === "approved" ? "approving" : "removing"} member:`, error);
    }
  };
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-32 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      {/* Header Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold mb-4">{getSectionTitle()}</h2>
          {communityType !== "proBono" && (
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mt-2">
              {getSubheading()}
            </h3>
          )}
          <p className="text-gray-600 dark:text-gray-300 text-right mx-auto max-w-2xl">
            Meet the amazing members of {communityName}.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Showing {startIndex + 1}-{endIndex} of {totalMembers} members
          </p>
        </div>
        {membership === "premium" && (
          <div className="md:col-span-1">
            <MembershipCard membership={membership} renewal_date={renewal_date} />
          </div>
        )}
      </div>

      {/* Admin Actions Section */}
      {isAdmin && selectedMembers.length > 0 && (
        <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h3 className="font-semibold mb-2">{selectedMembers.length} members selected</h3>
          <div className="flex gap-2">
            <button
              onClick={() => selectedMembers.forEach((id) => handleMemberAction(id, "approved"))}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            >
              Approve selected
            </button>
            <button
              onClick={() => selectedMembers.forEach((id) => handleMemberAction(id, "removed"))}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Remove selected
            </button>
          </div>
        </div>
      )}
      {/* Search and Filter Section */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search members..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-primary focus:border-primary"
            />
          </div>

          <div className="flex gap-2 relative" ref={languageDropdownRef}>
            <button
              onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Languages
            </button>
            {showLanguageDropdown && (
              <div className="absolute top-full mt-1 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                {availableLanguages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setSelectedLanguages((prev) =>
                        prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang]
                      );
                    }}
                    className={`w-full px-4 py-2 text-left hover:bg-gray-50 ${
                      selectedLanguages.includes(lang) ? "bg-blue-50" : ""
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex gap-2 relative" ref={countryDropdownRef}>
            <button
              onClick={() => setShowCountryDropdown(!showCountryDropdown)}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Countries
            </button>
            {showCountryDropdown && (
              <div className="absolute top-full mt-1 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                {availableCountries.map((country) => (
                  <button
                    key={country}
                    onClick={() => {
                      setSelectedCountries((prev) =>
                        prev.includes(country)
                          ? prev.filter((c) => c !== country)
                          : [...prev, country]
                      );
                    }}
                    className={`w-full px-4 py-2 text-left hover:bg-gray-50 ${
                      selectedCountries.includes(country) ? "bg-blue-50" : ""
                    }`}
                  >
                    {country}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Active Filters */}
        {(selectedLanguages.length > 0 || selectedCountries.length > 0) && (
          <div className="flex flex-wrap gap-2">
            {selectedLanguages.map((lang) => (
              <span
                key={lang}
                className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm flex items-center gap-1"
              >
                {lang}
                <button
                  onClick={() => setSelectedLanguages((prev) => prev.filter((l) => l !== lang))}
                  className="hover:text-primary-dark"
                >
                  ×
                </button>
              </span>
            ))}
            {selectedCountries.map((country) => (
              <span
                key={country}
                className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm flex items-center gap-1"
              >
                {country}
                <button
                  onClick={() => setSelectedCountries((prev) => prev.filter((c) => c !== country))}
                  className="hover:text-primary-dark"
                >
                  ×
                </button>
              </span>
            ))}
            <button
              onClick={() => {
                setSelectedLanguages([]);
                setSelectedCountries([]);
              }}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Clear all
            </button>
          </div>
        )}
      </div>
      {/* Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentMembers.map((member) => (
          <div
            key={member.id}
            className={`relative group ${isAdmin ? "cursor-pointer" : ""}`}
            onClick={() =>
              isAdmin &&
              setSelectedMembers((prev) =>
                prev.includes(member.id)
                  ? prev.filter((id) => id !== member.id)
                  : [...prev, member.id]
              )
            }
          >
            <Link
              href={`/profile/${member.id}`}
              className="block h-full"
              onClick={(e) => isAdmin && e.preventDefault()}
              aria-label={`View ${member.name}'s profile`}
            >
              <div className="h-full bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-all duration-200 p-4 relative overflow-hidden">
                {/* Member Content */}
                <div className="flex items-start space-x-4">
                  <MemberAvatar
                    name={member.name}
                    profilePicture={member.profilePicture || undefined}
                    isOnline={member.isOnline}
                    size="md"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-medium text-primary dark:text-blue-300 truncate group-hover:text-blue-600 transition-colors">
                        {member.name}
                      </h3>

                      {/* Membership Icon with Tooltip */}
                      {hasActivePaidMembership(member) && (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Link
                                href={`/membership/${member.membership?.toLowerCase()}`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  window.open(
                                    `/membership/${member.membership?.toLowerCase()}`,
                                    "_blank"
                                  );
                                }}
                                className="inline-flex items-center"
                              >
                                <Image
                                  src="/next/next_assets/images/icons/membership-ribbon.svg"
                                  alt="Membership"
                                  width={16}
                                  height={16}
                                  className="cursor-pointer"
                                />
                              </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{getMembershipDisplayText(member.membership)}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      )}
                    </div>

                    {/* Language Tags */}
                    <div className="mt-1 flex flex-wrap gap-1">
                      {(() => {
                        const parsedLanguages = parseLanguages(member.languages);
                        return (
                          <>
                            {parsedLanguages.slice(0, 3).map((lang) => (
                              <span
                                key={lang}
                                className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800"
                              >
                                {lang}
                              </span>
                            ))}
                            {parsedLanguages.length > 3 && (
                              <span className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                                +{parsedLanguages.length - 3}
                              </span>
                            )}
                          </>
                        );
                      })()}
                    </div>

                    {/* Country */}
                    {member.country && (
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        {member.country}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </Link>
            {/* Selected Member Overlay */}
            {isAdmin && selectedMembers.includes(member.id) && (
              <div className="absolute inset-0 bg-blue-100/20 rounded-lg border-2 border-blue-500" />
            )}
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-8 flex justify-center">
          <nav className="inline-flex rounded-md shadow-sm" aria-label="Pagination">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className={`px-3 py-2 rounded-l-md border ${
                currentPage === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              Previous
            </button>
            {Array.from({ length: totalPages }).map((_, index) => {
              const pageNumber = index + 1;
              const isVisible =
                pageNumber === 1 ||
                pageNumber === totalPages ||
                Math.abs(pageNumber - currentPage) <= 1;

              if (!isVisible) {
                if (pageNumber === 2 || pageNumber === totalPages - 1) {
                  return (
                    <span key={pageNumber} className="px-3 py-2 border-t border-b text-gray-500">
                      ...
                    </span>
                  );
                }
                return null;
              }

              return (
                <button
                  key={pageNumber}
                  onClick={() => setCurrentPage(pageNumber)}
                  className={`px-3 py-2 border-t border-b ${
                    currentPage === pageNumber
                      ? "bg-primary text-white"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}
            <button
              onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className={`px-3 py-2 rounded-r-md border ${
                currentPage === totalPages
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              Next
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default WhosInSection;
