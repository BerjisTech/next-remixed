import { Plan, BusinessPlanCategory, ProPlanCategory } from "@/interfaces/membership";
import { Staff } from "@/interfaces/staff";
import { Testimonial } from "@/interfaces/testimonial";

export const NAV_LINK_PREFIX = "";

export const HUBSPOT_PAGES = [
  "/help-center",
  "/membership/professional",
  "/membership/pre-registration",
  "/membership/post-registration",
  "/membership/discount",
  "/pastey",
  "/cafetran",
  "/call",
];

export const DEFAULT_PLACEHOLDER_URL =
  "https://d30v1l0pe4hkha.cloudfront.net/c970c1c5f61456197a7d17f46dd87a47.jpg";

export const PROZ_SOCIALS = {
  twitter: "https://www.twitter.com/prozcom",
  facebook: "https://www.facebook.com/freelancelinguists",
  linkedin: "https://www.linkedin.com/company/proz-com",
  blog: "https://go.proz.com/blog",
};

export const PSEUDO_USERS: { [key: number]: string } = {
  46745: "joeuser",
  139254: "jane_user",
  138323: "joecorp",
  105688: "joemember",
  646828: "joestudent",
  105689: "joejob",
  105690: "joecom",
  106292: "joejobmod",
  105392: "joemod",
  670924: "joenewdizzle",
  994388: "joenewproz",
  946948: "joepro",
  761: "Yolanda Broad",
  4490: "Natalie",
};

export const MONTH_NAMES: Record<number, string> = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};

// Proz.com staff
export const INITIAL_STAFF: Staff[] = [
  {
    id: 1,
    name: "Henry",
    title: "President",
    url: "next/next_assets/images/henry_dotterer.jpg",
  },
  {
    id: 663952,
    name: "Jared",
    title: "Member services / La Plata office manager",
    url: "next/next_assets/images/staff/jared.jpg",
  },
  {
    id: 599458,
    name: "Florencia",
    title: "Member services",
    url: "next/next_assets/images/staff/maria_florencia.jpg",
  },
  {
    id: 855539,
    name: "Lucía",
    title: "Member services",
    url: "next/next_assets/images/staff/lucia.jpg",
  },
  {
    id: 97309,
    name: "Patrick",
    title: "Accounting",
    url: "next/next_assets/images/staff/patrick.jpg",
  },
  {
    id: 1006922,
    name: "Hellen",
    title: "Training",
    url: "next/next_assets/images/staff/helen.jpg",
  },
  {
    id: 1017940,
    name: "Yana",
    title: "Member services",
    url: "next/next_assets/images/staff/yana.jpg",
  },
  {
    id: 1445299,
    name: "Karen",
    title: "Member services",
    url: "next/next_assets/images/staff/karen.jpg",
  },
  {
    id: 2188897,
    name: "Evelio",
    title: "Senior Developer / Developer support",
    url: "next/next_assets/images/staff/evelio.jpg",
  },
  {
    id: 2247406,
    name: "Paul",
    title: "System Administrator",
    url: "next/next_assets/images/staff/paul_h.jpg",
  },
  {
    id: 2308925,
    name: "Mike",
    title: "Vice President, External Opportunities/ProZ*Pay",
    url: "next/next_assets/images/staff/mike_donlin.jpg",
  },
  {
    id: 2702882,
    name: "Andrew",
    title: "ProZ.com Pro Bono",
    url: "next/next_assets/images/staff/andrew_morris.jpg",
  },
  {
    id: 2726183,
    name: "Hayjor",
    title: "Member services",
    url: "next/next_assets/images/staff/hayjor.jpg",
  },
  {
    id: 2740571,
    name: "Andrea",
    title: "Member services",
    url: "next/next_assets/images/staff/andrea.jpg",
  },
  {
    id: 2722787,
    name: "Janelle",
    title: "Project Manager",
    url: "next/next_assets/images/staff/janelle.jpg",
  },
  {
    id: 3372947,
    name: "Tatiana",
    title: "Member services",
    url: "next/next_assets/images/staff/tatiana_fedorenko.jpg",
  },
  {
    id: 3478235,
    name: "Nicolás",
    title: "Developer",
    url: "next/next_assets/images/staff/nicolas_calcagno.png",
  },
  {
    id: 3512308,
    name: "Lukas",
    title: "Developer",
    url: "next/next_assets/images/staff/lukas_fonseca.jpg",
  },
  {
    id: 3549947,
    name: "Fawad",
    title: "Developer",
    url: "next/next_assets/images/staff/fawad_aslam.jpg",
  },
  {
    id: 4042346,
    name: "Lekopien",
    title: "Developer",
    url: "next/next_assets/images/staff/david-lekopien.jpeg",
  },
  {
    id: 3584138,
    name: "Kevin",
    title: "Senior Developer",
    url: "next/next_assets/images/staff/kevin_kiprotich.jpg",
  },
  {
    id: 2566778,
    name: "Kodi",
    title: "Developer",
    url: "next/next_assets/images/staff/kodi_dotterer.jpg",
  },
  {
    id: 3547577,
    name: "Benedict",
    title: "Senior Developer",
    url: "next/next_assets/images/staff/benedict_ouma.jpg",
  },
  {
    id: 2977699,
    name: "Luana",
    title: "Member services",
    url: "next/next_assets/images/staff/luana-zalazar.png",
  },
  {
    id: 3693277,
    name: "Naiara",
    title: "Member services",
    url: "next/next_assets/images/staff/naiara-solano.png",
  },
  {
    id: 3548566,
    name: "Joseph",
    title: "Member services",
    url: "next/next_assets/images/staff/joseph-oyange.png",
  },
  {
    id: 3723988,
    name: "Isabella",
    title: "Member services",
    url: "next/next_assets/images/staff/isabella-capuselli.png",
  },
  {
    id: 3695662,
    name: "Juan Ignacio",
    title: "Project Manager",
    url: "next/next_assets/images/staff/juan-ignacio-castillo.png",
  },
  {
    id: 3739277,
    name: "Denis",
    title: "Developer",
    url: "next/next_assets/images/staff/denis-maingi.jpg",
  },
  {
    id: 2781188,
    name: "Saint",
    title: "Member services",
    url: "next/next_assets/images/staff/saint_machiste.jpg",
  },
  {
    id: 1338331,
    name: "Ana",
    title: "Member services",
    url: "next/next_assets/images/staff/ana_moriano.png",
  },
  {
    id: 693017,
    name: "Gabriela",
    title: "Member services",
    url: "next/next_assets/images/staff/gabriela_iacoboni.png",
  },
  {
    id: 3762800,
    name: "Valentín",
    title: "Member services",
    url: "next/next_assets/images/staff/3762800_r6495cb9ac440b.png",
  },
  {
    id: 3781124,
    name: "Philip Mato",
    title: "Senior Developer",
    url: "next/next_assets/images/staff/philip_mato.png",
  },
  {
    id: 3863968,
    name: "Laura",
    title: "Member services",
    url: "next/next_assets/images/staff/laura.png",
  },
  {
    id: 3608087,
    name: "Erika",
    title: "Member services",
    url: "next/next_assets/images/staff/erika.png",
  },
  {
    id: 3834148,
    name: "Charlotte",
    title: "Member services",
    url: "next/next_assets/images/staff/charlotte.png",
  },
  {
    id: 3664483,
    name: "Agostina",
    title: "Member services",
    url: "next/next_assets/images/staff/agostina.png",
  },
  {
    id: -15,
    name: "Igor Kmitowski",
    title: "Senior Developer",
    url: "next/next_assets/images/staff/igor.jpg",
  },
  {
    id: 2221408,
    name: "Monica Oliveira",
    title: "Operations Outsourcing",
    url: "next/next_assets/images/staff/monica_new.jpg",
  },
  {
    id: 2642612,
    name: "Susan Ring",
    title: "Communications Coordinator",
    url: "next/next_assets/images/staff/susan.jpg",
  },
  {
    id: 1179352,
    name: "Tanya Quinteri",
    title: "Program Manager",
    url: "next/next_assets/images/staff/tanya.png",
  },
  {
    id: 3974825,
    name: "Brian Njoroge",
    title: "UI/UX Designer",
    url: "next/next_assets/images/staff/brian.png",
  },
  {
    id: -15,
    name: "Kaleb DeLuca",
    title: "Developer",
    url: "next/next_assets/images/staff/kaleb.jpg",
  },
  {
    id: 100058,
    name: "Justin Chlebus",
    title: "Developer",
    url: "next/next_assets/images/staff/justin.jpg",
  },
  {
    id: 2952050,
    name: "Isabel",
    title: "Member services",
    url: "next/next_assets/images/staff/isabel.png",
  },
  {
    id: 3974825,
    name: "Brian Njoroge",
    title: "UI/UX Designer",
    url: "next/next_assets/images/staff/isabel.png",
  },
];

// Proz.com staff development env
export const INITIAL_STAFF_DEV: Staff[] = [
  {
    id: 3725780,
    name: "Fawad",
    title: "Developer",
    url: "next/next_assets/images/staff/fawad_aslam.jpg",
  },
  {
    id: 4042346,
    name: "Lekopien",
    title: "Developer",
    url: "next/next_assets/images/staff/david-lekopien.jpeg",
  },
];

// Marking Project status
export const STATUS_GROUPS = [
  { status: "created", title: "Project created", class: "info", level: 1 },
  {
    status: "project_accepted",
    title: "Project accepted",
    class: "light",
    level: 1.5,
  },
  {
    status: "quoted",
    title: "Quote accepted",
    class: "secondary-light",
    level: 2,
  },
  {
    status: "linguists",
    title: "Linguists assigned",
    class: "warning-light",
    level: 3,
  },
  {
    status: "reviewer",
    title: "Reviewer assigned",
    class: "warning-light",
    level: 4,
  },
  {
    status: "submitted",
    title: "Work submitted",
    class: "success-light",
    level: 5,
  },
  {
    status: "output_accepted",
    title: "Output accepted",
    class: "success",
    level: 6,
  },
  {
    status: "cancelled",
    title: "Project cancelled",
    class: "danger-light",
    level: 7,
  },
];

// Marking payment status
export const PAYMENT_CLASSES = [
  { status: "unpaid", class: "info", level: 1 },
  { status: "unclear", class: "secondary-light", level: 2 },
  { status: "pending", class: "warning-light", level: 3 },
  { status: "payable", class: "info-light", level: 4 },
  { status: "paid", class: "success-light", level: 5 },
  { status: "overdue", class: "danger-light", level: 5 },
];

// General fields of expertise
export const FIELDS_GENERAL = [
  { id: 1, name: "Other" },
  { id: 2, name: "Art/Literary" },
  { id: 3, name: "Medical" },
  { id: 4, name: "Law/Patents" },
  { id: 5, name: "Science" },
  { id: 6, name: "Bus/Financial" },
  { id: 7, name: "Marketing" },
  { id: 8, name: "Social Sciences" },
];

// General fields of expertise
export const QUALIFICATIONS = [
  { id: 1, name: "Complete Profile" },
  { id: 2, name: "Paid Member" },
  { id: 3, name: "Trained in HIPPA" },
  { id: 4, name: "Experienced" },
];

export const FLAGS = [
  {
    id: 1,
    name: "Russia",
    flag: "russia_flag.jpg",
    area: 17075200,
    population: 146989754,
  },
  {
    id: 2,
    name: "France",
    flag: "french_flag.jpg",
    area: 640679,
    population: 64979548,
  },
  {
    id: 3,
    name: "Germany",
    flag: "b/ba/Flag_of_Germany.svg",
    area: 357114,
    population: 82114224,
  },
  {
    id: 4,
    name: "Portugal",
    flag: "5/5c/Flag_of_Portugal.svg",
    area: 92090,
    population: 10329506,
  },
  {
    id: 5,
    name: "Canada",
    flag: "c/cf/Flag_of_Canada.svg",
    area: 9976140,
    population: 36624199,
  },
  {
    id: 6,
    name: "Vietnam",
    flag: "2/21/Flag_of_Vietnam.svg",
    area: 331212,
    population: 95540800,
  },
  {
    id: 7,
    name: "Brazil",
    flag: "0/05/Flag_of_Brazil.svg",
    area: 8515767,
    population: 209288278,
  },
  {
    id: 8,
    name: "Mexico",
    flag: "f/fc/Flag_of_Mexico.svg",
    area: 1964375,
    population: 129163276,
  },
  {
    id: 9,
    name: "United States",
    flag: "us_flag.jpg",
    area: 9629091,
    population: 324459463,
  },
  {
    id: 10,
    name: "India",
    flag: "4/41/Flag_of_India.svg",
    area: 3287263,
    population: 1324171354,
  },
  {
    id: 11,
    name: "Indonesia",
    flag: "9/9f/Flag_of_Indonesia.svg",
    area: 1910931,
    population: 263991379,
  },
  {
    id: 12,
    name: "Tuvalu",
    flag: "3/38/Flag_of_Tuvalu.svg",
    area: 26,
    population: 11097,
  },
  {
    id: 13,
    name: "China",
    flag: "f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
    area: 9596960,
    population: 1409517397,
  },
];

export const ADMINS = [
  1, // Henry
  7198, // ProZ.com Team
  41429, // Jason
  97309, // Patrick
  599458, // Florencia
  663952, // Jared
  855539, // Lucia
  931039, // Eugenia
  1006922, // Helen
  1017940, // Yana
  1445299, // Karen
  2188897, // Evelio Clavel Rosales
  2247406, // Paul Hessels, Systems contractor
  2308925, // Mike Donlin
  2397886, // Enrique Manzo, Support / member services in Argentina
  2702882, //Andrew Morris
  2722787, // Janelle Popovici
  // New La Plata staff starting Jun 11, 2019:
  2726183, // Hayjor
  2740571, // Andrea
  2020451, // Paul Urwin - Works with Drew. ProZ.com/TV https://prozcom.slack.com/archives/C51G3KF1C/p1591117932389500
  3372947, // Tatiana Fedorenko - Team Ukraine
  3478235, // Nicolas Calcagno - Dev - Argentina - Staff
  3512308, // Lukas Fonseca - Dev - Argentina - Staff
  3547577, // Benedict Ouma - Dev - Remote - Kenya - Staff - https://github.com/berjistech
  3549947, // Fawad Aslam - Dev - Remote - Pakistan - Staff
  4042346, // David Lekopien - Dev - Remote - Kenya - Staff
  3584138, // Kevin Kiprotich - Dev - Remote - Kenya - Staff - https://github.com/Kevin-Kip
  3693277, // Naiara Solano - Support, Argentina
  3548566, // Joseph Oyange - Support, Kenya
  2566778, // Kodi Dotterer - Dev, United States, Syracuse
  2977699, // Luana Zalazar - Support, Argentina https://github.com/ProZcom/web-app/issues/6877
  3723988, // Isabella Capuselli - Member services, Argentina - Staff https://github.com/ProZcom/web-app/issues/6951
  3695662, // Juan Ignacio Castillo - PM, Argentina - Staff - https://prozcom.slack.com/archives/D0WL9FPR6/p1684154265430069
  3734087, // Will Gephart - Dev - United States, NY
  3739277, // Denis Maingi - Dev - Remote - Kenya - Staff - https://github.com/maingidenis/
  2781188, // Saint Machiste - Member services - Staff - Remote - Working with Hayjor - Venezuela - https://github.com/ProZcom/web-app/issues/7195
  1338331, // Ana Moirano - Member services, Argentina - https://github.com/ProZcom/web-app/issues/7238
  693017, // Gabriela Iacoboni - Member services,  Argentina  - https://github.com/ProZcom/web-app/issues/7238
  3762800, // Valentin Zaninelli - Member services,  Argentina  - https://github.com/ProZcom/web-app/issues/7599
  3781124, // Philip Mato - Dev - Remote - Uganda
  3974825, // Brian Njoroge - UI/UX Designer - Remote - Kenya
  2861, // Denis Docker
];

// language Services for global Use;
export const LANGUAGE_SERVICES: Record<number, string> = {
  1: "Translation",
  2: "Interpreting",
  3: "Editing/proofreading",
  4: "Website localization",
  5: "Software localization",
  6: "Voiceover (dubbing)",
  7: "Subtitling",
  8: "Training",
  9: "Desktop publishing",
  10: "Project management",
  11: "Vendor management",
  12: "Sales",
  13: "Operations management",
  14: "MT post-editing",
  15: "Transcription",
  16: "Copywriting",
  19: "Transcreation",
  23: "Language instruction",
  24: "Native speaker conversation",
  25: "File Preparation",
  28: "Terminology management",
};

export const LANGUAGE_SERVICES_WITH_IDS: { service_id: number; service_name: string }[] = [
  { service_id: 1, service_name: "Translation" },
  { service_id: 2, service_name: "Interpreting" },
  { service_id: 3, service_name: "Editing/proofreading" },
  { service_id: 4, service_name: "Website localization" },
  { service_id: 5, service_name: "Software localization" },
  { service_id: 6, service_name: "Voiceover (dubbing)" },
  { service_id: 7, service_name: "Subtitling" },
  { service_id: 8, service_name: "Training" },
  { service_id: 9, service_name: "Desktop publishing" },
  { service_id: 10, service_name: "Project management" },
  { service_id: 11, service_name: "Vendor management" },
  { service_id: 12, service_name: "Sales" },
  { service_id: 13, service_name: "Operations management" },
  { service_id: 14, service_name: "MT post-editing" },
  { service_id: 15, service_name: "Transcription" },
  { service_id: 16, service_name: "Copywriting" },
  { service_id: 19, service_name: "Transcreation" },
  { service_id: 23, service_name: "Language instruction" },
  { service_id: 24, service_name: "Native speaker conversation" },
  { service_id: 25, service_name: "File Preparation" },
  { service_id: 28, service_name: "Terminology management" },
];

// all countries
export const COUNTRIES = [
  {
    name: "Afghanistan",
    code: "AF",
    capital: "Kabul",
    region: "AS",
    currency: {
      code: "AFN",
      name: "Afghan afghani",
      symbol: "؋",
    },
    language: {
      code: "ps",
      name: "Pashto",
    },
    flag: "/next/next_assets/images/flags/af.svg",
    dialling_code: "+93",
    isoCode: "004",
  },
  {
    name: "Albania",
    code: "AL",
    capital: "Tirana",
    region: "EU",
    currency: {
      code: "ALL",
      name: "Albanian lek",
      symbol: "L",
    },
    language: {
      code: "sq",
      name: "Albanian",
    },
    flag: "/next/next_assets/images/flags/al.svg",
    dialling_code: "+355",
    isoCode: "008",
  },
  {
    name: "Algeria",
    code: "DZ",
    capital: "Algiers",
    region: "AF",
    currency: {
      code: "DZD",
      name: "Algerian dinar",
      symbol: "د.ج",
    },
    language: {
      code: "ar",
      name: "Arabic",
    },
    flag: "/next/next_assets/images/flags/dz.svg",
    dialling_code: "+213",
    isoCode: "012",
  },
  {
    name: "American Samoa",
    code: "AS",
    capital: "Pago Pago",
    region: "OC",
    currency: {
      code: "USD",
      name: "United State Dollar",
      symbol: "$",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/as.svg",
    dialling_code: "+1",
    isoCode: "016",
  },
  {
    name: "Andorra",
    code: "AD",
    capital: "Andorra la Vella",
    region: "EU",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€",
    },
    language: {
      code: "ca",
      name: "Catalan",
    },
    flag: "/next/next_assets/images/flags/an.svg",
    dialling_code: "+376",
    isoCode: "020",
  },
  {
    name: "Angola",
    code: "AO",
    capital: "Luanda",
    region: "AF",
    currency: {
      code: "AOA",
      name: "Angolan kwanza",
      symbol: "Kz",
    },
    language: {
      code: "pt",
      name: "Portuguese",
    },
    flag: "/next/next_assets/images/flags/ag.svg",
    dialling_code: "+244",
    isoCode: "024",
  },
  {
    name: "Anguilla",
    code: "AI",
    capital: "The Valley",
    region: "NA",
    currency: {
      code: "XCD",
      name: "East Caribbean dollar",
      symbol: "$",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/ai.svg",
    dialling_code: "+43",
    isoCode: "660",
  },
  {
    name: "Antigua and Barbuda",
    code: "AG",
    capital: "Saint John's",
    region: "NA",
    currency: {
      code: "XCD",
      name: "East Caribbean dollar",
      symbol: "$",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/at.svg",
    dialling_code: "+1",
    isoCode: "028",
  },
  {
    name: "Argentina",
    code: "AR",
    capital: "Buenos Aires",
    region: "SA",
    currency: {
      code: "ARS",
      name: "Argentine peso",
      symbol: "$",
    },
    language: {
      code: "es",
      name: "Spanish",
    },
    flag: "/next/next_assets/images/flags/ar.svg",
    dialling_code: "+54",
    isoCode: "032",
  },
  {
    name: "Armenia",
    code: "AM",
    capital: "Yerevan",
    region: "AS",
    currency: {
      code: "AMD",
      name: "Armenian dram",
      symbol: null,
    },
    language: {
      code: "hy",
      name: "Armenian",
    },
    flag: "/next/next_assets/images/flags/ar.svg",
    dialling_code: "+374",
    isoCode: "051",
  },
  {
    name: "Aruba",
    code: "AW",
    capital: "Oranjestad",
    region: "SA",
    currency: {
      code: "AWG",
      name: "Aruban florin",
      symbol: "ƒ",
    },
    language: {
      code: "nl",
      name: "Dutch",
    },
    flag: "/next/next_assets/images/flags/ab.svg",
    dialling_code: "+297",
    isoCode: "533",
  },
  {
    name: "Australia",
    code: "AU",
    capital: "Canberra",
    region: "OC",
    currency: {
      code: "AUD",
      name: "Australian dollar",
      symbol: "$",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/au.svg",
    dialling_code: "+61",
    isoCode: "036",
  },
  {
    name: "Azerbaijan",
    code: "AZ",
    capital: "Baku",
    region: "AS",
    currency: {
      code: "AZN",
      name: "Azerbaijani manat",
      symbol: null,
    },
    language: {
      code: "az",
      name: "Azerbaijani",
    },
    flag: "/next/next_assets/images/flags/az.svg",
    dialling_code: "+994",
    isoCode: "031",
  },
  {
    name: "Bahamas",
    code: "BS",
    capital: "Nassau",
    region: "NA",
    currency: {
      code: "BSD",
      name: "Bahamian dollar",
      symbol: "$",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/bh.svg",
    dialling_code: "+1",
    isoCode: "044",
  },
  {
    name: "Bahrain",
    code: "BH",
    capital: "Manama",
    region: "AS",
    currency: {
      code: "BHD",
      name: "Bahraini dinar",
      symbol: ".د.ب",
    },
    language: {
      code: "ar",
      name: "Arabic",
    },
    flag: "/next/next_assets/images/flags/bh.svg",
    dialling_code: "+973",
    isoCode: "048",
  },
  {
    name: "Bangladesh",
    code: "BD",
    capital: "Dhaka",
    region: "AS",
    currency: {
      code: "BDT",
      name: "Bangladeshi taka",
      symbol: "৳",
    },
    language: {
      code: "bn",
      name: "Bengali",
    },
    flag: "/next/next_assets/images/flags/bg.svg",
    dialling_code: "+880",
    isoCode: "050",
  },
  {
    name: "Barbados",
    code: "BB",
    capital: "Bridgetown",
    region: "NA",
    currency: {
      code: "BBD",
      name: "Barbadian dollar",
      symbol: "$",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/br.svg",
    dialling_code: "+1",
    isoCode: "052",
  },
  {
    name: "Belarus",
    code: "BY",
    capital: "Minsk",
    region: "EU",
    currency: {
      code: "BYN",
      name: "New Belarusian ruble",
      symbol: "Br",
    },
    language: {
      code: "be",
      name: "Belarusian",
    },
    flag: "/next/next_assets/images/flags/bl.svg",
    dialling_code: "+375",
    isoCode: "112",
  },
  {
    name: "Belgium",
    code: "BE",
    capital: "Brussels",
    region: "EU",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€",
    },
    language: {
      code: "nl",
      name: "Dutch",
    },
    flag: "/next/next_assets/images/flags/be.svg",
    dialling_code: "+32",
    isoCode: "056",
  },
  {
    name: "Belize",
    code: "BZ",
    capital: "Belmopan",
    region: "NA",
    currency: {
      code: "BZD",
      name: "Belize dollar",
      symbol: "$",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/bl.svg",
    dialling_code: "+501",
    isoCode: "084",
  },
  {
    name: "Benin",
    code: "BJ",
    capital: "Porto-Novo",
    region: "AF",
    currency: {
      code: "XOF",
      name: "West African CFA franc",
      symbol: "Fr",
    },
    language: {
      code: "fr",
      name: "French",
    },
    flag: "/next/next_assets/images/flags/be.svg",
    dialling_code: "+229",
    isoCode: "204",
  },
  {
    name: "Bermuda",
    code: "BM",
    capital: "Hamilton",
    region: "NA",
    currency: {
      code: "BMD",
      name: "Bermudian dollar",
      symbol: "$",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/bm.svg",
    dialling_code: "+1",
    isoCode: "060",
  },
  {
    name: "Bhutan",
    code: "BT",
    capital: "Thimphu",
    region: "AS",
    currency: {
      code: "BTN",
      name: "Bhutanese ngultrum",
      symbol: "Nu.",
    },
    language: {
      code: "dz",
      name: "Dzongkha",
    },
    flag: "/next/next_assets/images/flags/bt.svg",
    dialling_code: "+975",
    isoCode: "064",
  },
  {
    name: "Bolivia (Plurinational State of)",
    code: "BO",
    capital: "Sucre",
    region: "SA",
    currency: {
      code: "BOB",
      name: "Bolivian boliviano",
      symbol: "Bs.",
    },
    language: {
      code: "es",
      name: "Spanish",
    },
    flag: "/next/next_assets/images/flags/bo.svg",
    dialling_code: "+591",
    isoCode: "068",
  },
  {
    name: "Bosnia and Herzegovina",
    code: "BA",
    capital: "Sarajevo",
    region: "EU",
    currency: {
      code: "BAM",
      name: "Bosnia and Herzegovina convertible mark",
      symbol: null,
    },
    language: {
      code: "bs",
      name: "Bosnian",
    },
    flag: "/next/next_assets/images/flags/bi.svg",
    dialling_code: "+387",
    isoCode: "070",
  },
  {
    name: "Botswana",
    code: "BW",
    capital: "Gaborone",
    region: "AF",
    currency: {
      code: "BWP",
      name: "Botswana pula",
      symbol: "P",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/bw.svg",
    dialling_code: "+267",
    isoCode: "072",
  },
  {
    name: "Brazil",
    code: "BR",
    capital: "Brasília",
    region: "SA",
    currency: {
      code: "BRL",
      name: "Brazilian real",
      symbol: "R$",
    },
    language: {
      code: "pt",
      name: "Portuguese",
    },
    flag: "/next/next_assets/images/flags/br.svg",
    dialling_code: "+55",
    isoCode: "076",
  },
  {
    name: "British Indian Ocean Territory",
    code: "IO",
    capital: "Diego Garcia",
    region: "AF",
    currency: {
      code: "USD",
      name: "United States dollar",
      symbol: "$",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/io.svg",
    dialling_code: "+246",
    isoCode: "086",
  },
  {
    name: "Virgin Islands (British)",
    code: "VG",
    capital: "Road Town",
    region: "NA",
    currency: {
      code: "USD",
      name: "United States dollar",
      symbol: "$",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/vg.svg",
    dialling_code: "+1",
    isoCode: "092",
  },
  {
    name: "Virgin Islands (U.S.)",
    code: "VI",
    capital: "Charlotte Amalie",
    region: "NA",
    currency: {
      code: "USD",
      name: "United States dollar",
      symbol: "$",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/vi.svg",
    dialling_code: "+1",
    isoCode: "850",
  },
  {
    name: "Brunei Darussalam",
    code: "BN",
    capital: "Bandar Seri Begawan",
    region: "AS",
    currency: {
      code: "BND",
      name: "Brunei dollar",
      symbol: "$",
    },
    language: {
      code: "ms",
      name: "Malay",
    },
    flag: "/next/next_assets/images/flags/br.svg",
    dialling_code: "+673",
    isoCode: "096",
  },
  {
    name: "Bulgaria",
    code: "BG",
    capital: "Sofia",
    region: "EU",
    currency: {
      code: "BGN",
      name: "Bulgarian lev",
      symbol: "лв",
    },
    language: {
      code: "bg",
      name: "Bulgarian",
    },
    flag: "/next/next_assets/images/flags/bg.svg",
    dialling_code: "+359",
    isoCode: "100",
  },
  {
    name: "Burkina Faso",
    code: "BF",
    capital: "Ouagadougou",
    region: "AF",
    currency: {
      code: "XOF",
      name: "West African CFA franc",
      symbol: "Fr",
    },
    language: {
      code: "fr",
      name: "French",
    },
    flag: "/next/next_assets/images/flags/bf.svg",
    dialling_code: "+226",
    isoCode: "854",
  },
  {
    name: "Burundi",
    code: "BI",
    capital: "Bujumbura",
    region: "AF",
    currency: {
      code: "BIF",
      name: "Burundian franc",
      symbol: "Fr",
    },
    language: {
      code: "fr",
      name: "French",
    },
    flag: "/next/next_assets/images/flags/bd.svg",
    dialling_code: "+257",
    isoCode: "108",
  },
  {
    name: "Cambodia",
    code: "KH",
    capital: "Phnom Penh",
    region: "AS",
    currency: {
      code: "KHR",
      name: "Cambodian riel",
      symbol: "៛",
    },
    language: {
      code: "km",
      name: "Khmer",
    },
    flag: "/next/next_assets/images/flags/kh.svg",
    dialling_code: "+855",
    isoCode: "116",
  },
  {
    name: "Cameroon",
    code: "CM",
    capital: "Yaoundé",
    region: "AF",
    currency: {
      code: "XAF",
      name: "Central African CFA franc",
      symbol: "Fr",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/cm.svg",
    dialling_code: "+237",
    isoCode: "120",
  },
  {
    name: "Canada",
    code: "CA",
    capital: "Ottawa",
    region: "NA",
    currency: {
      code: "CAD",
      name: "Canadian dollar",
      symbol: "$",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/ca.svg",
    dialling_code: "+1",
    isoCode: "124",
  },
  {
    name: "Cabo Verde",
    code: "CV",
    capital: "Praia",
    region: "AF",
    currency: {
      code: "CVE",
      name: "Cape Verdean escudo",
      symbol: "Esc",
    },
    language: {
      code: "pt",
      iso639_2: "por",
      name: "Portuguese",
      nativeName: "Português",
    },
    flag: "/next/next_assets/images/flags/cp.svg",
    dialling_code: "+238",
    isoCode: "132",
  },
  {
    name: "Cayman Islands",
    code: "KY",
    capital: "George Town",
    region: "NA",
    demonym: "Caymanian",
    currency: {
      code: "KYD",
      name: "Cayman Islands dollar",
      symbol: "$",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/cy.svg",
    dialling_code: "+1",
    isoCode: "136",
  },
  {
    name: "Central African Republic",
    code: "CF",
    capital: "Bangui",
    region: "AF",
    currency: {
      code: "XAF",
      name: "Central African CFA franc",
      symbol: "Fr",
    },
    language: {
      code: "fr",
      name: "French",
    },
    flag: "/next/next_assets/images/flags/ca.svg",
    dialling_code: "+236",
    isoCode: "140",
  },
  {
    name: "Central African Republic",
    code: "CF",
    capital: "Bangui",
    region: "AF",
    currency: {
      code: "XAF",
      name: "Central African CFA franc",
      symbol: "Fr",
    },
    language: {
      code: "fr",
      name: "French",
    },
    flag: "/next/next_assets/images/flags/ca.svg",
    dialling_code: "+236",
    isoCode: "140",
  },
  {
    name: "Chile",
    code: "CL",
    capital: "Santiago",
    region: "SA",
    currency: {
      code: "CLP",
      name: "Chilean peso",
      symbol: "$",
    },
    language: {
      code: "es",
      iso639_2: "spa",
      name: "Spanish",
      nativeName: "Español",
    },
    flag: "/next/next_assets/images/flags/ch.svg",
    dialling_code: "+56",
    isoCode: "152",
  },
  {
    name: "China",
    code: "CN",
    capital: "Beijing",
    region: "AS",
    currency: {
      code: "CNY",
      name: "Chinese yuan",
      symbol: "¥",
    },
    language: {
      code: "zh",
      name: "Chinese",
    },
    flag: "/next/next_assets/images/flags/ch.svg",
    dialling_code: "+86",
    isoCode: "156",
  },
  {
    name: "Colombia",
    code: "CO",
    capital: "Bogotá",
    region: "SA",
    currency: {
      code: "COP",
      name: "Colombian peso",
      symbol: "$",
    },
    language: {
      code: "es",
      name: "Spanish",
    },
    flag: "/next/next_assets/images/flags/co.svg",
    dialling_code: "+57",
    isoCode: "170",
  },
  {
    name: "Comoros",
    code: "KM",
    capital: "Moroni",
    region: "AF",
    currency: {
      code: "KMF",
      name: "Comorian franc",
      symbol: "Fr",
    },
    language: {
      code: "fr",
      name: "French",
    },
    flag: "/next/next_assets/images/flags/co.svg",
    dialling_code: "+269",
    isoCode: "174",
  },
  {
    name: "Congo",
    code: "CG",
    capital: "Brazzaville",
    region: "AF",
    currency: {
      code: "XAF",
      name: "Central African CFA franc",
      symbol: "Fr",
    },
    language: {
      code: "fr",
      name: "French",
    },
    flag: "/next/next_assets/images/flags/co.svg",
    dialling_code: "+242",
    isoCode: "178",
  },
  {
    name: "Congo (Democratic Republic of the)",
    code: "CD",
    capital: "Kinshasa",
    region: "AF",
    currency: {
      code: "CDF",
      name: "Congolese franc",
      symbol: "Fr",
    },
    language: {
      code: "fr",
      name: "French",
    },
    flag: "/next/next_assets/images/flags/co.svg",
    dialling_code: "+243",
    isoCode: "180",
  },
  {
    name: "Cook Islands",
    code: "CK",
    capital: "Avarua",
    region: "OC",
    currency: {
      code: "NZD",
      name: "New Zealand dollar",
      symbol: "$",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/co.svg",
    dialling_code: "+682",
    isoCode: "184",
  },
  {
    name: "Costa Rica",
    code: "CR",
    capital: "San José",
    region: "NA",
    currency: {
      code: "CRC",
      name: "Costa Rican colón",
      symbol: "₡",
    },
    language: {
      code: "es",
      name: "Spanish",
    },
    flag: "/next/next_assets/images/flags/cr.svg",
    dialling_code: "+506",
    isoCode: "188",
  },
  {
    name: "Croatia",
    code: "HR",
    capital: "Zagreb",
    region: "EU",
    currency: {
      code: "HRK",
      name: "Croatian kuna",
      symbol: "kn",
    },
    language: {
      code: "hr",
      name: "Croatian",
    },
    flag: "/next/next_assets/images/flags/hr.svg",
    dialling_code: "+385",
    isoCode: "191",
  },
  {
    name: "Cuba",
    code: "CU",
    capital: "Havana",
    region: "NA",
    currency: {
      code: "CUC",
      name: "Cuban convertible peso",
      symbol: "$",
    },
    language: {
      code: "es",
      name: "Spanish",
    },
    flag: "/next/next_assets/images/flags/cu.svg",
    dialling_code: "+53",
    isoCode: "192",
  },
  {
    name: "Cuba",
    code: "CU",
    capital: "Havana",
    region: "NA",
    currency: {
      code: "CUC",
      name: "Cuban convertible peso",
      symbol: "$",
    },
    language: {
      code: "es",
      name: "Spanish",
    },
    flag: "/next/next_assets/images/flags/cu.svg",
    dialling_code: "+53",
    isoCode: "192",
  },
  {
    name: "Cyprus",
    code: "CY",
    capital: "Nicosia",
    region: "EU",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€",
    },
    language: {
      code: "tr",
      name: "Turkish",
    },
    flag: "/next/next_assets/images/flags/cy.svg",
    dialling_code: "+357",
    isoCode: "196",
  },
  {
    name: "Czech Republic",
    code: "CZ",
    capital: "Prague",
    region: "EU",
    currency: {
      code: "CZK",
      name: "Czech koruna",
      symbol: "Kč",
    },
    language: {
      code: "cs",
      name: "Czech",
    },
    flag: "/next/next_assets/images/flags/cz.svg",
    dialling_code: "+420",
    isoCode: "203",
  },
  {
    name: "Denmark",
    code: "DK",
    capital: "Copenhagen",
    region: "EU",
    currency: {
      code: "DKK",
      name: "Danish krone",
      symbol: "kr",
    },
    language: {
      code: "da",
      name: "Danish",
    },
    flag: "/next/next_assets/images/flags/dn.svg",
    dialling_code: "+45",
    isoCode: "208",
  },
  {
    name: "Djibouti",
    code: "DJ",
    capital: "Djibouti",
    region: "AF",
    currency: {
      code: "DJF",
      name: "Djiboutian franc",
      symbol: "Fr",
    },
    language: {
      code: "fr",
      name: "French",
    },
    flag: "/next/next_assets/images/flags/dj.svg",
    dialling_code: "+253",
    isoCode: "262",
  },
  {
    name: "Dominica",
    code: "DM",
    capital: "Roseau",
    region: "NA",
    currency: {
      code: "XCD",
      name: "East Caribbean dollar",
      symbol: "$",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/dm.svg",
    dialling_code: "+1",
    isoCode: "212",
  },
  {
    name: "Dominican Republic",
    code: "DO",
    capital: "Santo Domingo",
    region: "NA",
    currency: {
      code: "DOP",
      name: "Dominican peso",
      symbol: "$",
    },
    language: {
      code: "es",
      name: "Spanish",
    },
    flag: "/next/next_assets/images/flags/do.svg",
    dialling_code: "+1",
    isoCode: "214",
  },
  {
    name: "Ecuador",
    code: "EC",
    capital: "Quito",
    region: "SA",
    currency: {
      code: "USD",
      name: "United States dollar",
      symbol: "$",
    },
    language: {
      code: "es",
      name: "Spanish",
    },
    flag: "/next/next_assets/images/flags/ec.svg",
    dialling_code: "+593",
    isoCode: "218",
  },
  {
    name: "Egypt",
    code: "EG",
    capital: "Cairo",
    region: "AF",
    currency: {
      code: "EGP",
      name: "Egyptian pound",
      symbol: "£",
    },
    language: {
      code: "ar",
      name: "Arabic",
    },
    flag: "/next/next_assets/images/flags/eg.svg",
    dialling_code: "+20",
    isoCode: "818",
  },
  {
    name: "El Salvador",
    code: "SV",
    capital: "San Salvador",
    region: "NA",
    currency: {
      code: "USD",
      name: "United States dollar",
      symbol: "$",
    },
    language: {
      code: "es",
      name: "Spanish",
    },
    flag: "/next/next_assets/images/flags/sl.svg",
    dialling_code: "+503",
    isoCode: "222",
  },
  {
    name: "Equatorial Guinea",
    code: "GQ",
    capital: "Malabo",
    region: "AF",
    currency: {
      code: "XAF",
      name: "Central African CFA franc",
      symbol: "Fr",
    },
    language: {
      code: "es",
      iso639_2: "spa",
      name: "Spanish",
      nativeName: "Español",
    },
    flag: "/next/next_assets/images/flags/gn.svg",
    dialling_code: "+240",
    isoCode: "226",
  },
  {
    name: "Eritrea",
    code: "ER",
    capital: "Asmara",
    region: "AF",
    currency: {
      code: "ERN",
      name: "Eritrean nakfa",
      symbol: "Nfk",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/er.svg",
    dialling_code: "+291",
    isoCode: "232",
  },
  {
    name: "Estonia",
    code: "EE",
    capital: "Tallinn",
    region: "EU",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€",
    },
    language: {
      code: "et",
      name: "Estonian",
    },
    flag: "/next/next_assets/images/flags/es.svg",
    dialling_code: "+372",
    isoCode: "233",
  },
  {
    name: "Ethiopia",
    code: "ET",
    capital: "Addis Ababa",
    region: "AF",
    currency: {
      code: "ETB",
      name: "Ethiopian birr",
      symbol: "Br",
    },
    language: {
      code: "am",
      name: "Amharic",
    },
    flag: "/next/next_assets/images/flags/et.svg",
    dialling_code: "+251",
    isoCode: "231",
  },
  {
    name: "Falkland Islands (Malvinas)",
    code: "FK",
    capital: "Stanley",
    region: "SA",
    currency: {
      code: "FKP",
      name: "Falkland Islands pound",
      symbol: "£",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/fl.svg",
    dialling_code: "+500",
    isoCode: "238",
  },
  {
    name: "Faroe Islands",
    code: "FO",
    capital: "Tórshavn",
    region: "EU",
    currency: {
      code: "DKK",
      name: "Danish krone",
      symbol: "kr",
    },
    language: {
      code: "fo",
      name: "Faroese",
    },
    flag: "/next/next_assets/images/flags/fr.svg",
    dialling_code: "+298",
    isoCode: "234",
  },
  {
    name: "Fiji",
    code: "FJ",
    capital: "Suva",
    region: "OC",
    currency: {
      code: "FJD",
      name: "Fijian dollar",
      symbol: "$",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/fj.svg",
    dialling_code: "+679",
    isoCode: "242",
  },
  {
    name: "Finland",
    code: "FI",
    capital: "Helsinki",
    region: "EU",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€",
    },
    language: {
      code: "fi",
      iso639_2: "fin",
      name: "Finnish",
      nativeName: "suomi",
    },
    flag: "/next/next_assets/images/flags/fi.svg",
    dialling_code: "+358",
    isoCode: "246",
  },
  {
    name: "France",
    code: "FR",
    capital: "Paris",
    region: "EU",
    demonym: "French",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€",
    },
    language: {
      code: "fr",
      name: "French",
    },
    flag: "/next/next_assets/images/flags/fr.svg",
    dialling_code: "+33",
    isoCode: "250",
  },
  {
    name: "French Guiana",
    code: "GF",
    capital: "Cayenne",
    region: "SA",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€",
    },
    language: {
      code: "fr",
      name: "French",
    },
    flag: "/next/next_assets/images/flags/gu.svg",
    dialling_code: "+594",
    isoCode: "254",
  },
  {
    name: "French Polynesia",
    code: "PF",
    capital: "Papeetē",
    region: "OC",
    currency: {
      code: "XPF",
      name: "CFP franc",
      symbol: "Fr",
    },
    language: {
      code: "fr",
      name: "French",
    },
    flag: "/next/next_assets/images/flags/py.svg",
    dialling_code: "+689",
    isoCode: "258",
  },
  {
    name: "Gabon",
    code: "GA",
    capital: "Libreville",
    region: "AF",
    currency: {
      code: "XAF",
      name: "Central African CFA franc",
      symbol: "Fr",
    },
    language: {
      code: "fr",
      name: "French",
    },
    flag: "/next/next_assets/images/flags/ga.svg",
    dialling_code: "+241",
    isoCode: "266",
  },
  {
    name: "Gambia",
    code: "GM",
    capital: "Banjul",
    region: "AF",
    currency: {
      code: "GMD",
      name: "Gambian dalasi",
      symbol: "D",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/gm.svg",
    dialling_code: "+220",
    isoCode: "270",
  },
  {
    name: "Georgia",
    code: "GE",
    capital: "Tbilisi",
    region: "AS",
    currency: {
      code: "GEL",
      name: "Georgian Lari",
      symbol: "ლ",
    },
    language: {
      code: "ka",
      name: "Georgian",
    },
    flag: "/next/next_assets/images/flags/ge.svg",
    dialling_code: "+995",
    isoCode: "268",
  },
  {
    name: "Germany",
    code: "DE",
    capital: "Berlin",
    region: "EU",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€",
    },
    language: {
      code: "de",
      name: "German",
    },
    flag: "/next/next_assets/images/flags/de.svg",
    dialling_code: "+49",
    isoCode: "276",
  },
  {
    name: "Ghana",
    code: "GH",
    capital: "Accra",
    region: "AF",
    currency: {
      code: "GHS",
      name: "Ghanaian cedi",
      symbol: "₵",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/gh.svg",
    dialling_code: "+233",
    isoCode: "288",
  },
  {
    name: "Gibraltar",
    code: "GI",
    capital: "Gibraltar",
    region: "EU",
    currency: {
      code: "GIP",
      name: "Gibraltar pound",
      symbol: "£",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/gi.svg",
    dialling_code: "+350",
    isoCode: "292",
  },
  {
    name: "Greece",
    code: "GR",
    capital: "Athens",
    region: "EU",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€",
    },
    language: {
      code: "el",
      name: "Greek (modern)",
    },
    flag: "/next/next_assets/images/flags/gr.svg",
    dialling_code: "+30",
    isoCode: "300",
  },
  {
    name: "Greenland",
    code: "GL",
    capital: "Nuuk",
    region: "NA",
    currency: {
      code: "DKK",
      name: "Danish krone",
      symbol: "kr",
    },
    language: {
      code: "kl",
      name: "Kalaallisut",
    },
    flag: "/next/next_assets/images/flags/gr.svg",
    dialling_code: "+299",
    isoCode: "304",
  },
  {
    name: "Grenada",
    code: "GD",
    capital: "St. George's",
    region: "NA",
    currency: {
      code: "XCD",
      name: "East Caribbean dollar",
      symbol: "$",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/gr.svg",
    dialling_code: "+1",
    isoCode: "308",
  },
  {
    name: "Guadeloupe",
    code: "GP",
    capital: "Basse-Terre",
    region: "NA",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€",
    },
    language: {
      code: "fr",
      name: "French",
    },
    flag: "/next/next_assets/images/flags/gl.svg",
    dialling_code: "+590",
    isoCode: "312",
  },
  {
    name: "Guam",
    code: "GU",
    capital: "Hagåtña",
    region: "OC",
    currency: {
      code: "USD",
      name: "United States dollar",
      symbol: "$",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/gu.svg",
    dialling_code: "+1",
    isoCode: "316",
  },
  {
    name: "Guatemala",
    code: "GT",
    capital: "Guatemala City",
    region: "NA",
    currency: {
      code: "GTQ",
      name: "Guatemalan quetzal",
      symbol: "Q",
    },
    language: {
      code: "es",
      name: "Spanish",
    },
    flag: "/next/next_assets/images/flags/gt.svg",
    dialling_code: "+502",
    isoCode: "320",
  },
  {
    name: "Guinea",
    code: "GN",
    capital: "Conakry",
    region: "AF",
    currency: {
      code: "GNF",
      name: "Guinean franc",
      symbol: "Fr",
    },
    language: {
      code: "fr",
      name: "French",
    },
    flag: "/next/next_assets/images/flags/gi.svg",
    dialling_code: "+224",
    isoCode: "324",
  },
  {
    name: "Guinea-Bissau",
    code: "GW",
    capital: "Bissau",
    region: "AF",
    currency: {
      code: "XOF",
      name: "West African CFA franc",
      symbol: "Fr",
    },
    language: {
      code: "pt",
      name: "Portuguese",
    },
    flag: "/next/next_assets/images/flags/gn.svg",
    dialling_code: "+245",
    isoCode: "624",
  },
  {
    name: "Guyana",
    code: "GY",
    capital: "Georgetown",
    region: "SA",
    currency: {
      code: "GYD",
      name: "Guyanese dollar",
      symbol: "$",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/gu.svg",
    dialling_code: "+592",
    isoCode: "328",
  },
  {
    name: "Haiti",
    code: "HT",
    capital: "Port-au-Prince",
    region: "Americas",
    currency: {
      code: "HTG",
      name: "Haitian gourde",
      symbol: "G",
    },
    language: {
      code: "fr",
      name: "French",
    },
    flag: "/next/next_assets/images/flags/ht.svg",
    dialling_code: "+509",
    isoCode: "332",
  },
  {
    name: "Holy See",
    code: "VA",
    capital: "Rome",
    region: "EU",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€",
    },
    language: {
      code: "fr",
      name: "French",
    },
    flag: "/next/next_assets/images/flags/va.svg",
    dialling_code: "+39",
    isoCode: "336",
  },
  {
    name: "Honduras",
    code: "HN",
    capital: "Tegucigalpa",
    region: "NA",
    currency: {
      code: "HNL",
      name: "Honduran lempira",
      symbol: "L",
    },
    language: {
      code: "es",
      name: "Spanish",
    },
    flag: "/next/next_assets/images/flags/hn.svg",
    dialling_code: "+504",
    isoCode: "340",
  },
  {
    name: "Hong Kong",
    code: "HK",
    capital: "City of Victoria",
    region: "AS",
    currency: {
      code: "HKD",
      name: "Hong Kong dollar",
      symbol: "$",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/hk.svg",
    dialling_code: "+852",
    isoCode: "344",
  },
  {
    name: "Hungary",
    code: "HU",
    capital: "Budapest",
    region: "EU",
    currency: {
      code: "HUF",
      name: "Hungarian forint",
      symbol: "Ft",
    },
    language: {
      code: "hu",
      name: "Hungarian",
    },
    flag: "/next/next_assets/images/flags/hu.svg",
    dialling_code: "+36",
    isoCode: "348",
  },
  {
    name: "Iceland",
    code: "IS",
    capital: "Reykjavík",
    region: "EU",
    currency: {
      code: "ISK",
      name: "Icelandic króna",
      symbol: "kr",
    },
    language: {
      code: "is",
      name: "Icelandic",
    },
    flag: "/next/next_assets/images/flags/is.svg",
    dialling_code: "+354",
    isoCode: "352",
  },
  {
    name: "India",
    code: "IN",
    capital: "New Delhi",
    region: "AS",
    currency: {
      code: "INR",
      name: "Indian rupee",
      symbol: "₹",
    },
    language: {
      code: "hi",
      name: "Hindi",
    },
    flag: "/next/next_assets/images/flags/in.svg",
    dialling_code: "+91",
    isoCode: "356",
  },
  {
    name: "Indonesia",
    code: "ID",
    capital: "Jakarta",
    region: "AS",
    currency: {
      code: "IDR",
      name: "Indonesian rupiah",
      symbol: "Rp",
    },
    language: {
      code: "id",
      name: "Indonesian",
    },
    flag: "/next/next_assets/images/flags/id.svg",
    dialling_code: "+62",
    isoCode: "360",
  },
  {
    name: "Côte d'Ivoire",
    code: "CI",
    capital: "Yamoussoukro",
    region: "AF",
    currency: {
      code: "XOF",
      name: "West African CFA franc",
      symbol: "Fr",
    },
    language: {
      code: "fr",
      name: "French",
    },
    flag: "/next/next_assets/images/flags/ci.svg",
    dialling_code: "+225",
    isoCode: "384",
  },
  {
    name: "Iran (Islamic Republic of)",
    code: "IR",
    capital: "Tehran",
    region: "AS",
    currency: {
      code: "IRR",
      name: "Iranian rial",
      symbol: "﷼",
    },
    language: {
      code: "fa",
      name: "Persian (Farsi)",
    },
    flag: "/next/next_assets/images/flags/ir.svg",
    dialling_code: "+98",
    isoCode: "364",
  },
  {
    name: "Iraq",
    code: "IQ",
    capital: "Baghdad",
    region: "AS",
    currency: {
      code: "IQD",
      name: "Iraqi dinar",
      symbol: "ع.د",
    },
    language: {
      code: "ar",
      name: "Arabic",
    },
    flag: "/next/next_assets/images/flags/ir.svg",
    dialling_code: "+964",
    isoCode: "368",
  },
  {
    name: "Ireland",
    code: "IE",
    capital: "Dublin",
    region: "EU",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€",
    },
    language: {
      code: "ga",
      name: "Irish",
    },
    flag: "/next/next_assets/images/flags/ir.svg",
    dialling_code: "+353",
    isoCode: "372",
  },
  {
    name: "Israel",
    code: "IL",
    capital: "Jerusalem",
    region: "AS",
    currency: {
      code: "ILS",
      name: "Israeli new shekel",
      symbol: "₪",
    },
    language: {
      code: "he",
      name: "Hebrew (modern)",
    },
    flag: "/next/next_assets/images/flags/is.svg",
    dialling_code: "+972",
    isoCode: "376",
  },
  {
    name: "Italy",
    code: "IT",
    capital: "Rome",
    region: "EU",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€",
    },
    language: {
      code: "it",
      name: "Italian",
    },
    flag: "/next/next_assets/images/flags/it.svg",
    dialling_code: "+39",
    isoCode: "380",
  },
  {
    name: "Jamaica",
    code: "JM",
    capital: "Kingston",
    region: "NA",
    currency: {
      code: "JMD",
      name: "Jamaican dollar",
      symbol: "$",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/ja.svg",
    dialling_code: "+1",
    isoCode: "388",
  },
  {
    name: "Japan",
    code: "JP",
    capital: "Tokyo",
    region: "AS",
    currency: {
      code: "JPY",
      name: "Japanese yen",
      symbol: "¥",
    },
    language: {
      code: "ja",
      name: "Japanese",
    },
    flag: "/next/next_assets/images/flags/jp.svg",
    dialling_code: "+81",
    isoCode: "392",
  },
  {
    name: "Jordan",
    code: "JO",
    capital: "Amman",
    region: "AS",
    currency: {
      code: "JOD",
      name: "Jordanian dinar",
      symbol: "د.ا",
    },
    language: {
      code: "ar",
      name: "Arabic",
    },
    flag: "/next/next_assets/images/flags/jo.svg",
    dialling_code: "+962",
    isoCode: "400",
  },
  {
    name: "Kazakhstan",
    code: "KZ",
    capital: "Astana",
    region: "AS",
    currency: {
      code: "KZT",
      name: "Kazakhstani tenge",
      symbol: null,
    },
    language: {
      code: "kk",
      name: "Kazakh",
    },
    flag: "/next/next_assets/images/flags/ka.svg",
    dialling_code: "+7",
    isoCode: "398",
  },
  {
    name: "Kenya",
    code: "KE",
    capital: "Nairobi",
    region: "AF",
    currency: {
      code: "KES",
      name: "Kenyan shilling",
      symbol: "Sh",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/ke.svg",
    dialling_code: "+254",
    isoCode: "404",
  },
  {
    name: "Kiribati",
    code: "KI",
    capital: "South Tarawa",
    region: "OC",
    currency: {
      code: "AUD",
      name: "Australian dollar",
      symbol: "$",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/ki.svg",
    dialling_code: "+686",
    isoCode: "296",
  },
  {
    name: "Kuwait",
    code: "KW",
    capital: "Kuwait City",
    region: "AS",
    currency: {
      code: "KWD",
      name: "Kuwaiti dinar",
      symbol: "د.ك",
    },
    language: {
      code: "ar",
      name: "Arabic",
    },
    flag: "/next/next_assets/images/flags/kw.svg",
    dialling_code: "+965",
    isoCode: "414",
  },
  {
    name: "Kyrgyzstan",
    code: "KG",
    capital: "Bishkek",
    region: "AS",
    currency: {
      code: "KGS",
      name: "Kyrgyzstani som",
      symbol: "с",
    },
    language: {
      code: "ky",
      name: "Kyrgyz",
    },
    flag: "/next/next_assets/images/flags/kg.svg",
    dialling_code: "+996",
    isoCode: "417",
  },
  {
    name: "Lao People's Democratic Republic",
    code: "LA",
    capital: "Vientiane",
    region: "AS",
    currency: {
      code: "LAK",
      name: "Lao kip",
      symbol: "₭",
    },
    language: {
      code: "lo",
      name: "Lao",
    },
    flag: "/next/next_assets/images/flags/la.svg",
    dialling_code: "+856",
    isoCode: "418",
  },
  {
    name: "Latvia",
    code: "LV",
    capital: "Riga",
    region: "EU",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€",
    },
    language: {
      code: "lv",
      name: "Latvian",
    },
    flag: "/next/next_assets/images/flags/lv.svg",
    dialling_code: "+371",
    isoCode: "428",
  },
  {
    name: "Lebanon",
    code: "LB",
    capital: "Beirut",
    region: "AS",
    currency: {
      code: "LBP",
      name: "Lebanese pound",
      symbol: "ل.ل",
    },
    language: {
      code: "ar",
      name: "Arabic",
    },
    flag: "/next/next_assets/images/flags/lb.svg",
    dialling_code: "+961",
    isoCode: "422",
  },
  {
    name: "Lesotho",
    code: "LS",
    capital: "Maseru",
    region: "AF",
    currency: {
      code: "LSL",
      name: "Lesotho loti",
      symbol: "L",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/ls.svg",
    dialling_code: "+266",
    isoCode: "426",
  },
  {
    name: "Liberia",
    code: "LR",
    capital: "Monrovia",
    region: "AF",
    currency: {
      code: "LRD",
      name: "Liberian dollar",
      symbol: "$",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/lb.svg",
    dialling_code: "+231",
    isoCode: "430",
  },
  {
    name: "Libya",
    code: "LY",
    capital: "Tripoli",
    region: "AF",
    currency: {
      code: "LYD",
      name: "Libyan dinar",
      symbol: "ل.د",
    },
    language: {
      code: "ar",
      name: "Arabic",
    },
    flag: "/next/next_assets/images/flags/lb.svg",
    dialling_code: "+218",
    isoCode: "434",
  },
  {
    name: "Liechtenstein",
    code: "LI",
    capital: "Vaduz",
    region: "EU",
    currency: {
      code: "CHF",
      name: "Swiss franc",
      symbol: "Fr",
    },
    language: {
      code: "de",
      name: "German",
    },
    flag: "/next/next_assets/images/flags/li.svg",
    dialling_code: "+423",
    isoCode: "438",
  },
  {
    name: "Lithuania",
    code: "LT",
    capital: "Vilnius",
    region: "EU",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€",
    },
    language: {
      code: "lt",
      name: "Lithuanian",
    },
    flag: "/next/next_assets/images/flags/lt.svg",
    dialling_code: "+370",
    isoCode: "440",
  },
  {
    name: "Luxembourg",
    code: "LU",
    capital: "Luxembourg",
    region: "EU",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€",
    },
    language: {
      code: "fr",
      name: "French",
    },
    flag: "/next/next_assets/images/flags/lu.svg",
    dialling_code: "+352",
    isoCode: "442",
  },
  {
    name: "Macao",
    code: "MO",
    capital: "",
    region: "AS",
    currency: {
      code: "MOP",
      name: "Macanese pataca",
      symbol: "P",
    },
    language: {
      code: "zh",
      name: "Chinese",
    },
    flag: "/next/next_assets/images/flags/ma.svg",
    dialling_code: "+853",
    isoCode: "446",
  },
  {
    name: "Macedonia (the former Yugoslav Republic of)",
    code: "MK",
    capital: "Skopje",
    region: "EU",
    currency: {
      code: "MKD",
      name: "Macedonian denar",
      symbol: "ден",
    },
    language: {
      code: "mk",
      name: "Macedonian",
    },
    flag: "/next/next_assets/images/flags/mk.svg",
    dialling_code: "+389",
    isoCode: "807",
  },
  {
    name: "Madagascar",
    code: "MG",
    capital: "Antananarivo",
    region: "AF",
    currency: {
      code: "MGA",
      name: "Malagasy ariary",
      symbol: "Ar",
    },
    language: {
      code: "fr",
      name: "French",
    },
    flag: "/next/next_assets/images/flags/md.svg",
    dialling_code: "+261",
    isoCode: "450",
  },
  {
    name: "Malawi",
    code: "MW",
    capital: "Lilongwe",
    region: "AF",
    currency: {
      code: "MWK",
      name: "Malawian kwacha",
      symbol: "MK",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/mw.svg",
    dialling_code: "+265",
    isoCode: "454",
  },
  {
    name: "Malaysia",
    code: "MY",
    capital: "Kuala Lumpur",
    region: "AS",
    currency: {
      code: "MYR",
      name: "Malaysian ringgit",
      symbol: "RM",
    },
    language: {
      code: null,
      name: "Malaysian",
    },
    flag: "/next/next_assets/images/flags/my.svg",
    dialling_code: "+60",
    isoCode: "458",
  },
  {
    name: "Maldives",
    code: "MV",
    capital: "Malé",
    region: "AS",
    currency: {
      code: "MVR",
      name: "Maldivian rufiyaa",
      symbol: ".ރ",
    },
    language: {
      code: "dv",
      name: "Divehi",
    },
    flag: "/next/next_assets/images/flags/md.svg",
    dialling_code: "+960",
    isoCode: "462",
  },
  {
    name: "Mali",
    code: "ML",
    capital: "Bamako",
    region: "AF",
    currency: {
      code: "XOF",
      name: "West African CFA franc",
      symbol: "Fr",
    },
    language: {
      code: "fr",
      name: "French",
    },
    flag: "/next/next_assets/images/flags/ml.svg",
    dialling_code: "+223",
    isoCode: "466",
  },
  {
    name: "Malta",
    code: "MT",
    capital: "Valletta",
    region: "EU",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€",
    },
    language: {
      code: "mt",
      name: "Maltese",
    },
    flag: "/next/next_assets/images/flags/ml.svg",
    dialling_code: "+356",
    isoCode: "470",
  },
  {
    name: "Marshall Islands",
    code: "MH",
    capital: "Majuro",
    region: "OC",
    currency: {
      code: "USD",
      name: "United States dollar",
      symbol: "$",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/mh.svg",
    dialling_code: "+692",
    isoCode: "584",
  },
  {
    name: "Martinique",
    code: "MQ",
    capital: "Fort-de-France",
    region: "Americas",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€",
    },
    language: {
      code: "fr",
      name: "French",
    },
    flag: "/next/next_assets/images/flags/mt.svg",
    dialling_code: "+596",
    isoCode: "474",
  },
  {
    name: "Mauritania",
    code: "MR",
    capital: "Nouakchott",
    region: "AF",
    currency: {
      code: "MRO",
      name: "Mauritanian ouguiya",
      symbol: "UM",
    },
    language: {
      code: "ar",
      name: "Arabic",
    },
    flag: "/next/next_assets/images/flags/mr.svg",
    dialling_code: "+222",
    isoCode: "478",
  },
  {
    name: "Mauritius",
    code: "MU",
    capital: "Port Louis",
    region: "AF",
    currency: {
      code: "MUR",
      name: "Mauritian rupee",
      symbol: "₨",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/mu.svg",
    dialling_code: "+230",
    isoCode: "480",
  },
  {
    name: "Mayotte",
    code: "YT",
    capital: "Mamoudzou",
    region: "AF",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€",
    },
    language: {
      code: "fr",
      name: "French",
    },
    flag: "/next/next_assets/images/flags/my.svg",
    dialling_code: "+262",
    isoCode: "175",
  },
  {
    name: "Mexico",
    code: "MX",
    capital: "Mexico City",
    region: "NA",
    currency: {
      code: "MXN",
      name: "Mexican peso",
      symbol: "$",
    },
    language: {
      code: "es",
      name: "Spanish",
    },
    flag: "/next/next_assets/images/flags/me.svg",
    dialling_code: "+52",
    isoCode: "484",
  },
  {
    name: "Micronesia (Federated States of)",
    code: "FM",
    capital: "Palikir",
    region: "OC",
    currency: {
      code: "USD",
      name: "United States dollar",
      symbol: "$",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/fs.svg",
    dialling_code: "+691",
    isoCode: "583",
  },
  {
    name: "Moldova (Republic of)",
    code: "MD",
    capital: "Chișinău",
    region: "EU",
    currency: {
      code: "MDL",
      name: "Moldovan leu",
      symbol: "L",
    },
    language: {
      code: "ro",
      name: "Romanian",
    },
    flag: "/next/next_assets/images/flags/md.svg",
    dialling_code: "+373",
    isoCode: "498",
  },
  {
    name: "Monaco",
    code: "MC",
    capital: "Monaco",
    region: "EU",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€",
    },
    language: {
      code: "fr",
      name: "French",
    },
    flag: "/next/next_assets/images/flags/mc.svg",
    dialling_code: "+377",
    isoCode: "492",
  },
  {
    name: "Mongolia",
    code: "MN",
    capital: "Ulan Bator",
    region: "AS",
    currency: {
      code: "MNT",
      name: "Mongolian tögrög",
      symbol: "₮",
    },
    language: {
      code: "mn",
      name: "Mongolian",
    },
    flag: "/next/next_assets/images/flags/mn.svg",
    dialling_code: "+976",
    isoCode: "496",
  },
  {
    name: "Montenegro",
    code: "ME",
    capital: "Podgorica",
    region: "EU",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€",
    },
    language: {
      code: "sr",
      name: "Serbian",
    },
    flag: "/next/next_assets/images/flags/mn.svg",
    dialling_code: "+382",
    isoCode: "499",
  },
  {
    name: "Montserrat",
    code: "MS",
    capital: "Plymouth",
    region: "NA",
    currency: {
      code: "XCD",
      name: "East Caribbean dollar",
      symbol: "$",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/ms.svg",
    dialling_code: "+1",
    isoCode: "500",
  },
  {
    name: "Morocco",
    code: "MA",
    capital: "Rabat",
    region: "AF",
    currency: {
      code: "MAD",
      name: "Moroccan dirham",
      symbol: "د.م.",
    },
    language: {
      code: "ar",
      name: "Arabic",
    },
    flag: "/next/next_assets/images/flags/ma.svg",
    dialling_code: "+212",
    isoCode: "504",
  },
  {
    name: "Mozambique",
    code: "MZ",
    capital: "Maputo",
    region: "AF",
    currency: {
      code: "MZN",
      name: "Mozambican metical",
      symbol: "MT",
    },
    language: {
      code: "pt",
      name: "Portuguese",
    },
    flag: "/next/next_assets/images/flags/mo.svg",
    dialling_code: "+258",
    isoCode: "508",
  },
  {
    name: "Myanmar",
    code: "MM",
    capital: "Naypyidaw",
    region: "AS",
    currency: {
      code: "MMK",
      name: "Burmese kyat",
      symbol: "Ks",
    },
    language: {
      code: "my",
      name: "Burmese",
    },
    flag: "/next/next_assets/images/flags/mm.svg",
    dialling_code: "+95",
    isoCode: "104",
  },
  {
    name: "Namibia",
    code: "NA",
    capital: "Windhoek",
    region: "AF",
    currency: {
      code: "NAD",
      name: "Namibian dollar",
      symbol: "$",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/na.svg",
    dialling_code: "+264",
    isoCode: "516",
  },
  {
    name: "Nauru",
    code: "NR",
    capital: "Yaren",
    region: "OC",
    currency: {
      code: "AUD",
      name: "Australian dollar",
      symbol: "$",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/nr.svg",
    dialling_code: "+674",
    isoCode: "520",
  },
  {
    name: "Nepal",
    code: "NP",
    capital: "Kathmandu",
    region: "AS",
    currency: {
      code: "NPR",
      name: "Nepalese rupee",
      symbol: "₨",
    },
    language: {
      code: "ne",
      name: "Nepali",
    },
    flag: "/next/next_assets/images/flags/np.svg",
    dialling_code: "+977",
    isoCode: "524",
  },
  {
    name: "Netherlands",
    code: "NL",
    capital: "Amsterdam",
    region: "EU",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€",
    },
    language: {
      code: "nl",
      name: "Dutch",
    },
    flag: "/next/next_assets/images/flags/nl.svg",
    dialling_code: "+31",
    isoCode: "528",
  },
  {
    name: "New Caledonia",
    code: "NC",
    capital: "Nouméa",
    region: "OC",
    currency: {
      code: "XPF",
      name: "CFP franc",
      symbol: "Fr",
    },
    language: {
      code: "fr",
      name: "French",
    },
    flag: "/next/next_assets/images/flags/nc.svg",
    dialling_code: "+687",
    isoCode: "540",
  },
  {
    name: "New Zealand",
    code: "NZ",
    capital: "Wellington",
    region: "OC",
    currency: {
      code: "NZD",
      name: "New Zealand dollar",
      symbol: "$",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/nz.svg",
    dialling_code: "+64",
    isoCode: "554",
  },
  {
    name: "Nicaragua",
    code: "NI",
    capital: "Managua",
    region: "NA",
    currency: {
      code: "NIO",
      name: "Nicaraguan córdoba",
      symbol: "C$",
    },
    language: {
      code: "es",
      name: "Spanish",
    },
    flag: "/next/next_assets/images/flags/ni.svg",
    dialling_code: "+505",
    isoCode: "558",
  },
  {
    name: "Niger",
    code: "NE",
    capital: "Niamey",
    region: "AF",
    currency: {
      code: "XOF",
      name: "West African CFA franc",
      symbol: "Fr",
    },
    language: {
      code: "fr",
      name: "French",
    },
    flag: "/next/next_assets/images/flags/ne.svg",
    dialling_code: "+227",
    isoCode: "562",
  },
  {
    name: "Nigeria",
    code: "NG",
    capital: "Abuja",
    region: "AF",
    currency: {
      code: "NGN",
      name: "Nigerian naira",
      symbol: "₦",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/ng.svg",
    dialling_code: "+234",
    isoCode: "566",
  },
  {
    name: "Niue",
    code: "NU",
    capital: "Alofi",
    region: "OC",
    currency: {
      code: "NZD",
      name: "New Zealand dollar",
      symbol: "$",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/ni.svg",
    dialling_code: "+683",
    isoCode: "570",
  },
  {
    name: "Norfolk Island",
    code: "NF",
    capital: "Kingston",
    region: "OC",
    currency: {
      code: "AUD",
      name: "Australian dollar",
      symbol: "$",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/nf.svg",
    dialling_code: "+672",
    isoCode: "574",
  },
  {
    name: "Korea (Democratic People's Republic of)",
    code: "KP",
    capital: "Pyongyang",
    region: "AS",
    currency: {
      code: "KPW",
      name: "North Korean won",
      symbol: "₩",
    },
    language: {
      code: "ko",
      name: "Korean",
    },
    flag: "/next/next_assets/images/flags/pr.svg",
    dialling_code: "+850",
    isoCode: "408",
  },
  {
    name: "Northern Mariana Islands",
    code: "MP",
    capital: "Saipan",
    region: "OC",
    currency: {
      code: "USD",
      name: "United States dollar",
      symbol: "$",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/mn.svg",
    dialling_code: "+1",
    isoCode: "580",
  },
  {
    name: "Norway",
    code: "NO",
    capital: "Oslo",
    region: "EU",
    currency: {
      code: "NOK",
      name: "Norwegian krone",
      symbol: "kr",
    },
    language: {
      code: "no",
      name: "Norwegian",
    },
    flag: "/next/next_assets/images/flags/no.svg",
    dialling_code: "+47",
    isoCode: "578",
  },
  {
    name: "Oman",
    code: "OM",
    capital: "Muscat",
    region: "AS",
    currency: {
      code: "OMR",
      name: "Omani rial",
      symbol: "ر.ع.",
    },
    language: {
      code: "ar",
      name: "Arabic",
    },
    flag: "/next/next_assets/images/flags/om.svg",
    dialling_code: "+968",
    isoCode: "512",
  },
  {
    name: "Pakistan",
    code: "PK",
    capital: "Islamabad",
    region: "AS",
    currency: {
      code: "PKR",
      name: "Pakistani rupee",
      symbol: "₨",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/pa.svg",
    dialling_code: "+92",
    isoCode: "586",
  },
  {
    name: "Palau",
    code: "PW",
    capital: "Ngerulmud",
    region: "OC",
    currency: {
      code: "USD",
      name: "United States dollar",
      symbol: "$",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/pl.svg",
    dialling_code: "+680",
    isoCode: "585",
  },
  {
    name: "Palestine, State of",
    code: "PS",
    capital: "Ramallah",
    region: "AS",
    currency: {
      code: "ILS",
      name: "Israeli new sheqel",
      symbol: "₪",
    },
    language: {
      code: "ar",
      name: "Arabic",
    },
    flag: "/next/next_assets/images/flags/ps.svg",
    dialling_code: "+970",
    isoCode: "275",
  },
  {
    name: "Panama",
    code: "PA",
    capital: "Panama City",
    region: "NA",
    currency: {
      code: "USD",
      name: "United States dollar",
      symbol: "$",
    },
    language: {
      code: "es",
      name: "Spanish",
    },
    flag: "/next/next_assets/images/flags/pa.svg",
    dialling_code: "+507",
    isoCode: "591",
  },
  {
    name: "Papua New Guinea",
    code: "PG",
    capital: "Port Moresby",
    region: "OC",
    currency: {
      code: "PGK",
      name: "Papua New Guinean kina",
      symbol: "K",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/pn.svg",
    dialling_code: "+675",
    isoCode: "598",
  },
  {
    name: "Paraguay",
    code: "PY",
    capital: "Asunción",
    region: "SA",
    currency: {
      code: "PYG",
      name: "Paraguayan guaraní",
      symbol: "₲",
    },
    language: {
      code: "es",
      name: "Spanish",
    },
    flag: "/next/next_assets/images/flags/pr.svg",
    dialling_code: "+595",
    isoCode: "600",
  },
  {
    name: "Peru",
    code: "PE",
    capital: "Lima",
    region: "SA",
    currency: {
      code: "PEN",
      name: "Peruvian sol",
      symbol: "S/.",
    },
    language: {
      code: "es",
      name: "Spanish",
    },
    flag: "/next/next_assets/images/flags/pe.svg",
    dialling_code: "+51",
    isoCode: "604",
  },
  {
    name: "Philippines",
    code: "PH",
    capital: "Manila",
    region: "AS",
    currency: {
      code: "PHP",
      name: "Philippine peso",
      symbol: "₱",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/ph.svg",
    dialling_code: "+63",
    isoCode: "608",
  },
  {
    name: "Poland",
    code: "PL",
    capital: "Warsaw",
    region: "EU",
    currency: {
      code: "PLN",
      name: "Polish złoty",
      symbol: "zł",
    },
    language: {
      code: "pl",
      name: "Polish",
    },
    flag: "/next/next_assets/images/flags/po.svg",
    dialling_code: "+48",
    isoCode: "616",
  },
  {
    name: "Portugal",
    code: "PT",
    capital: "Lisbon",
    region: "EU",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€",
    },
    language: {
      code: "pt",
      name: "Portuguese",
    },
    flag: "/next/next_assets/images/flags/pr.svg",
    dialling_code: "+351",
    isoCode: "620",
  },
  {
    name: "Puerto Rico",
    code: "PR",
    capital: "San Juan",
    region: "NA",
    currency: {
      code: "USD",
      name: "United States dollar",
      symbol: "$",
    },
    language: {
      code: "es",
      name: "Spanish",
    },
    flag: "/next/next_assets/images/flags/pr.svg",
    dialling_code: "+1",
    isoCode: "630",
  },
  {
    name: "Qatar",
    code: "QA",
    capital: "Doha",
    region: "AS",
    currency: {
      code: "QAR",
      name: "Qatari riyal",
      symbol: "ر.ق",
    },
    language: {
      code: "ar",
      name: "Arabic",
    },
    flag: "/next/next_assets/images/flags/qa.svg",
    dialling_code: "+974",
    isoCode: "634",
  },
  {
    name: "Republic of Kosovo",
    code: "XK",
    capital: "Pristina",
    region: "EU",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€",
    },
    language: {
      code: "sq",
      name: "Albanian",
    },
    flag: "/next/next_assets/images/flags/ko.svg",
    dialling_code: "+381",
    isoCode: "383",
  },
  {
    name: "Réunion",
    code: "RE",
    capital: "Saint-Denis",
    region: "AF",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€",
    },
    language: {
      code: "fr",
      name: "French",
    },
    flag: "/next/next_assets/images/flags/re.svg",
    dialling_code: "+262",
    isoCode: "638",
  },
  {
    name: "Romania",
    code: "RO",
    capital: "Bucharest",
    region: "EU",
    currency: {
      code: "RON",
      name: "Romanian leu",
      symbol: "lei",
    },
    language: {
      code: "ro",
      name: "Romanian",
    },
    flag: "/next/next_assets/images/flags/ro.svg",
    dialling_code: "+40",
    isoCode: "642",
  },
  {
    name: "Russian Federation",
    code: "RU",
    capital: "Moscow",
    region: "EU",
    currency: {
      code: "RUB",
      name: "Russian ruble",
      symbol: "₽",
    },
    language: {
      code: "ru",
      name: "Russian",
    },
    flag: "/next/next_assets/images/flags/ru.svg",
    dialling_code: "+7",
    isoCode: "643",
  },
  {
    name: "Rwanda",
    code: "RW",
    capital: "Kigali",
    region: "AF",
    currency: {
      code: "RWF",
      name: "Rwandan franc",
      symbol: "Fr",
    },
    language: {
      code: "rw",
      name: "Kinyarwanda",
    },
    flag: "/next/next_assets/images/flags/rw.svg",
    dialling_code: "+250",
    isoCode: "646",
  },
  {
    name: "Saint Barthélemy",
    code: "BL",
    capital: "Gustavia",
    region: "NA",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€",
    },
    language: {
      code: "fr",
      name: "French",
    },
    flag: "/next/next_assets/images/flags/bl.svg",
    dialling_code: "+590",
    isoCode: "652",
  },
  {
    name: "Saint Helena, Ascension and Tristan da Cunha",
    code: "SH",
    capital: "Jamestown",
    region: "AF",
    currency: {
      code: "SHP",
      name: "Saint Helena pound",
      symbol: "£",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/sh.svg",
    dialling_code: "+290",
    isoCode: "654",
  },
  {
    name: "Saint Kitts and Nevis",
    code: "KN",
    capital: "Basseterre",
    region: "NA",
    currency: {
      code: "XCD",
      name: "East Caribbean dollar",
      symbol: "$",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/kn.svg",
    dialling_code: "+1",
    isoCode: "659",
  },
  {
    name: "Saint Lucia",
    code: "LC",
    capital: "Castries",
    region: "NA",
    currency: {
      code: "XCD",
      name: "East Caribbean dollar",
      symbol: "$",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/lc.svg",
    dialling_code: "+1",
    isoCode: "662",
  },
  {
    name: "Saint Martin (French part)",
    code: "MF",
    capital: "Marigot",
    region: "NA",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/ma.svg",
    dialling_code: "+590",
    isoCode: "663",
  },
  {
    name: "Saint Pierre and Miquelon",
    code: "PM",
    capital: "Saint-Pierre",
    region: "NA",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€",
    },
    language: {
      code: "fr",
      name: "French",
    },
    flag: "/next/next_assets/images/flags/sp.svg",
    dialling_code: "+508",
    isoCode: "666",
  },
  {
    name: "Saint Vincent and the Grenadines",
    code: "VC",
    capital: "Kingstown",
    region: "NA",
    currency: {
      code: "XCD",
      name: "East Caribbean dollar",
      symbol: "$",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/vc.svg",
    dialling_code: "+1",
    isoCode: "670",
  },
  {
    name: "Samoa",
    code: "WS",
    capital: "Apia",
    region: "OC",
    currency: {
      code: "WST",
      name: "Samoan tālā",
      symbol: "T",
    },
    language: {
      code: "sm",
      name: "Samoan",
    },
    flag: "/next/next_assets/images/flags/ws.svg",
    dialling_code: "+685",
    isoCode: "882",
  },
  {
    name: "San Marino",
    code: "SM",
    capital: "City of San Marino",
    region: "EU",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€",
    },
    language: {
      code: "it",
      name: "Italian",
    },
    flag: "/next/next_assets/images/flags/sm.svg",
    dialling_code: "+378",
    isoCode: "674",
  },
  {
    name: "Sao Tome and Principe",
    code: "ST",
    capital: "São Tomé",
    region: "AF",
    currency: {
      code: "STD",
      name: "São Tomé and Príncipe dobra",
      symbol: "Db",
    },
    language: {
      code: "pt",
      name: "Portuguese",
    },
    flag: "/next/next_assets/images/flags/st.svg",
    dialling_code: "+239",
    isoCode: "678",
  },
  {
    name: "Saudi Arabia",
    code: "SA",
    capital: "Riyadh",
    region: "AS",
    currency: {
      code: "SAR",
      name: "Saudi riyal",
      symbol: "ر.س",
    },
    language: {
      code: "ar",
      name: "Arabic",
    },
    flag: "/next/next_assets/images/flags/sa.svg",
    dialling_code: "+966",
    isoCode: "682",
  },
  {
    name: "Senegal",
    code: "SN",
    capital: "Dakar",
    region: "AF",
    currency: {
      code: "XOF",
      name: "West African CFA franc",
      symbol: "Fr",
    },
    language: {
      code: "fr",
      name: "French",
    },
    flag: "/next/next_assets/images/flags/se.svg",
    dialling_code: "+221",
    isoCode: "686",
  },
  {
    name: "Serbia",
    code: "RS",
    capital: "Belgrade",
    region: "EU",
    currency: {
      code: "RSD",
      name: "Serbian dinar",
      symbol: "дин.",
    },
    language: {
      code: "sr",
      name: "Serbian",
    },
    flag: "/next/next_assets/images/flags/sr.svg",
    dialling_code: "+381",
    isoCode: "688",
  },
  {
    name: "Seychelles",
    code: "SC",
    capital: "Victoria",
    region: "AF",
    currency: {
      code: "SCR",
      name: "Seychellois rupee",
      symbol: "₨",
    },
    language: {
      code: "fr",
      name: "French",
    },
    flag: "/next/next_assets/images/flags/sy.svg",
    dialling_code: "+248",
    isoCode: "690",
  },
  {
    name: "Sierra Leone",
    code: "SL",
    capital: "Freetown",
    region: "AF",
    currency: {
      code: "SLL",
      name: "Sierra Leonean leone",
      symbol: "Le",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/sl.svg",
    dialling_code: "+232",
    isoCode: "694",
  },
  {
    name: "Singapore",
    code: "SG",
    capital: "Singapore",
    region: "AS",
    currency: {
      code: "SGD",
      name: "Singapore dollar",
      symbol: "$",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/sg.svg",
    dialling_code: "+65",
    isoCode: "702",
  },
  {
    name: "Singapore",
    code: "SG",
    capital: "Singapore",
    region: "AS",
    currency: {
      code: "SGD",
      name: "Singapore dollar",
      symbol: "$",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/sg.svg",
    dialling_code: "+65",
    isoCode: "702",
  },
  {
    name: "Slovakia",
    code: "SK",
    capital: "Bratislava",
    region: "EU",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€",
    },
    language: {
      code: "sk",
      name: "Slovak",
    },
    flag: "/next/next_assets/images/flags/sv.svg",
    dialling_code: "+421",
    isoCode: "703",
  },
  {
    name: "Slovenia",
    code: "SI",
    capital: "Ljubljana",
    region: "EU",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€",
    },
    language: {
      code: "sl",
      name: "Slovene",
    },
    flag: "/next/next_assets/images/flags/sv.svg",
    dialling_code: "+386",
    isoCode: "705",
  },
  {
    name: "Solomon Islands",
    code: "SB",
    capital: "Honiara",
    region: "OC",
    currency: {
      code: "SBD",
      name: "Solomon Islands dollar",
      symbol: "$",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/sl.svg",
    dialling_code: "+677",
    isoCode: "090",
  },
  {
    name: "Somalia",
    code: "SO",
    capital: "Mogadishu",
    region: "AF",
    currency: {
      code: "SOS",
      name: "Somali shilling",
      symbol: "Sh",
    },
    language: {
      code: "ar",
      name: "Arabic",
    },
    flag: "/next/next_assets/images/flags/so.svg",
    dialling_code: "+252",
    isoCode: "706",
  },
  {
    name: "South Africa",
    code: "ZA",
    capital: "Pretoria",
    region: "AF",
    currency: {
      code: "ZAR",
      name: "South African rand",
      symbol: "R",
    },
    language: {
      code: "en",
      iso639_2: "eng",
      name: "English",
      nativeName: "English",
    },
    flag: "/next/next_assets/images/flags/za.svg",
    dialling_code: "+27",
    isoCode: "710",
  },
  {
    name: "Korea (Republic of)",
    code: "KR",
    capital: "Seoul",
    region: "AS",
    currency: {
      code: "KRW",
      name: "South Korean won",
      symbol: "₩",
    },
    language: {
      code: "ko",
      name: "Korean",
    },
    flag: "/next/next_assets/images/flags/ko.svg",
    dialling_code: "+82",
    isoCode: "410",
  },
  {
    name: "Spain",
    code: "ES",
    capital: "Madrid",
    region: "EU",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€",
    },
    language: {
      code: "es",
      name: "Spanish",
    },
    flag: "/next/next_assets/images/flags/es.svg",
    dialling_code: "+34",
    isoCode: "724",
  },
  {
    name: "Sri Lanka",
    code: "LK",
    capital: "Colombo",
    region: "AS",
    currency: {
      code: "LKR",
      name: "Sri Lankan rupee",
      symbol: "Rs",
    },
    language: {
      code: "si",
      iso639_2: "sin",
      name: "Sinhalese",
      nativeName: "සිංහල",
    },
    flag: "/next/next_assets/images/flags/lk.svg",
    dialling_code: "+94",
    isoCode: "144",
  },
  {
    name: "Sudan",
    code: "SD",
    capital: "Khartoum",
    region: "AF",
    currency: {
      code: "SDG",
      name: "Sudanese pound",
      symbol: "ج.س.",
    },
    language: {
      code: "ar",
      name: "Arabic",
    },
    flag: "/next/next_assets/images/flags/sd.svg",
    dialling_code: "+249",
    isoCode: "729",
  },
  {
    name: "Suriname",
    code: "SR",
    capital: "Paramaribo",
    region: "SA",
    currency: {
      code: "SRD",
      name: "Surinamese dollar",
      symbol: "$",
    },
    language: {
      code: "nl",
      name: "Dutch",
    },
    flag: "/next/next_assets/images/flags/su.svg",
    dialling_code: "+597",
    isoCode: "740",
  },
  {
    name: "Swaziland",
    code: "SZ",
    capital: "Lobamba",
    region: "AF",
    currency: {
      code: "SZL",
      name: "Swazi lilangeni",
      symbol: "L",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/sw.svg",
    dialling_code: "+268",
    isoCode: "748",
  },
  {
    name: "Sweden",
    code: "SE",
    capital: "Stockholm",
    region: "EU",
    currency: {
      code: "SEK",
      name: "Swedish krona",
      symbol: "kr",
    },
    language: {
      code: "sv",
      name: "Swedish",
    },
    flag: "/next/next_assets/images/flags/sw.svg",
    dialling_code: "+46",
    isoCode: "752",
  },
  {
    name: "Switzerland",
    code: "CH",
    capital: "Bern",
    region: "EU",
    currency: {
      code: "CHF",
      name: "Swiss franc",
      symbol: "Fr",
    },
    language: {
      code: "de",
      name: "German",
    },
    flag: "/next/next_assets/images/flags/ch.svg",
    dialling_code: "+41",
    isoCode: "756",
  },
  {
    name: "Syrian Arab Republic",
    code: "SY",
    capital: "Damascus",
    region: "AS",
    currency: {
      code: "SYP",
      name: "Syrian pound",
      symbol: "£",
    },
    language: {
      code: "ar",
      name: "Arabic",
    },
    flag: "/next/next_assets/images/flags/sy.svg",
    dialling_code: "+963",
    isoCode: "760",
  },
  {
    name: "Taiwan",
    code: "TW",
    capital: "Taipei",
    region: "AS",
    currency: {
      code: "TWD",
      name: "New Taiwan dollar",
      symbol: "$",
    },
    language: {
      code: "zh",
      name: "Chinese",
    },
    flag: "/next/next_assets/images/flags/tw.svg",
    dialling_code: "+886",
    isoCode: "158",
  },
  {
    name: "Tajikistan",
    code: "TJ",
    capital: "Dushanbe",
    region: "AS",
    currency: {
      code: "TJS",
      name: "Tajikistani somoni",
      symbol: "ЅМ",
    },
    language: {
      code: "tg",
      name: "Tajik",
    },
    flag: "/next/next_assets/images/flags/tj.svg",
    dialling_code: "+992",
    isoCode: "762",
  },
  {
    name: "Tanzania, United Republic of",
    code: "TZ",
    capital: "Dodoma",
    region: "AF",
    currency: {
      code: "TZS",
      name: "Tanzanian shilling",
      symbol: "Sh",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/tz.svg",
    dialling_code: "+255",
    isoCode: "834",
  },
  {
    name: "Thailand",
    code: "TH",
    capital: "Bangkok",
    region: "AS",
    currency: {
      code: "THB",
      name: "Thai baht",
      symbol: "฿",
    },
    language: {
      code: "th",
      name: "Thai",
    },
    flag: "/next/next_assets/images/flags/th.svg",
    dialling_code: "+66",
    isoCode: "764",
  },
  {
    name: "Timor-Leste",
    code: "TL",
    capital: "Dili",
    region: "AS",
    currency: {
      code: "USD",
      name: "United States dollar",
      symbol: "$",
    },
    language: {
      code: "pt",
      name: "Portuguese",
    },
    flag: "/next/next_assets/images/flags/tl.svg",
    dialling_code: "+670",
    isoCode: "626",
  },
  {
    name: "Togo",
    code: "TG",
    capital: "Lomé",
    region: "AF",
    currency: {
      code: "XOF",
      name: "West African CFA franc",
      symbol: "Fr",
    },
    language: {
      code: "fr",
      name: "French",
    },
    flag: "/next/next_assets/images/flags/tg.svg",
    dialling_code: "+228",
    isoCode: "768",
  },
  {
    name: "Tokelau",
    code: "TK",
    capital: "Fakaofo",
    region: "OC",
    currency: {
      code: "NZD",
      name: "New Zealand dollar",
      symbol: "$",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/tk.svg",
    dialling_code: "+690",
    isoCode: "772",
  },
  {
    name: "Tonga",
    code: "TO",
    capital: "Nuku'alofa",
    region: "OC",
    currency: {
      code: "TOP",
      name: "Tongan paʻanga",
      symbol: "T$",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/to.svg",
    dialling_code: "+676",
    isoCode: "776",
  },
  {
    name: "Trinidad and Tobago",
    code: "TT",
    capital: "Port of Spain",
    region: "SA",
    currency: {
      code: "TTD",
      name: "Trinidad and Tobago dollar",
      symbol: "$",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/tt.svg",
    dialling_code: "+1",
    isoCode: "780",
  },
  {
    name: "Tunisia",
    code: "TN",
    capital: "Tunis",
    region: "AF",
    currency: {
      code: "TND",
      name: "Tunisian dinar",
      symbol: "د.ت",
    },
    language: {
      code: "ar",
      name: "Arabic",
    },
    flag: "/next/next_assets/images/flags/tu.svg",
    dialling_code: "+216",
    isoCode: "788",
  },
  {
    name: "Turkey",
    code: "TR",
    capital: "Ankara",
    region: "AS",
    currency: {
      code: "TRY",
      name: "Turkish lira",
      symbol: null,
    },
    language: {
      code: "tr",
      name: "Turkish",
    },
    flag: "/next/next_assets/images/flags/tu.svg",
    dialling_code: "+90",
    isoCode: "792",
  },
  {
    name: "Turkmenistan",
    code: "TM",
    capital: "Ashgabat",
    region: "AS",
    currency: {
      code: "TMT",
      name: "Turkmenistan manat",
      symbol: "m",
    },
    language: {
      code: "tk",
      name: "Turkmen",
    },
    flag: "/next/next_assets/images/flags/tk.svg",
    dialling_code: "+993",
    isoCode: "795",
  },
  {
    name: "Turks and Caicos Islands",
    code: "TC",
    capital: "Cockburn Town",
    region: "NA",
    currency: {
      code: "USD",
      name: "United States dollar",
      symbol: "$",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/tc.svg",
    dialling_code: "+1",
    isoCode: "796",
  },
  {
    name: "Tuvalu",
    code: "TV",
    capital: "Funafuti",
    region: "OC",
    currency: {
      code: "AUD",
      name: "Australian dollar",
      symbol: "$",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/tu.svg",
    dialling_code: "+688",
    isoCode: "798",
  },
  {
    name: "Uganda",
    code: "UG",
    capital: "Kampala",
    region: "AF",
    currency: {
      code: "UGX",
      name: "Ugandan shilling",
      symbol: "Sh",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/ug.svg",
    dialling_code: "+256",
    isoCode: "800",
  },
  {
    name: "Ukraine",
    code: "UA",
    capital: "Kiev",
    region: "EU",
    currency: {
      code: "UAH",
      name: "Ukrainian hryvnia",
      symbol: "₴",
    },
    language: {
      code: "uk",
      name: "Ukrainian",
    },
    flag: "/next/next_assets/images/flags/uk.svg",
    dialling_code: "+380",
    isoCode: "804",
  },
  {
    name: "United Arab Emirates",
    code: "AE",
    capital: "Abu Dhabi",
    region: "AS",
    currency: {
      code: "AED",
      name: "United Arab Emirates dirham",
      symbol: "د.إ",
    },
    language: {
      code: "ar",
      name: "Arabic",
    },
    flag: "/next/next_assets/images/flags/ar.svg",
    dialling_code: "+971",
    isoCode: "784",
  },
  {
    name: "United Kingdom of Great Britain and Northern Ireland",
    code: "GB",
    capital: "London",
    region: "EU",
    currency: {
      code: "GBP",
      name: "British pound",
      symbol: "£",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/gb.svg",
    dialling_code: "+44",
    isoCode: "826",
  },
  {
    name: "United States of America",
    code: "US",
    capital: "Washington, D.C.",
    region: "NA",
    currency: {
      code: "USD",
      name: "United States dollar",
      symbol: "$",
    },
    language: {
      code: "en",
      iso639_2: "eng",
      name: "English",
      nativeName: "English",
    },
    flag: "/next/next_assets/images/flags/us.svg",
    dialling_code: "+1",
    isoCode: "840",
  },
  {
    name: "Uruguay",
    code: "UY",
    capital: "Montevideo",
    region: "SA",
    currency: {
      code: "UYU",
      name: "Uruguayan peso",
      symbol: "$",
    },
    language: {
      code: "es",
      name: "Spanish",
    },
    flag: "/next/next_assets/images/flags/ur.svg",
    dialling_code: "+598",
    isoCode: "858",
  },
  {
    name: "Uzbekistan",
    code: "UZ",
    capital: "Tashkent",
    region: "AS",
    currency: {
      code: "UZS",
      name: "Uzbekistani so'm",
      symbol: null,
    },
    language: {
      code: "uz",
      name: "Uzbek",
    },
    flag: "/next/next_assets/images/flags/uz.svg",
    dialling_code: "+998",
    isoCode: "860",
  },
  {
    name: "Vanuatu",
    code: "VU",
    capital: "Port Vila",
    region: "OC",
    currency: {
      code: "VUV",
      name: "Vanuatu vatu",
      symbol: "Vt",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/vu.svg",
    dialling_code: "+678",
    isoCode: "548",
  },
  {
    name: "Venezuela (Bolivarian Republic of)",
    code: "VE",
    capital: "Caracas",
    region: "SA",
    currency: {
      code: "VEF",
      name: "Venezuelan bolívar",
      symbol: "Bs F",
    },
    language: {
      code: "es",
      name: "Spanish",
    },
    flag: "/next/next_assets/images/flags/ve.svg",
    dialling_code: "+58",
    isoCode: "862",
  },
  {
    name: "Viet Nam",
    code: "VN",
    capital: "Hanoi",
    region: "AS",
    currency: {
      code: "VND",
      name: "Vietnamese đồng",
      symbol: "₫",
    },
    language: {
      code: "vi",
      name: "Vietnamese",
    },
    flag: "/next/next_assets/images/flags/vn.svg",
    dialling_code: "+84",
    isoCode: "704",
  },
  {
    name: "Wallis and Futuna",
    code: "WF",
    capital: "Mata-Utu",
    region: "OC",
    currency: {
      code: "XPF",
      name: "CFP franc",
      symbol: "Fr",
    },
    language: {
      code: "fr",
      name: "French",
    },
    flag: "/next/next_assets/images/flags/wl.svg",
    dialling_code: "+681",
    isoCode: "876",
  },
  {
    name: "Wallis and Futuna",
    code: "WF",
    capital: "Mata-Utu",
    region: "OC",
    currency: {
      code: "XPF",
      name: "CFP franc",
      symbol: "Fr",
    },
    language: {
      code: "fr",
      name: "French",
    },
    flag: "/next/next_assets/images/flags/wl.svg",
    dialling_code: "+681",
    isoCode: "876",
  },
  {
    name: "Yemen",
    code: "YE",
    capital: "Sana'a",
    region: "AS",
    currency: {
      code: "YER",
      name: "Yemeni rial",
      symbol: "﷼",
    },
    language: {
      code: "ar",
      name: "Arabic",
    },
    flag: "/next/next_assets/images/flags/ye.svg",
    dialling_code: "+967",
    isoCode: "887",
  },
  {
    name: "Zambia",
    code: "ZM",
    capital: "Lusaka",
    region: "AF",
    currency: {
      code: "ZMW",
      name: "Zambian kwacha",
      symbol: "ZK",
    },
    language: {
      code: "en",
      name: "English",
    },
    flag: "/next/next_assets/images/flags/zm.svg",
    dialling_code: "+260",
    isoCode: "894",
  },
  {
    name: "Zimbabwe",
    code: "ZW",
    capital: "Harare",
    region: "AF",
    currency: {
      code: "BWP",
      name: "Botswana pula",
      symbol: "P",
    },
    language: {
      code: "en",
      iso639_2: "eng",
      name: "English",
      nativeName: "English",
    },
    flag: "/next/next_assets/images/flags/zw.svg",
    dialling_code: "+263",
    isoCode: "716",
  },
];

// 2 and 3 country codes
export const COUNTRYCODES = {
  AF: "AFG",
  AX: "ALA",
  AL: "ALB",
  DZ: "DZA",
  AS: "ASM",
  AD: "AND",
  AO: "AGO",
  AI: "AIA",
  AQ: "ATA",
  AG: "ATG",
  AR: "ARG",
  AM: "ARM",
  AW: "ABW",
  AU: "AUS",
  AT: "AUT",
  AZ: "AZE",
  BS: "BHS",
  BH: "BHR",
  BD: "BGD",
  BB: "BRB",
  BY: "BLR",
  BE: "BEL",
  BZ: "BLZ",
  BJ: "BEN",
  BM: "BMU",
  BT: "BTN",
  BO: "BOL",
  BQ: "BES",
  BA: "BIH",
  BW: "BWA",
  BV: "BVT",
  BR: "BRA",
  IO: "IOT",
  BN: "BRN",
  BG: "BGR",
  BF: "BFA",
  BI: "BDI",
  KH: "KHM",
  CM: "CMR",
  CA: "CAN",
  CV: "CPV",
  KY: "CYM",
  CF: "CAF",
  TD: "TCD",
  CL: "CHL",
  CN: "CHN",
  CX: "CXR",
  CC: "CCK",
  CO: "COL",
  KM: "COM",
  CG: "COG",
  CD: "COD",
  CK: "COK",
  CR: "CRI",
  CI: "CIV",
  HR: "HRV",
  CU: "CUB",
  CW: "CUW",
  CY: "CYP",
  CZ: "CZE",
  DK: "DNK",
  DJ: "DJI",
  DM: "DMA",
  DO: "DOM",
  EC: "ECU",
  EG: "EGY",
  SV: "SLV",
  GQ: "GNQ",
  ER: "ERI",
  EE: "EST",
  ET: "ETH",
  FK: "FLK",
  FO: "FRO",
  FJ: "FJI",
  FI: "FIN",
  FR: "FRA",
  GF: "GUF",
  PF: "PYF",
  TF: "ATF",
  GA: "GAB",
  GM: "GMB",
  GE: "GEO",
  DE: "DEU",
  GH: "GHA",
  GI: "GIB",
  GR: "GRC",
  GL: "GRL",
  GD: "GRD",
  GP: "GLP",
  GU: "GUM",
  GT: "GTM",
  GG: "GGY",
  GN: "GIN",
  GW: "GNB",
  GY: "GUY",
  HT: "HTI",
  HM: "HMD",
  VA: "VAT",
  HN: "HND",
  HK: "HKG",
  HU: "HUN",
  IS: "ISL",
  IN: "IND",
  ID: "IDN",
  IR: "IRN",
  IQ: "IRQ",
  IE: "IRL",
  IM: "IMN",
  IL: "ISR",
  IT: "ITA",
  JM: "JAM",
  JP: "JPN",
  JE: "JEY",
  JO: "JOR",
  KZ: "KAZ",
  KE: "KEN",
  KI: "KIR",
  KP: "PRK",
  KR: "KOR",
  KW: "KWT",
  KG: "KGZ",
  LA: "LAO",
  LV: "LVA",
  LB: "LBN",
  LS: "LSO",
  LR: "LBR",
  LY: "LBY",
  LI: "LIE",
  LT: "LTU",
  LU: "LUX",
  MO: "MAC",
  MG: "MDG",
  MW: "MWI",
  MY: "MYS",
  MV: "MDV",
  ML: "MLI",
  MT: "MLT",
  MH: "MHL",
  MQ: "MTQ",
  MR: "MRT",
  MU: "MUS",
  YT: "MYT",
  MX: "MEX",
  FM: "FSM",
  MD: "MDA",
  MC: "MCO",
  MN: "MNG",
  ME: "MNE",
  MS: "MSR",
  MA: "MAR",
  MZ: "MOZ",
  MM: "MMR",
  NA: "NAM",
  NR: "NRU",
  NP: "NPL",
  NL: "NLD",
  NC: "NCL",
  NZ: "NZL",
  NI: "NIC",
  NE: "NER",
  NG: "NGA",
  NU: "NIU",
  NF: "NFK",
  MP: "MNP",
  NO: "NOR",
  OM: "OMN",
  PK: "PAK",
  PW: "PLW",
  PS: "PSE",
  PA: "PAN",
  PG: "PNG",
  PY: "PRY",
  PE: "PER",
  PH: "PHL",
  PN: "PCN",
  PL: "POL",
  PT: "PRT",
  PR: "PRI",
  QA: "QAT",
  RE: "REU",
  RO: "ROU",
  RU: "RUS",
  RW: "RWA",
  BL: "BLM",
  SH: "SHN",
  KN: "KNA",
  LC: "LCA",
  MF: "MAF",
  PM: "SPM",
  VC: "VCT",
  WS: "WSM",
  SM: "SMR",
  ST: "STP",
  SA: "SAU",
  SN: "SEN",
  RS: "SRB",
  SC: "SYC",
  SL: "SLE",
  SG: "SGP",
  SX: "SXM",
  SK: "SVK",
  SI: "SVN",
  SB: "SLB",
  SO: "SOM",
  ZA: "ZAF",
  GS: "SGS",
  SS: "SSD",
  ES: "ESP",
  LK: "LKA",
  SD: "SDN",
  SR: "SUR",
  SJ: "SJM",
  SZ: "SWZ",
  SE: "SWE",
  CH: "CHE",
  SY: "SYR",
  TW: "TWN",
  TJ: "TJK",
  TZ: "TZA",
  TH: "THA",
  TL: "TLS",
  TG: "TGO",
  TK: "TKL",
  TO: "TON",
  TT: "TTO",
  TN: "TUN",
  TR: "TUR",
  TM: "TKM",
  TC: "TCA",
  TV: "TUV",
  UG: "UGA",
  UA: "UKR",
  AE: "ARE",
  GB: "GBR",
  US: "USA",
  UM: "UMI",
  UY: "URY",
  UZ: "UZB",
  VU: "VUT",
  VE: "VEN",
  VN: "VNM",
  VG: "VGB",
  VI: "VIR",
  WF: "WLF",
  EH: "ESH",
  YE: "YEM",
  ZM: "ZMB",
  ZW: "ZWE",
};

// countries and languages (codes)
export const LANGUAGECOUNTRIES = [
  {
    lang_code: "abk",
  },
  {
    lang_code: "aar",
    countries: ["DJI"],
  },
  {
    lang_code: "afr",
    countries: ["ZAF"],
  },
  {
    lang_code: "aka",
    countries: ["GHA"],
  },
  {
    lang_code: "sqi",
    countries: ["ALB"],
  },
  {
    lang_code: "amh",
    countries: ["ETH"],
  },
  {
    lang_code: "ara",
    countries: [
      "DZA",
      "BHR",
      "TCD",
      "COM",
      "DJI",
      "EGY",
      "ERI",
      "IRQ",
      "ISR",
      "JOR",
      "KWT",
      "LBN",
      "LBY",
      "MRT",
      "MAR",
      "NER",
      "OMN",
      "QAT",
      "SAU",
      "SOM",
      "SDN",
      "SYR",
      "TUN",
      "ARE",
      "YEM",
    ],
  },
  {
    lang_code: "arg",
  },
  {
    lang_code: "hye",
    countries: ["ARM"],
  },
  {
    lang_code: "asm",
  },
  {
    lang_code: "ava",
  },
  {
    lang_code: "ave",
  },
  {
    lang_code: "aym",
    countries: ["BOL", "PER"],
  },
  {
    lang_code: "aze",
    countries: ["AZE"],
  },
  {
    lang_code: "bam",
    countries: ["MLI"],
  },
  {
    lang_code: "bak",
  },
  {
    lang_code: "eus",
  },
  {
    lang_code: "bel",
    countries: ["BLR"],
  },
  {
    lang_code: "ben",
    countries: ["BGD", "IND"],
  },
  {
    lang_code: "ber",
    countries: ["DZA", "MAR"],
  },
  {
    lang_code: "",
  },
  {
    lang_code: "bis",
    countries: ["VUT"],
  },
  {
    lang_code: "bos",
    countries: ["BIH"],
  },
  {
    lang_code: "bre",
  },
  {
    lang_code: "bul",
    countries: ["BGR"],
  },
  {
    lang_code: "mya",
    countries: ["MMR"],
  },
  {
    lang_code: "cat",
    countries: ["AND"],
  },
  {
    lang_code: "cha",
  },
  {
    lang_code: "che",
  },
  {
    lang_code: "nya",
    countries: ["MWI"],
  },
  {
    lang_code: "zho",
    countries: ["HKG", "MAC", "CHN", "TWN", "SGP"],
  },
  {
    lang_code: "chv",
  },
  {
    lang_code: "cor",
  },
  {
    lang_code: "cos",
  },
  {
    lang_code: "cre",
  },
  {
    lang_code: "hrv",
    countries: ["HRV", "BIH"],
  },
  {
    lang_code: "ces",
    countries: ["CZE", "SVK"],
  },
  {
    lang_code: "dan",
    countries: ["DNK", "FRO"],
  },
  {
    lang_code: "prs",
    countries: ["AFG"],
  },
  {
    lang_code: "div",
    countries: ["MDV"],
  },
  {
    lang_code: "nld",
    countries: ["BEL", "NLD", "ABW", "CUW", "SXM", "SUR"],
  },
  {
    lang_code: "dzo",
    countries: ["BTN"],
  },
  {
    lang_code: "eng",
    countries: [
      "USA",
      "ATG",
      "AUS",
      "BHS",
      "BRB",
      "BLZ",
      "BWA",
      "CMR",
      "CAN",
      "CUW",
      "DMA",
      "ERI",
      "FJI",
      "GMB",
      "GHA",
      "GRD",
      "GUY",
      "HKG",
      "IND",
      "IRL",
      "JAM",
      "KEN",
      "KIR",
      "LSO",
      "LBR",
      "MWI",
      "MYS",
      "MLT",
      "MHL",
      "MUS",
      "FSM",
      "NAM",
      "NRU",
      "NZL",
      "NGA",
      "PAK",
      "PLW",
      "PNG",
      "PHL",
      "RWA",
      "KNA",
      "LCA",
      "VCT",
      "WSM",
      "SYC",
      "SLE",
      "SGP",
      "SXM",
      "SLB",
      "ZAF",
      "SSD",
      "LKA",
      "SDN",
      "SWZ",
      "TZA",
      "TON",
      "TTO",
      "TUV",
      "UGA",
      "GBR",
      "VUT",
      "ZMB",
      "ZWE",
    ],
  },
  {
    lang_code: "epo",
  },
  {
    lang_code: "est",
    countries: ["EST"],
  },
  {
    lang_code: "ewe",
    countries: ["GHA", "TGO"],
  },
  {
    lang_code: "fao",
  },
  {
    lang_code: "fij",
    countries: ["FJI"],
  },
  {
    lang_code: "fin",
    countries: ["FIN"],
  },
  {
    lang_code: "fra",
    countries: [
      "FRA",
      "BEL",
      "BEN",
      "BFA",
      "BDI",
      "CMR",
      "CAN",
      "CAF",
      "TCD",
      "COM",
      "CIV",
      "COD",
      "COG",
      "DJI",
      "GNQ",
      "GUF",
      "PYF",
      "GLP",
      "MTQ",
      "MYT",
      "NCL",
      "REU",
      "BLM",
      "SPM",
      "WLF",
      "GAB",
      "GIN",
      "HTI",
      "ITA",
      "JEY",
      "LUX",
      "MDG",
      "MLI",
      "MUS",
      "MCO",
      "NER",
      "RWA",
      "SEN",
      "SYC",
      "CHE",
      "TGO",
      "VUT",
    ],
  },
  {
    lang_code: "ful",
    countries: ["BEN", "BFA", "MLI", "NER", "SEN"],
  },
  {
    lang_code: "glg",
  },
  {
    lang_code: "kat",
    countries: ["GEO"],
  },
  {
    lang_code: "deu",
    countries: ["DEU", "AUT", "BEL", "LIE", "LUX", "ITA", "CHE"],
  },
  {
    lang_code: "ell",
    countries: ["GRC", "CYP"],
  },
  {
    lang_code: "grn",
    countries: ["PRY", "BOL"],
  },
  {
    lang_code: "guj",
    countries: ["IND"],
  },
  {
    lang_code: "hat",
    countries: ["HTI"],
  },
  {
    lang_code: "hau",
    countries: ["NER", "NGA"],
  },
  {
    lang_code: "heb",
    countries: ["ISR"],
  },
  {
    lang_code: "her",
  },
  {
    lang_code: "hin",
    countries: ["IND", "FJI"],
  },
  {
    lang_code: "hmo",
    countries: ["PNG"],
  },
  {
    lang_code: "hun",
    countries: ["HUN"],
  },
  {
    lang_code: "ina",
  },
  {
    lang_code: "ind",
    countries: ["IDN"],
  },
  {
    lang_code: "ile",
  },
  {
    lang_code: "gle",
    countries: ["IRL"],
  },
  {
    lang_code: "ibo",
    countries: ["NGA"],
  },
  {
    lang_code: "ipk",
  },
  {
    lang_code: "ido",
  },
  {
    lang_code: "isl",
    countries: ["ISL"],
  },
  {
    lang_code: "ita",
    countries: ["ITA", "HRV", "SMR", "SVN", "CHE", "VAT"],
  },
  {
    lang_code: "iku",
  },
  {
    lang_code: "jpn",
    countries: ["JPN"],
  },
  {
    lang_code: "jav",
  },
  {
    lang_code: "kal",
  },
  {
    lang_code: "kan",
  },
  {
    lang_code: "kau",
    countries: ["NER"],
  },
  {
    lang_code: "kas",
  },
  {
    lang_code: "kaz",
    countries: ["KAZ"],
  },
  {
    lang_code: "khm",
    countries: ["KHM"],
  },
  {
    lang_code: "kik",
  },
  {
    lang_code: "kin",
    countries: ["RWA"],
  },
  {
    lang_code: "kir",
    countries: ["KGZ"],
  },
  {
    lang_code: "kom",
  },
  {
    lang_code: "kon",
    countries: ["AGO", "COD", "COG"],
  },
  {
    lang_code: "kor",
    countries: ["PRK", "KOR"],
  },
  {
    lang_code: "kur",
    countries: ["IRQ"],
  },
  {
    lang_code: "kua",
    countries: ["AGO"],
  },
  {
    lang_code: "lat",
    countries: ["VAT"],
  },
  {
    lang_code: "ltz",
    countries: ["LUX"],
  },
  {
    lang_code: "lug",
  },
  {
    lang_code: "lim",
  },
  {
    lang_code: "lin",
    countries: ["COD", "COG"],
  },
  {
    lang_code: "lao",
    countries: ["LAO"],
  },
  {
    lang_code: "lit",
    countries: ["LTU"],
  },
  {
    lang_code: "lub",
    countries: ["COD"],
  },
  {
    lang_code: "lav",
    countries: ["LVA"],
  },
  {
    lang_code: "glv",
  },
  {
    lang_code: "mkd",
    countries: ["MKD"],
  },
  {
    lang_code: "mlg",
    countries: ["MDG"],
  },
  {
    lang_code: "msa",
    countries: ["MYS", "BRN", "SGP", "IDN"],
  },
  {
    lang_code: "mal",
  },
  {
    lang_code: "mlt",
    countries: ["MLT"],
  },
  {
    lang_code: "mri",
    countries: ["NZL"],
  },
  {
    lang_code: "mar",
  },
  {
    lang_code: "mah",
    countries: ["MHL"],
  },
  {
    lang_code: "mon",
    countries: ["MNG"],
  },
  {
    lang_code: "nau",
  },
  {
    lang_code: "nav",
  },
  {
    lang_code: "nob",
    countries: ["NOR"],
  },
  {
    lang_code: "nde",
    countries: ["ZAF", "ZWE"],
  },
  {
    lang_code: "nso",
    countries: ["ZAF"],
  },
  {
    lang_code: "nep",
    countries: ["NPL"],
  },
  {
    lang_code: "ndo",
  },
  {
    lang_code: "nno",
    countries: ["NOR"],
  },
  {
    lang_code: "nor",
    countries: ["NOR"],
  },
  {
    lang_code: "iii",
  },
  {
    lang_code: "nbl",
    countries: ["ZAF"],
  },
  {
    lang_code: "oci",
  },
  {
    lang_code: "oji",
  },
  {
    lang_code: "chu",
  },
  {
    lang_code: "orm",
  },
  {
    lang_code: "ori",
  },
  {
    lang_code: "oss",
    countries: [],
  },
  {
    lang_code: "pan",
    countries: ["IND"],
  },
  {
    lang_code: "pli",
  },
  {
    lang_code: "fas",
    countries: ["IRN", "AFG", "TJK"],
  },
  {
    lang_code: "pol",
    countries: ["POL"],
  },
  {
    lang_code: "pus",
    countries: ["AFG"],
  },
  {
    lang_code: "por",
    countries: ["AGO", "BRA", "CPV", "TLS", "GNQ", "GNB", "MAC", "MOZ", "PRT", "STP"],
  },
  {
    lang_code: "que",
    countries: ["BOL", "PER"],
  },
  {
    lang_code: "roh",
    countries: ["CHE"],
  },
  {
    lang_code: "run",
    countries: ["BDI"],
  },
  {
    lang_code: "ron",
    countries: ["ROU", "MDA"],
  },
  {
    lang_code: "rus",
    countries: ["RUS", "BLR", "KAZ", "KGZ", "TJK"],
  },
  {
    lang_code: "san",
  },
  {
    lang_code: "srd",
  },
  {
    lang_code: "snd",
  },
  {
    lang_code: "sme",
  },
  {
    lang_code: "smo",
  },
  {
    lang_code: "sag",
    countries: ["CAF"],
  },
  {
    lang_code: "srp",
    countries: ["SRB", "BIH"],
  },
  {
    lang_code: "gla",
  },
  {
    lang_code: "sna",
    countries: ["ZWE"],
  },
  {
    lang_code: "sin",
    countries: ["LKA"],
  },
  {
    lang_code: "slk",
    countries: ["SVK", "CZE"],
  },
  {
    lang_code: "slv",
    countries: ["SVN"],
  },
  {
    lang_code: "som",
    countries: ["DJI", "SOM"],
  },
  {
    lang_code: "sot",
    countries: ["LSO", "ZAF"],
  },
  {
    lang_code: "spa",
    countries: [
      "ARG",
      "BOL",
      "CHL",
      "COL",
      "CRI",
      "CUB",
      "DOM",
      "ECU",
      "SLV",
      "GNQ",
      "GTM",
      "HND",
      "MEX",
      "NIC",
      "PAN",
      "PRY",
      "PER",
      "PRI",
      "ESP",
      "URY",
      "VEN",
      "ESH",
    ],
  },
  {
    lang_code: "sun",
  },
  {
    lang_code: "swa",
    countries: ["COD", "KEN", "TZA", "UGA"],
  },
  {
    lang_code: "ssw",
    countries: ["SWZ", "ZAF"],
  },
  {
    lang_code: "swe",
    countries: ["SWE", "FIN", "ALA"],
  },
  {
    lang_code: "tam",
    countries: ["IND", "SGP", "LKA", "MYS", "MUS"],
  },
  {
    lang_code: "tel",
    countries: ["IND"],
  },
  {
    lang_code: "tgk",
    countries: ["TJK"],
  },
  {
    lang_code: "tha",
    countries: ["THA"],
  },
  {
    lang_code: "tir",
    countries: ["ERI"],
  },
  {
    lang_code: "bod",
  },
  {
    lang_code: "tuk",
    countries: ["TKM"],
  },
  {
    lang_code: "tgl",
    countries: ["PHL"],
  },
  {
    lang_code: "fil",
    countries: ["PHL"],
  },
  {
    lang_code: "tsn",
    countries: ["BWA", "ZAF"],
  },
  {
    lang_code: "ton",
  },
  {
    lang_code: "tur",
    countries: ["TUR", "CYP"],
  },
  {
    lang_code: "tso",
    countries: ["ZAF"],
  },
  {
    lang_code: "tat",
  },
  {
    lang_code: "twi",
  },
  {
    lang_code: "tah",
  },
  {
    lang_code: "uig",
  },
  {
    lang_code: "ukr",
    countries: ["UKR"],
  },
  {
    lang_code: "urd",
    countries: ["PAK", "FJI"],
  },
  {
    lang_code: "uzb",
    countries: ["UZB"],
  },
  {
    lang_code: "ven",
    countries: ["ZAF"],
  },
  {
    lang_code: "vie",
    countries: ["VNM"],
  },
  {
    lang_code: "vol",
  },
  {
    lang_code: "wln",
  },
  {
    lang_code: "cym",
    countries: ["GBR"],
  },
  {
    lang_code: "wol",
    countries: ["SEN"],
  },
  {
    lang_code: "fry",
  },
  {
    lang_code: "xho",
    countries: ["ZAF"],
  },
  {
    lang_code: "yid",
  },
  {
    lang_code: "yor",
    countries: ["BEN", "NGA"],
  },
  {
    lang_code: "zha",
  },
  {
    lang_code: "zul",
    countries: ["ZAF"],
  },
  {
    lang_code: "ace",
  },
  {
    lang_code: "ach",
  },
  {
    lang_code: "ada",
  },
  {
    lang_code: "ady",
  },
  {
    lang_code: "afa",
  },
  {
    lang_code: "afh",
  },
  {
    lang_code: "ain",
  },
  {
    lang_code: "akk",
  },
  {
    lang_code: "ale",
  },
  {
    lang_code: "alg",
  },
  {
    lang_code: "alt",
  },
  {
    lang_code: "ang",
  },
  {
    lang_code: "anp",
  },
  {
    lang_code: "apa",
  },
  {
    lang_code: "arc",
  },
  {
    lang_code: "arn",
  },
  {
    lang_code: "arp",
  },
  {
    lang_code: "art",
  },
  {
    lang_code: "arw",
  },
  {
    lang_code: "ast",
  },
  {
    lang_code: "ath",
  },
  {
    lang_code: "aus",
  },
  {
    lang_code: "awa",
  },
  {
    lang_code: "bad",
  },
  {
    lang_code: "bai",
  },
  {
    lang_code: "bal",
  },
  {
    lang_code: "ban",
  },
  {
    lang_code: "bas",
  },
  {
    lang_code: "bat",
  },
  {
    lang_code: "bej",
  },
  {
    lang_code: "bem",
  },
  {
    lang_code: "bho",
  },
  {
    lang_code: "bik",
  },
  {
    lang_code: "bin",
  },
  {
    lang_code: "bla",
  },
  {
    lang_code: "bnt",
  },
  {
    lang_code: "bra",
  },
  {
    lang_code: "btk",
  },
  {
    lang_code: "bua",
  },
  {
    lang_code: "bug",
  },
  {
    lang_code: "byn",
  },
  {
    lang_code: "cad",
  },
  {
    lang_code: "cai",
  },
  {
    lang_code: "car",
  },
  {
    lang_code: "cau",
  },
  {
    lang_code: "ceb",
  },
  {
    lang_code: "cel",
  },
  {
    lang_code: "chb",
  },
  {
    lang_code: "chg",
  },
  {
    lang_code: "chk",
  },
  {
    lang_code: "chm",
  },
  {
    lang_code: "chn",
  },
  {
    lang_code: "cho",
  },
  {
    lang_code: "chp",
  },
  {
    lang_code: "chr",
  },
  {
    lang_code: "chy",
  },
  {
    lang_code: "cmc",
  },
  {
    lang_code: "cop",
  },
  {
    lang_code: "cpe",
  },
  {
    lang_code: "cpf",
  },
  {
    lang_code: "cpp",
  },
  {
    lang_code: "crh",
  },
  {
    lang_code: "crp",
  },
  {
    lang_code: "csb",
  },
  {
    lang_code: "cus",
  },
  {
    lang_code: "dak",
  },
  {
    lang_code: "dar",
  },
  {
    lang_code: "day",
  },
  {
    lang_code: "del",
  },
  {
    lang_code: "den",
  },
  {
    lang_code: "dgr",
  },
  {
    lang_code: "din",
  },
  {
    lang_code: "doi",
  },
  {
    lang_code: "dra",
  },
  {
    lang_code: "dsb",
  },
  {
    lang_code: "dua",
  },
  {
    lang_code: "dum",
  },
  {
    lang_code: "dyu",
  },
  {
    lang_code: "efi",
  },
  {
    lang_code: "egy",
  },
  {
    lang_code: "eka",
  },
  {
    lang_code: "elx",
  },
  {
    lang_code: "enm",
  },
  {
    lang_code: "ewo",
  },
  {
    lang_code: "fan",
  },
  {
    lang_code: "fat",
  },
  {
    lang_code: "fiu",
  },
  {
    lang_code: "fon",
  },
  {
    lang_code: "frm",
  },
  {
    lang_code: "fro",
  },
  {
    lang_code: "frr",
  },
  {
    lang_code: "frs",
  },
  {
    lang_code: "fur",
  },
  {
    lang_code: "gaa",
    countries: ["GHA"],
  },
  {
    lang_code: "gay",
  },
  {
    lang_code: "gba",
  },
  {
    lang_code: "gem",
  },
  {
    lang_code: "gez",
  },
  {
    lang_code: "gil",
  },
  {
    lang_code: "gmh",
  },
  {
    lang_code: "goh",
  },
  {
    lang_code: "gon",
  },
  {
    lang_code: "gor",
  },
  {
    lang_code: "got",
  },
  {
    lang_code: "grb",
  },
  {
    lang_code: "grc",
  },
  {
    lang_code: "gsw",
  },
  {
    lang_code: "gwi",
  },
  {
    lang_code: "hai",
  },
  {
    lang_code: "haw",
  },
  {
    lang_code: "hil",
  },
  {
    lang_code: "him",
  },
  {
    lang_code: "hit",
  },
  {
    lang_code: "hmn",
  },
  {
    lang_code: "hsb",
  },
  {
    lang_code: "hup",
  },
  {
    lang_code: "iba",
  },
  {
    lang_code: "ijo",
  },
  {
    lang_code: "ilo",
  },
  {
    lang_code: "inc",
  },
  {
    lang_code: "ine",
  },
  {
    lang_code: "inh",
  },
  {
    lang_code: "ira",
  },
  {
    lang_code: "iro",
  },
  {
    lang_code: "jbo",
  },
  {
    lang_code: "jpr",
  },
  {
    lang_code: "jrb",
  },
  {
    lang_code: "kaa",
  },
  {
    lang_code: "kab",
  },
  {
    lang_code: "kac",
  },
  {
    lang_code: "kam",
  },
  {
    lang_code: "kar",
  },
  {
    lang_code: "kaw",
  },
  {
    lang_code: "kbd",
  },
  {
    lang_code: "kha",
  },
  {
    lang_code: "khi",
  },
  {
    lang_code: "kho",
  },
  {
    lang_code: "kmb",
    countries: ["AGO"],
  },
  {
    lang_code: "kok",
  },
  {
    lang_code: "kos",
  },
  {
    lang_code: "kpe",
  },
  {
    lang_code: "krc",
  },
  {
    lang_code: "krl",
  },
  {
    lang_code: "kro",
  },
  {
    lang_code: "kru",
  },
  {
    lang_code: "kum",
  },
  {
    lang_code: "kut",
  },
  {
    lang_code: "lad",
  },
  {
    lang_code: "lah",
  },
  {
    lang_code: "lam",
  },
  {
    lang_code: "lez",
  },
  {
    lang_code: "lol",
  },
  {
    lang_code: "loz",
  },
  {
    lang_code: "lua",
  },
  {
    lang_code: "lui",
  },
  {
    lang_code: "lun",
  },
  {
    lang_code: "luo",
  },
  {
    lang_code: "lus",
  },
  {
    lang_code: "mad",
  },
  {
    lang_code: "mag",
  },
  {
    lang_code: "mai",
  },
  {
    lang_code: "mak",
  },
  {
    lang_code: "man",
  },
  {
    lang_code: "map",
  },
  {
    lang_code: "mas",
  },
  {
    lang_code: "mdf",
  },
  {
    lang_code: "mdr",
  },
  {
    lang_code: "men",
  },
  {
    lang_code: "mga",
  },
  {
    lang_code: "mic",
  },
  {
    lang_code: "min",
  },
  {
    lang_code: "mis",
  },
  {
    lang_code: "mkh",
  },
  {
    lang_code: "mnc",
  },
  {
    lang_code: "mni",
  },
  {
    lang_code: "mno",
  },
  {
    lang_code: "moh",
  },
  {
    lang_code: "mos",
    countries: ["BFA"],
  },
  {
    lang_code: "mul",
  },
  {
    lang_code: "mun",
  },
  {
    lang_code: "mus",
  },
  {
    lang_code: "mwl",
  },
  {
    lang_code: "mwr",
  },
  {
    lang_code: "myn",
  },
  {
    lang_code: "myv",
  },
  {
    lang_code: "nah",
  },
  {
    lang_code: "nai",
  },
  {
    lang_code: "nap",
  },
  {
    lang_code: "nds",
  },
  {
    lang_code: "new",
  },
  {
    lang_code: "nia",
  },
  {
    lang_code: "nic",
  },
  {
    lang_code: "niu",
  },
  {
    lang_code: "nog",
  },
  {
    lang_code: "non",
  },
  {
    lang_code: "nqo",
  },
  {
    lang_code: "nub",
  },
  {
    lang_code: "nwc",
  },
  {
    lang_code: "nym",
  },
  {
    lang_code: "nyn",
  },
  {
    lang_code: "nyo",
  },
  {
    lang_code: "nzi",
  },
  {
    lang_code: "osa",
  },
  {
    lang_code: "ota",
  },
  {
    lang_code: "oto",
  },
  {
    lang_code: "paa",
  },
  {
    lang_code: "pag",
  },
  {
    lang_code: "pal",
  },
  {
    lang_code: "pam",
  },
  {
    lang_code: "pap",
    countries: ["ABW", "CUW"],
  },
  {
    lang_code: "pau",
  },
  {
    lang_code: "peo",
  },
  {
    lang_code: "phi",
  },
  {
    lang_code: "phn",
  },
  {
    lang_code: "pon",
  },
  {
    lang_code: "pra",
  },
  {
    lang_code: "pro",
  },
  {
    lang_code: "qaa-qtz",
  },
  {
    lang_code: "raj",
  },
  {
    lang_code: "rap",
  },
  {
    lang_code: "rar",
  },
  {
    lang_code: "roa",
  },
  {
    lang_code: "rom",
  },
  {
    lang_code: "rup",
  },
  {
    lang_code: "sad",
  },
  {
    lang_code: "sah",
  },
  {
    lang_code: "sai",
  },
  {
    lang_code: "sal",
  },
  {
    lang_code: "sam",
  },
  {
    lang_code: "sas",
  },
  {
    lang_code: "sat",
  },
  {
    lang_code: "scn",
  },
  {
    lang_code: "sco",
  },
  {
    lang_code: "sel",
  },
  {
    lang_code: "sem",
  },
  {
    lang_code: "sga",
  },
  {
    lang_code: "sgn",
  },
  {
    lang_code: "shn",
  },
  {
    lang_code: "sid",
  },
  {
    lang_code: "sio",
  },
  {
    lang_code: "sit",
  },
  {
    lang_code: "sla",
  },
  {
    lang_code: "sma",
  },
  {
    lang_code: "smi",
  },
  {
    lang_code: "smj",
  },
  {
    lang_code: "smn",
  },
  {
    lang_code: "sms",
  },
  {
    lang_code: "snk",
    countries: ["MLI", "SEN"],
  },
  {
    lang_code: "sog",
  },
  {
    lang_code: "son",
  },
  {
    lang_code: "srn",
  },
  {
    lang_code: "srr",
    countries: ["SEN"],
  },
  {
    lang_code: "ssa",
  },
  {
    lang_code: "suk",
  },
  {
    lang_code: "sus",
  },
  {
    lang_code: "sux",
  },
  {
    lang_code: "syc",
  },
  {
    lang_code: "syr",
  },
  {
    lang_code: "tai",
  },
  {
    lang_code: "tem",
  },
  {
    lang_code: "ter",
  },
  {
    lang_code: "tet",
    countries: ["TLS"],
  },
  {
    lang_code: "tig",
  },
  {
    lang_code: "tiv",
  },
  {
    lang_code: "tkl",
  },
  {
    lang_code: "tlh",
  },
  {
    lang_code: "tli",
  },
  {
    lang_code: "tmh",
  },
  {
    lang_code: "tog",
  },
  {
    lang_code: "tpi",
    countries: ["PNG"],
  },
  {
    lang_code: "tsi",
  },
  {
    lang_code: "tum",
  },
  {
    lang_code: "tup",
  },
  {
    lang_code: "tut",
  },
  {
    lang_code: "tvl",
  },
  {
    lang_code: "tyv",
  },
  {
    lang_code: "udm",
  },
  {
    lang_code: "uga",
  },
  {
    lang_code: "umb",
    countries: ["AGO"],
  },
  {
    lang_code: "und",
  },
  {
    lang_code: "vai",
  },
  {
    lang_code: "vot",
  },
  {
    lang_code: "wak",
  },
  {
    lang_code: "wal",
  },
  {
    lang_code: "war",
  },
  {
    lang_code: "was",
  },
  {
    lang_code: "wen",
  },
  {
    lang_code: "xal",
  },
  {
    lang_code: "yao",
  },
  {
    lang_code: "yap",
  },
  {
    lang_code: "ypk",
  },
  {
    lang_code: "zap",
  },
  {
    lang_code: "zbl",
  },
  {
    lang_code: "zen",
  },
  {
    lang_code: "zgh",
  },
  {
    lang_code: "znd",
  },
  {
    lang_code: "zun",
  },
  {
    lang_code: "zxx",
  },
  {
    lang_code: "zza",
  },
];

// all languages globally defined
export const LANGUAGES = [
  {
    language_code: "abk",
    language_name: "Abkhazian",
  },
  {
    language_code: "ace",
    language_name: "Achinese",
  },
  {
    language_code: "ach",
    language_name: "Acoli",
  },
  {
    language_code: "ada",
    language_name: "Adangme",
  },
  {
    language_code: "ady",
    language_name: "Adyghe",
  },
  {
    language_code: "aar",
    language_name: "Afar",
  },
  {
    language_code: "afh",
    language_name: "Afrihili",
  },
  {
    language_code: "afr",
    language_name: "Afrikaans",
  },
  {
    language_code: "afa",
    language_name: "Afro-Asiatic (Other)",
  },
  {
    language_code: "aka",
    language_name: "Akan",
  },
  {
    language_code: "akk",
    language_name: "Akkadian",
  },
  {
    language_code: "sqi",
    language_name: "Albanian",
  },
  {
    language_code: "ale",
    language_name: "Aleut",
  },
  {
    language_code: "alg",
    language_name: "Algonquian languages",
  },
  {
    language_code: "tut",
    language_name: "Altaic languages",
  },
  {
    language_code: "alz",
    language_name: "Alur",
  },
  {
    language_code: "ase",
    language_name: "American Sign Language",
  },
  {
    language_code: "amh",
    language_name: "Amharic",
  },
  {
    language_code: "hbo",
    language_name: "Ancient Hebrew",
  },
  {
    language_code: "anp",
    language_name: "Angika",
  },
  {
    language_code: "apa",
    language_name: "Apache languages",
  },
  {
    language_code: "ara",
    language_name: "Arabic",
  },
  {
    language_code: "arc",
    language_name: "Aramaic",
  },
  {
    language_code: "arp",
    language_name: "Arapaho",
  },
  {
    language_code: "arn",
    language_name: "Araucanian",
  },
  {
    language_code: "arw",
    language_name: "Arawak",
  },
  {
    language_code: "hye",
    language_name: "Armenian",
  },
  {
    language_code: "art",
    language_name: "Artificial(Other)",
  },
  {
    language_code: "asm",
    language_name: "Assamese",
  },
  {
    language_code: "aii",
    language_name: "Assyrian Neo-Aramaic",
  },
  {
    language_code: "ast",
    language_name: "Asturian",
  },
  {
    language_code: "ath",
    language_name: "Athapascan languages",
  },
  {
    language_code: "map",
    language_name: "Austronesian(Other)",
  },
  {
    language_code: "ava",
    language_name: "Avaric",
  },
  {
    language_code: "ave",
    language_name: "Avestan",
  },
  {
    language_code: "awa",
    language_name: "Awadhi",
  },
  {
    language_code: "aym",
    language_name: "Aymara",
  },
  {
    language_code: "aze",
    language_name: "Azerbaijani",
  },
  {
    language_code: "bba",
    language_name: "Baatonum",
  },
  {
    language_code: "vjk",
    language_name: "Bajjika",
  },
  {
    language_code: "ban",
    language_name: "Balinese",
  },
  {
    language_code: "bat",
    language_name: "Baltic languages",
  },
  {
    language_code: "bal",
    language_name: "Baluchi",
  },
  {
    language_code: "bam",
    language_name: "Bambara / Bamanakan",
  },
  {
    language_code: "bai",
    language_name: "Bamilekelanguages",
  },
  {
    language_code: "bad",
    language_name: "Banda",
  },
  {
    language_code: "bnt",
    language_name: "Bantu(Other)",
  },
  {
    language_code: "bfa",
    language_name: "Bari",
  },
  {
    language_code: "bas",
    language_name: "Basa",
  },
  {
    language_code: "bak",
    language_name: "Bashkir",
  },
  {
    language_code: "eus",
    language_name: "Basque",
  },
  {
    language_code: "bej",
    language_name: "Beja",
  },
  {
    language_code: "bel",
    language_name: "Belarusian",
  },
  {
    language_code: "bem",
    language_name: "Bemba",
  },
  {
    language_code: "ben",
    language_name: "Bengali",
  },
  {
    language_code: "ber",
    language_name: "Berber (Other)",
  },
  {
    language_code: "bho",
    language_name: "Bhojpuri",
  },
  {
    language_code: "bik",
    language_name: "Bikol",
  },
  {
    language_code: "bin",
    language_name: "Bini",
  },
  {
    language_code: "bis",
    language_name: "Bislama",
  },
  {
    language_code: "gax",
    language_name: "Borana",
  },
  {
    language_code: "bos",
    language_name: "Bosnian",
  },
  {
    language_code: ".br",
    language_name: "Brahui",
  },
  {
    language_code: "bra",
    language_name: "Braj",
  },
  {
    language_code: "bre",
    language_name: "Breton",
  },
  {
    language_code: "bug",
    language_name: "Buginese",
  },
  {
    language_code: "tkb",
    language_name: "Buksa Tharu",
  },
  {
    language_code: "bul",
    language_name: "Bulgarian",
  },
  {
    language_code: "bns",
    language_name: "Bundeli",
  },
  {
    language_code: "bua",
    language_name: "Buriat",
  },
  {
    language_code: "mya",
    language_name: "Burmese",
  },
  {
    language_code: "cad",
    language_name: "Caddo",
  },
  {
    language_code: "yue",
    language_name: "Cantonese (Yue Chinese)",
  },
  {
    language_code: "car",
    language_name: "Carib",
  },
  {
    language_code: "cat",
    language_name: "Catalan",
  },
  {
    language_code: "cau",
    language_name: "Caucasian(Other)",
  },
  {
    language_code: "ceb",
    language_name: "Cebuano (Bisayan)",
  },
  {
    language_code: "cel",
    language_name: "Celtic(Other)",
  },
  {
    language_code: "cai",
    language_name: "Central American Indian (Other)",
  },
  {
    language_code: "chg",
    language_name: "Chagatai",
  },
  {
    language_code: ".cm",
    language_name: "Cham",
  },
  {
    language_code: "cha",
    language_name: "Chamorro",
  },
  {
    language_code: "che",
    language_name: "Chechen",
  },
  {
    language_code: "chr",
    language_name: "Cherokee",
  },
  {
    language_code: "chy",
    language_name: "Cheyenne",
  },
  {
    language_code: "chb",
    language_name: "Chibcha",
  },
  {
    language_code: ".ci",
    language_name: "Chin",
  },
  {
    language_code: "zho",
    language_name: "Chinese",
  },
  {
    language_code: "chn",
    language_name: "Chinookjargon",
  },
  {
    language_code: "the",
    language_name: "Chitwania Tharu",
  },
  {
    language_code: "cho",
    language_name: "Choctaw",
  },
  {
    language_code: "cjk",
    language_name: "Chokwe",
  },
  {
    language_code: "chu",
    language_name: "Church Slavonic",
  },
  {
    language_code: "chk",
    language_name: "Chuukese",
  },
  {
    language_code: "chv",
    language_name: "Chuvash",
  },
  {
    language_code: ".im",
    language_name: "Cook Island Maori",
  },
  {
    language_code: "cop",
    language_name: "Coptic",
  },
  {
    language_code: "cor",
    language_name: "Cornish",
  },
  {
    language_code: "cos",
    language_name: "Corsican",
  },
  {
    language_code: "cre",
    language_name: "Cree",
  },
  {
    language_code: "mus",
    language_name: "Creek",
  },
  {
    language_code: "cpe",
    language_name: "Creoles & Pidgins (English-based Other)",
  },
  {
    language_code: "cpf",
    language_name: "Creoles & Pidgins (French-based Other)",
  },
  {
    language_code: "crp",
    language_name: "Creoles & Pidgins (Other)",
  },
  {
    language_code: "cpp",
    language_name: "Creoles & Pidgins (Portuguese-based Other)",
  },
  {
    language_code: "crh",
    language_name: "Crimean Tatar",
  },
  {
    language_code: "hrv",
    language_name: "Croatian",
  },
  {
    language_code: "cus",
    language_name: "Cushitic(Other)",
  },
  {
    language_code: "ces",
    language_name: "Czech",
  },
  {
    language_code: "dag",
    language_name: "Dagbani",
  },
  {
    language_code: "dak",
    language_name: "Dakota",
  },
  {
    language_code: ".dm",
    language_name: "Damara",
  },
  {
    language_code: "thl",
    language_name: "Dangaura Tharu",
  },
  {
    language_code: "dan",
    language_name: "Danish",
  },
  {
    language_code: "prs",
    language_name: "Dari",
  },
  {
    language_code: ".dy",
    language_name: "Dayak Ngaju",
  },
  {
    language_code: "del",
    language_name: "Delaware",
  },
  {
    language_code: "luo",
    language_name: "Dholuo (Lwo)",
  },
  {
    language_code: ".dd",
    language_name: "Dida",
  },
  {
    language_code: "din",
    language_name: "Dinka",
  },
  {
    language_code: "div",
    language_name: "Divehi / Maldivian",
  },
  {
    language_code: "doi",
    language_name: "Dogri",
  },
  {
    language_code: "dra",
    language_name: "Dravidian(Other)",
  },
  {
    language_code: "dua",
    language_name: "Duala",
  },
  {
    language_code: "nld",
    language_name: "Dutch",
  },
  {
    language_code: "dum",
    language_name: "Dutch Middle (ca.1050-1350)",
  },
  {
    language_code: "dyu",
    language_name: "Dyula / Dioula / Jula",
  },
  {
    language_code: "dzo",
    language_name: "Dzongkha",
  },
  {
    language_code: "efi",
    language_name: "Efik",
  },
  {
    language_code: "egy",
    language_name: "Egyptian(Ancient)",
  },
  {
    language_code: "eka",
    language_name: "Ekajuk",
  },
  {
    language_code: "elx",
    language_name: "Elamite",
  },
  {
    language_code: "eng",
    language_name: "English",
  },
  {
    language_code: "enm",
    language_name: "English Middle (ca.1100-1500)",
  },
  {
    language_code: "ang",
    language_name: "English Old (ca.450-1100)",
  },
  {
    language_code: "esk",
    language_name: "Eskimo(Other)",
  },
  {
    language_code: "epo",
    language_name: "Esperanto",
  },
  {
    language_code: "est",
    language_name: "Estonian",
  },
  {
    language_code: "ewe",
    language_name: "Ewe",
  },
  {
    language_code: "ewo",
    language_name: "Ewondo",
  },
  {
    language_code: "fng",
    language_name: "Fanagalo",
  },
  {
    language_code: "fan",
    language_name: "Fang",
  },
  {
    language_code: "fat",
    language_name: "Fanti (Fante)",
  },
  {
    language_code: "fao",
    language_name: "Faroese",
  },
  {
    language_code: "fij",
    language_name: "Fijian",
  },
  {
    language_code: "fin",
    language_name: "Finnish",
  },
  {
    language_code: "fiu",
    language_name: "Finno-Ugrian(Other)",
  },
  {
    language_code: ".fl",
    language_name: "Flemish",
  },
  {
    language_code: "fon",
    language_name: "Fon",
  },
  {
    language_code: ".fw",
    language_name: "Formosan",
  },
  {
    language_code: "fra",
    language_name: "French",
  },
  {
    language_code: "frm",
    language_name: "French Middle (ca.1400-1600)",
  },
  {
    language_code: "fro",
    language_name: "French Old (842-ca.1400)",
  },
  {
    language_code: "fry",
    language_name: "Frisian",
  },
  {
    language_code: "fur",
    language_name: "Friulian",
  },
  {
    language_code: "ful",
    language_name: "Fulah",
  },
  {
    language_code: ".fu",
    language_name: "Fulani",
  },
  {
    language_code: "gaa",
    language_name: "Ga",
  },
  {
    language_code: "gae",
    language_name: "Gaelic",
  },
  {
    language_code: "glg",
    language_name: "Galician",
  },
  {
    language_code: "gay",
    language_name: "Gayo",
  },
  {
    language_code: "gez",
    language_name: "Geez",
  },
  {
    language_code: "kat",
    language_name: "Georgian",
  },
  {
    language_code: "deu",
    language_name: "German",
  },
  {
    language_code: "gmh",
    language_name: "German Middle High (ca.1050-1500)",
  },
  {
    language_code: "goh",
    language_name: "German Old High (ca.750-1050)",
  },
  {
    language_code: "gem",
    language_name: "Germanic(Other)",
  },
  {
    language_code: "gil",
    language_name: "Gilbertese",
  },
  {
    language_code: "gon",
    language_name: "Gondi",
  },
  {
    language_code: "got",
    language_name: "Gothic",
  },
  {
    language_code: "grb",
    language_name: "Grebo",
  },
  {
    language_code: "ell",
    language_name: "Greek",
  },
  {
    language_code: "grc",
    language_name: "Greek (Ancient)",
  },
  {
    language_code: "kal",
    language_name: "Greenlandic / Kalaallisut",
  },
  {
    language_code: "grn",
    language_name: "Guarani",
  },
  {
    language_code: "guj",
    language_name: "Gujarati",
  },
  {
    language_code: "hai",
    language_name: "Haida",
  },
  {
    language_code: "hat",
    language_name: "Haitian-Creole",
  },
  {
    language_code: "hau",
    language_name: "Hausa",
  },
  {
    language_code: "haw",
    language_name: "Hawaiian",
  },
  {
    language_code: "heb",
    language_name: "Hebrew",
  },
  {
    language_code: "her",
    language_name: "Herero",
  },
  {
    language_code: "hil",
    language_name: "Hiligaynon",
  },
  {
    language_code: "him",
    language_name: "Himachali",
  },
  {
    language_code: "hin",
    language_name: "Hindi",
  },
  {
    language_code: "hmo",
    language_name: "HiriMotu",
  },
  {
    language_code: "hmn",
    language_name: "Hmong",
  },
  {
    language_code: "hun",
    language_name: "Hungarian",
  },
  {
    language_code: "hup",
    language_name: "Hupa",
  },
  {
    language_code: ".ik",
    language_name: "I-kiribati",
  },
  {
    language_code: "iba",
    language_name: "Iban",
  },
  {
    language_code: "isl",
    language_name: "Icelandic",
  },
  {
    language_code: "ibo",
    language_name: "Igbo",
  },
  {
    language_code: "ijo",
    language_name: "Ijo",
  },
  {
    language_code: "ikx",
    language_name: "Ik / Icetot / Ngulak",
  },
  {
    language_code: "ilo",
    language_name: "Iloko",
  },
  {
    language_code: "inc",
    language_name: "Indic(Other)",
  },
  {
    language_code: "ine",
    language_name: "Indo-European(Other)",
  },
  {
    language_code: "ind",
    language_name: "Indonesian",
  },
  {
    language_code: "inh",
    language_name: "Ingush",
  },
  {
    language_code: "ina",
    language_name: "Interlingua",
  },
  {
    language_code: "ile",
    language_name: "Interlingue",
  },
  {
    language_code: "iku",
    language_name: "Inuktitut",
  },
  {
    language_code: "ipk",
    language_name: "Inupiak",
  },
  {
    language_code: "ira",
    language_name: "Iranian(Other)",
  },
  {
    language_code: "gle",
    language_name: "Irish",
  },
  {
    language_code: "mga",
    language_name: "Irish Middle (900-1200)",
  },
  {
    language_code: "sga",
    language_name: "Irish Old (to 900)",
  },
  {
    language_code: "iro",
    language_name: "Iroquoian Languages",
  },
  {
    language_code: "ita",
    language_name: "Italian",
  },
  {
    language_code: "ium",
    language_name: "Iu Mien",
  },
  {
    language_code: "ijc",
    language_name: "Izon",
  },
  {
    language_code: "jpn",
    language_name: "Japanese",
  },
  {
    language_code: "jav",
    language_name: "Javanese",
  },
  {
    language_code: "jrb",
    language_name: "Judeo-Arabic",
  },
  {
    language_code: "jpr",
    language_name: "Judeo-Persian",
  },
  {
    language_code: "quc",
    language_name: "K'iche'",
  },
  {
    language_code: "kab",
    language_name: "Kabyle",
  },
  {
    language_code: "kac",
    language_name: "Kachin",
  },
  {
    language_code: ".kd",
    language_name: "Kadazan",
  },
  {
    language_code: "ijn",
    language_name: "Kalabari",
  },
  {
    language_code: "kln",
    language_name: "Kalenjin ",
  },
  {
    language_code: "xal",
    language_name: "Kalmyk-Oirat",
  },
  {
    language_code: "kam",
    language_name: "Kamba",
  },
  {
    language_code: "kan",
    language_name: "Kannada",
  },
  {
    language_code: "kau",
    language_name: "Kanuri",
  },
  {
    language_code: "kaa",
    language_name: "Kara-Kalpak",
  },
  {
    language_code: "kdj",
    language_name: "Karamojong / Ngakarimojong",
  },
  {
    language_code: "kar",
    language_name: "Karen",
  },
  {
    language_code: "kas",
    language_name: "Kashmiri",
  },
  {
    language_code: "csb",
    language_name: "Kashubian",
  },
  {
    language_code: "tkt",
    language_name: "Kathoriya Tharu",
  },
  {
    language_code: "kaw",
    language_name: "Kawi",
  },
  {
    language_code: ".ky",
    language_name: "Kayah",
  },
  {
    language_code: "kaz",
    language_name: "Kazakh",
  },
  {
    language_code: "kha",
    language_name: "Khasi",
  },
  {
    language_code: "khm",
    language_name: "Khmer (Central)",
  },
  {
    language_code: "khi",
    language_name: "Khoisan(Other)",
  },
  {
    language_code: "jdt",
    language_name: "Khorasani Turkic",
  },
  {
    language_code: "kho",
    language_name: "Khotanese",
  },
  {
    language_code: "cgg",
    language_name: "Kiga / Ruchiga",
  },
  {
    language_code: "kik",
    language_name: "Kikuyu",
  },
  {
    language_code: "kin",
    language_name: "Kinyarwanda",
  },
  {
    language_code: "kir",
    language_name: "Kirghiz",
  },
  {
    language_code: "run",
    language_name: "Kirundi",
  },
  {
    language_code: "guz",
    language_name: "Kisii",
  },
  {
    language_code: ".kl",
    language_name: "Klingon",
  },
  {
    language_code: "thq",
    language_name: "Kochila Tharu",
  },
  {
    language_code: "kom",
    language_name: "Komi",
  },
  {
    language_code: "kon",
    language_name: "Kongo",
  },
  {
    language_code: "kok",
    language_name: "Konkani",
  },
  {
    language_code: "kor",
    language_name: "Korean",
  },
  {
    language_code: "kos",
    language_name: "Kosraean",
  },
  {
    language_code: "kga",
    language_name: "Koyaka / Koyaga",
  },
  {
    language_code: "kpe",
    language_name: "Kpelle",
  },
  {
    language_code: "kri",
    language_name: "Krio",
  },
  {
    language_code: "kro",
    language_name: "Kru",
  },
  {
    language_code: "kua",
    language_name: "Kuanyama",
  },
  {
    language_code: "kyw",
    language_name: "Kudmali",
  },
  {
    language_code: "kum",
    language_name: "Kumyk",
  },
  {
    language_code: "kun",
    language_name: "Kunama",
  },
  {
    language_code: "kpz",
    language_name: "Kupsabiny / Sebei",
  },
  {
    language_code: "kur",
    language_name: "Kurdish",
  },
  {
    language_code: "kru",
    language_name: "Kurukh",
  },
  {
    language_code: "kus",
    language_name: "Kusaie",
  },
  {
    language_code: "kfr",
    language_name: "Kutchi",
  },
  {
    language_code: "kut",
    language_name: "Kutenai",
  },
  {
    language_code: "lad",
    language_name: "Ladino",
  },
  {
    language_code: "lah",
    language_name: "Lahnda",
  },
  {
    language_code: "lam",
    language_name: "Lamba",
  },
  {
    language_code: "lao",
    language_name: "Lao",
  },
  {
    language_code: "lat",
    language_name: "Latin",
  },
  {
    language_code: "lav",
    language_name: "Latvian",
  },
  {
    language_code: "lez",
    language_name: "Lezghian",
  },
  {
    language_code: "lin",
    language_name: "Lingala",
  },
  {
    language_code: "lit",
    language_name: "Lithuanian",
  },
  {
    language_code: "lom",
    language_name: "Loma",
  },
  {
    language_code: "loz",
    language_name: "Lozi",
  },
  {
    language_code: "lub",
    language_name: "Luba-Katanga",
  },
  {
    language_code: "lug",
    language_name: "Luganda",
  },
  {
    language_code: "lgg",
    language_name: "Lugbara",
  },
  {
    language_code: "luy",
    language_name: "Luhya",
  },
  {
    language_code: "lui",
    language_name: "Luiseno",
  },
  {
    language_code: "lun",
    language_name: "Lunda",
  },
  {
    language_code: "lrc",
    language_name: "Luri",
  },
  {
    language_code: "lus",
    language_name: "Lushai (Mizo)",
  },
  {
    language_code: "ltz",
    language_name: "Luxembourgish",
  },
  {
    language_code: "mhi",
    language_name: "Ma'di",
  },
  {
    language_code: "ymm",
    language_name: "Maay Maay",
  },
  {
    language_code: "mkd",
    language_name: "Macedonian",
  },
  {
    language_code: "mad",
    language_name: "Madurese",
  },
  {
    language_code: "mag",
    language_name: "Magahi",
  },
  {
    language_code: "mdh",
    language_name: "Maguindanaon",
  },
  {
    language_code: "mai",
    language_name: "Maithili",
  },
  {
    language_code: "mak",
    language_name: "Makasar",
  },
  {
    language_code: "mlg",
    language_name: "Malagasy",
  },
  {
    language_code: "msa",
    language_name: "Malay",
  },
  {
    language_code: "mal",
    language_name: "Malayalam",
  },
  {
    language_code: "mlt",
    language_name: "Maltese",
  },
  {
    language_code: "mam",
    language_name: "Mam",
  },
  {
    language_code: "xmm",
    language_name: "Manado Malay",
  },
  {
    language_code: "cmn",
    language_name: "Mandarin Chinese",
  },
  {
    language_code: "man",
    language_name: "Mandingo / Maninka",
  },
  {
    language_code: "mni",
    language_name: "Manipuri",
  },
  {
    language_code: "mno",
    language_name: "Manobolanguages",
  },
  {
    language_code: "max",
    language_name: "Manx",
  },
  {
    language_code: "mri",
    language_name: "Maori",
  },
  {
    language_code: "mrw",
    language_name: "Maranao",
  },
  {
    language_code: "mar",
    language_name: "Marathi",
  },
  {
    language_code: "chm",
    language_name: "Mari",
  },
  {
    language_code: "mah",
    language_name: "Marshallese",
  },
  {
    language_code: "mwr",
    language_name: "Marwari",
  },
  {
    language_code: "mas",
    language_name: "Masai",
  },
  {
    language_code: "myn",
    language_name: "Mayanlanguages",
  },
  {
    language_code: ".mb",
    language_name: "Mbundu",
  },
  {
    language_code: "men",
    language_name: "Mende",
  },
  {
    language_code: ".me",
    language_name: "Meo",
  },
  {
    language_code: "mer",
    language_name: "Meru",
  },
  {
    language_code: ".mi",
    language_name: "Miao",
  },
  {
    language_code: "mic",
    language_name: "Micmac",
  },
  {
    language_code: "min",
    language_name: "Minangkabau",
  },
  {
    language_code: "mks",
    language_name: "Mixteco",
  },
  {
    language_code: "moh",
    language_name: "Mohawk",
  },
  {
    language_code: "mol",
    language_name: "Moldavian",
  },
  {
    language_code: "mkh",
    language_name: "Mon-Khmer(Other)",
  },
  {
    language_code: "lol",
    language_name: "Mongo",
  },
  {
    language_code: "mon",
    language_name: "Mongolian",
  },
  {
    language_code: ".mk",
    language_name: "Mordvinian",
  },
  {
    language_code: "mfe",
    language_name: "Morisyen / Mauritian Creole",
  },
  {
    language_code: "mos",
    language_name: "Mossi",
  },
  {
    language_code: "mun",
    language_name: "Mundalanguages",
  },
  {
    language_code: ".mu",
    language_name: "Muong",
  },
  {
    language_code: "sck",
    language_name: "Nagpuri",
  },
  {
    language_code: "nah",
    language_name: "Nahuatl (Aztec)",
  },
  {
    language_code: "nau",
    language_name: "Nauru",
  },
  {
    language_code: "nav",
    language_name: "Navajo",
  },
  {
    language_code: "nde",
    language_name: "NdebeleNorth",
  },
  {
    language_code: "nbl",
    language_name: "NdebeleSouth",
  },
  {
    language_code: "ndo",
    language_name: "Ndongo",
  },
  {
    language_code: "nep",
    language_name: "Nepali",
  },
  {
    language_code: "new",
    language_name: "Newari",
  },
  {
    language_code: "nic",
    language_name: "Niger-Kordofanian(Other)",
  },
  {
    language_code: ".ni",
    language_name: "Nigerian",
  },
  {
    language_code: "pcm",
    language_name: "Nigerian Pidgin",
  },
  {
    language_code: "ssa",
    language_name: "Nilo-Saharan(Other)",
  },
  {
    language_code: "niu",
    language_name: "Niuean",
  },
  {
    language_code: "nyn",
    language_name: "Nkore / Runyankole",
  },
  {
    language_code: "non",
    language_name: "Norse",
  },
  {
    language_code: "nai",
    language_name: "NorthAmericanIndian(Other)",
  },
  {
    language_code: "nor",
    language_name: "Norwegian",
  },
  {
    language_code: "nob",
    language_name: "Norwegian (Bokmal)",
  },
  {
    language_code: "nno",
    language_name: "Norwegian (Nynorsk)",
  },
  {
    language_code: "nub",
    language_name: "Nubianlanguages",
  },
  {
    language_code: "nus",
    language_name: "Nuer",
  },
  {
    language_code: "nym",
    language_name: "Nyamwezi",
  },
  {
    language_code: "nya",
    language_name: "Nyanja",
  },
  {
    language_code: "nyo",
    language_name: "Nyoro",
  },
  {
    language_code: "nzi",
    language_name: "Nzima",
  },
  {
    language_code: "oci",
    language_name: "Occitan / Langued'Oc",
  },
  {
    language_code: "oji",
    language_name: "Ojibwe",
  },
  {
    language_code: "ori",
    language_name: "Oriya",
  },
  {
    language_code: "orm",
    language_name: "Oromo",
  },
  {
    language_code: "osa",
    language_name: "Osage",
  },
  {
    language_code: "oss",
    language_name: "Ossetic",
  },
  {
    language_code: "oto",
    language_name: "Otomianlanguages",
  },
  {
    language_code: "ota",
    language_name: "Ottoman",
  },
  {
    language_code: ".ov",
    language_name: "Ovambo",
  },
  {
    language_code: "pal",
    language_name: "Pahlavi",
  },
  {
    language_code: "pau",
    language_name: "Palauan",
  },
  {
    language_code: "pli",
    language_name: "Pali",
  },
  {
    language_code: "pam",
    language_name: "Pampanga",
  },
  {
    language_code: "tdb",
    language_name: "Panchpargania",
  },
  {
    language_code: "pag",
    language_name: "Pangasinan",
  },
  {
    language_code: "pap",
    language_name: "Papiamento",
  },
  {
    language_code: "paa",
    language_name: "Papuan-Australian(Other)",
  },
  {
    language_code: "pus",
    language_name: "Pashto (Pushto)",
  },
  {
    language_code: "pdc",
    language_name: "Pennsylvania German",
  },
  {
    language_code: "fas",
    language_name: "Persian (Farsi)",
  },
  {
    language_code: "peo",
    language_name: "PersianOld(ca600-400B.C.)",
  },
  {
    language_code: "phn",
    language_name: "Phoenician",
  },
  {
    language_code: "pon",
    language_name: "Pohnpeian",
  },
  {
    language_code: "pol",
    language_name: "Polish",
  },
  {
    language_code: "por",
    language_name: "Portuguese",
  },
  {
    language_code: "pra",
    language_name: "Prakritlanguages",
  },
  {
    language_code: "pro",
    language_name: "ProvencalOld(to1500)",
  },
  {
    language_code: "pan",
    language_name: "Punjabi",
  },
  {
    language_code: "pko",
    language_name: "Pökoot / Pokot",
  },
  {
    language_code: "kek",
    language_name: "Q'eqchi' / Kekchi",
  },
  {
    language_code: "qxq",
    language_name: "Qashqai",
  },
  {
    language_code: "que",
    language_name: "Quechua",
  },
  {
    language_code: "raj",
    language_name: "Rajasthani",
  },
  {
    language_code: "rki",
    language_name: "Rakhine",
  },
  {
    language_code: "thr",
    language_name: "Rana Tharu",
  },
  {
    language_code: "rar",
    language_name: "Rarotongan",
  },
  {
    language_code: "roh",
    language_name: "Rhaeto-Rom (Romansch)",
  },
  {
    language_code: "rhg",
    language_name: "Rohingya",
  },
  {
    language_code: "roa",
    language_name: "Romance(Other)",
  },
  {
    language_code: "rom",
    language_name: "Romani / Romany",
  },
  {
    language_code: "ron",
    language_name: "Romanian",
  },
  {
    language_code: "rus",
    language_name: "Russian",
  },
  {
    language_code: "sal",
    language_name: "Salishanlanguages",
  },
  {
    language_code: "sam",
    language_name: "SamaritanAramaic",
  },
  {
    language_code: "smi",
    language_name: "Samilanguages",
  },
  {
    language_code: "smo",
    language_name: "Samoan",
  },
  {
    language_code: "sad",
    language_name: "Sandawe",
  },
  {
    language_code: "sag",
    language_name: "Sango",
  },
  {
    language_code: "san",
    language_name: "Sanskrit",
  },
  {
    language_code: "sat",
    language_name: "Santali",
  },
  {
    language_code: "srd",
    language_name: "Sardinian",
  },
  {
    language_code: "sco",
    language_name: "Scots",
  },
  {
    language_code: "gla",
    language_name: "Scottish Gaelic",
  },
  {
    language_code: "sel",
    language_name: "Selkup",
  },
  {
    language_code: "sem",
    language_name: "Semitic(Other)",
  },
  {
    language_code: "srp",
    language_name: "Serbian",
  },
  {
    language_code: "srp",
    language_name: "Serbian",
  },
  {
    language_code: "hbs",
    language_name: "Serbo-Croat",
  },
  {
    language_code: "srr",
    language_name: "Serer",
  },
  {
    language_code: "shn",
    language_name: "Shan",
  },
  {
    language_code: "sna",
    language_name: "Shona",
  },
  {
    language_code: "ssw",
    language_name: "SiSwati (Swazi)",
  },
  {
    language_code: "ssw",
    language_name: "SiSwati (Swazi)",
  },
  {
    language_code: "sty",
    language_name: "Siberian Tatar",
  },
  {
    language_code: "scn",
    language_name: "Sicilian",
  },
  {
    language_code: "sid",
    language_name: "Sidamo",
  },
  {
    language_code: ".sg",
    language_name: "Sign Language",
  },
  {
    language_code: "bla",
    language_name: "Siksika",
  },
  {
    language_code: ".se",
    language_name: "Simple English",
  },
  {
    language_code: "snd",
    language_name: "Sindhi",
  },
  {
    language_code: "sin",
    language_name: "Sinhala (Sinhalese)",
  },
  {
    language_code: "sit",
    language_name: "Sino-Tibetan",
  },
  {
    language_code: "sio",
    language_name: "Siouanlanguages",
  },
  {
    language_code: "sla",
    language_name: "Slavic(Other)",
  },
  {
    language_code: "slk",
    language_name: "Slovak",
  },
  {
    language_code: "slv",
    language_name: "Slovenian",
  },
  {
    language_code: "xog",
    language_name: "Soga / Lusoga",
  },
  {
    language_code: "sog",
    language_name: "Sogdian",
  },
  {
    language_code: "som",
    language_name: "Somali",
  },
  {
    language_code: ".sx",
    language_name: "Somba",
  },
  {
    language_code: "son",
    language_name: "Songhai",
  },
  {
    language_code: "soi",
    language_name: "Sonha",
  },
  {
    language_code: "snk",
    language_name: "Soninke",
  },
  {
    language_code: "wen",
    language_name: "Sorbian",
  },
  {
    language_code: "nso",
    language_name: "SothoNorthern",
  },
  {
    language_code: "sai",
    language_name: "SouthAmericanIndian(Other)",
  },
  {
    language_code: "sot",
    language_name: "Southern Sotho / Sesotho",
  },
  {
    language_code: "esl",
    language_name: "Spanish",
  },
  {
    language_code: "suk",
    language_name: "Sukuma",
  },
  {
    language_code: "sux",
    language_name: "Sumerian",
  },
  {
    language_code: "sun",
    language_name: "Sundanese",
  },
  {
    language_code: "sus",
    language_name: "Susu",
  },
  {
    language_code: "swa",
    language_name: "Swahili",
  },
  {
    language_code: "swe",
    language_name: "Swedish",
  },
  {
    language_code: "syl",
    language_name: "Sylheti",
  },
  {
    language_code: "syr",
    language_name: "Syriac",
  },
  {
    language_code: "tgl",
    language_name: "Tagalog",
  },
  {
    language_code: "tah",
    language_name: "Tahitian",
  },
  {
    language_code: "tgk",
    language_name: "Tajik",
  },
  {
    language_code: ".tm",
    language_name: "Tamang",
  },
  {
    language_code: "tmh",
    language_name: "Tamashek",
  },
  {
    language_code: "tam",
    language_name: "Tamil",
  },
  {
    language_code: "tat",
    language_name: "Tatar",
  },
  {
    language_code: "tks",
    language_name: "Tati / Takestani",
  },
  {
    language_code: "tsg",
    language_name: "Tausug",
  },
  {
    language_code: "tel",
    language_name: "Telugu",
  },
  {
    language_code: "ter",
    language_name: "Tereno",
  },
  {
    language_code: "teo",
    language_name: "Teso",
  },
  {
    language_code: "tet",
    language_name: "Tetum",
  },
  {
    language_code: "tha",
    language_name: "Thai",
  },
  {
    language_code: "bod",
    language_name: "Tibetan",
  },
  {
    language_code: "tig",
    language_name: "Tigre",
  },
  {
    language_code: "tir",
    language_name: "Tigrinya",
  },
  {
    language_code: "tem",
    language_name: "Timne",
  },
  {
    language_code: "tiv",
    language_name: "Tiv",
  },
  {
    language_code: "tiw",
    language_name: "Tiwi",
  },
  {
    language_code: "tli",
    language_name: "Tlingit",
  },
  {
    language_code: "tpi",
    language_name: "Tok Pisin",
  },
  {
    language_code: "ton",
    language_name: "Tonga (Nya)",
  },
  {
    language_code: "ton",
    language_name: "Tonga (Nya)",
  },
  {
    language_code: "ttj",
    language_name: "Tooro / Rutooro",
  },
  {
    language_code: "srk",
    language_name: "Toraja-Saʼdan",
  },
  {
    language_code: "tru",
    language_name: "Truk",
  },
  {
    language_code: "tsi",
    language_name: "Tsimshian",
  },
  {
    language_code: "tso",
    language_name: "Tsonga",
  },
  {
    language_code: "tsn",
    language_name: "Tswana",
  },
  {
    language_code: "tum",
    language_name: "Tumbuka",
  },
  {
    language_code: "tuv",
    language_name: "Turkana",
  },
  {
    language_code: "tur",
    language_name: "Turkish",
  },
  {
    language_code: "tuk",
    language_name: "Turkmen",
  },
  {
    language_code: ".tv",
    language_name: "Tuvaluan",
  },
  {
    language_code: "tyv",
    language_name: "Tuvinian",
  },
  {
    language_code: "twi",
    language_name: "Twi",
  },
  {
    language_code: "uga",
    language_name: "Ugaritic",
  },
  {
    language_code: "uig",
    language_name: "Uighur",
  },
  {
    language_code: "ukr",
    language_name: "Ukrainian",
  },
  {
    language_code: ".yq",
    language_name: "Ulithian",
  },
  {
    language_code: "umb",
    language_name: "Umbundu",
  },
  {
    language_code: "und",
    language_name: "Undetermined",
  },
  {
    language_code: "urd",
    language_name: "Urdu",
  },
  {
    language_code: "uzb",
    language_name: "Uzbek",
  },
  {
    language_code: "vai",
    language_name: "Vai",
  },
  {
    language_code: ".va",
    language_name: "Valencia",
  },
  {
    language_code: "vas",
    language_name: "Vasavi",
  },
  {
    language_code: "ven",
    language_name: "Venda",
  },
  {
    language_code: "vie",
    language_name: "Vietnamese",
  },
  {
    language_code: "vol",
    language_name: "Volapük",
  },
  {
    language_code: "vot",
    language_name: "Votic",
  },
  {
    language_code: "wak",
    language_name: "Wakashanlanguages",
  },
  {
    language_code: "wal",
    language_name: "Walamo",
  },
  {
    language_code: "war",
    language_name: "Waray",
  },
  {
    language_code: "was",
    language_name: "Washo",
  },
  {
    language_code: "hus",
    language_name: "Wasteko (Huasteco)",
  },
  {
    language_code: "cym",
    language_name: "Welsh",
  },
  {
    language_code: ".ys",
    language_name: "Woleaian",
  },
  {
    language_code: "wol",
    language_name: "Wolof",
  },
  {
    language_code: "xho",
    language_name: "Xhosa",
  },
  {
    language_code: "sah",
    language_name: "Yakut",
  },
  {
    language_code: "yao",
    language_name: "Yao",
  },
  {
    language_code: "yap",
    language_name: "Yapese",
  },
  {
    language_code: ".yi",
    language_name: "Yi",
  },
  {
    language_code: "yid",
    language_name: "Yiddish",
  },
  {
    language_code: "yor",
    language_name: "Yoruba",
  },
  {
    language_code: "zap",
    language_name: "Zapotec",
  },
  {
    language_code: "zen",
    language_name: "Zenaga",
  },
  {
    language_code: "zha",
    language_name: "Zhuang (Chuang)",
  },
  {
    language_code: "zul",
    language_name: "Zulu",
  },
  {
    language_code: "zun",
    language_name: "Zuni",
  },
  {
    language_code: "tly",
    language_name: "talysh",
  },
];

// ProZ.com account types
export const ACCOUNT_TYPES: { [key: number]: string } = {
  1: "Translation agency/company",
  2: "Freelancer (translator and/or interpreter)",
  3: "Freelancer and outsourcer",
  4: "", // "None of the above"
  5: "Student",
  6: "End customer",
};

export const DAYS_OF_WEEK: string[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export interface Feedback {
  entity_feedback_id: string;
  feedbackee_id: string;
  feedbacker_id: string;
  feedbacker_id_guessed: string; // Assuming "y" or "n"
  feedbacker_corp_id: string;
  business_id: string | null; // Can be null or a string
  business_id_by_eid: string | null; // Can be null or a string
  feedbacker_ip: string;
  wwa: string; // Assuming "yes" or "no"
  comment: string;
  reply: string;
  time_entered: string; // Date string format, e.g., "2010-07-27 17:07:56"
  time_updated: string; // Date string format, e.g., "2010-07-27 17:07:56"
  updated_by: string;
  fb_type: string; // e.g., "public"
  fb_from: string; // e.g., "outsourcer"
  visible: string; // Assuming "y" or "n"
  vet: string; // Assuming "ok", "not ok", etc.
  vet_comment: string;
  vet_time: string; // Date string format, e.g., "2010-07-27 17:08:31"
  vetted_by: string | null; // Can be a string or null
  pfe_need_id: string;
  connect_project: string; // Assuming "y" or "n"
  inv_id: string;
  feedbacker_email: string;
  feedbacker_name: string;
  feedbacker_company: string;
  is_qualified: string; // Assuming "y" or "n"
  time_is_qualified_updated: string; // Date string format
  vet_reply: string | null; // Can be null or a string like "no"
  vet_reply_time: string; // Date string format or "0000-00-00 00:00:00"
  vet_reply_comment: string | null; // Can be null or a string
  vet_reply_no_reason: string | null; // Can be null or a string
  vetted_reply_by: string | null; // Can be null or a string
  has_associated_rating_record: string; // Assuming "y" or "n"
  date_of_last_collaboration: string; // Date string format or "0000-00-00 00:00:00"
}

export const BUSINESS_PLAN: Plan[] = [
  {
    name: "STANDARD",
    yearlyPrice: "$480/year",
    monthlyPrice: "$50/month",
    description:
      "Good for small business with 1 person managing all of the tasks of an LSP (recruitment and project management)",
    features: [
      "Business Standard Member badge (encourages trust)",
      "Standard placement in the ProZ directory of translation companies",
      "Recruit freelancers from ProZ pre-screened Pools",
      "Send batch messages from the Directory of translators and interpreters",
    ],
  },
  {
    name: "PLUS",
    yearlyPrice: "$720/year",
    monthlyPrice: "$75/month",
    description:
      "Good for small business with 1-3 people managing all of the tasks of an LSP (recruitment and project management)",
    popular: true,
    features: [
      "Everything in the Business Standard package, plus:",
      "Business Plus Member badge",
      "Full access to freelancers in ProZ Pools, with full names and positive/negative feedback",
      "Higher limit on emails to candidates in Lists",
    ],
  },
  {
    name: "ENTERPRISE",
    yearlyPrice: "$1200/year",
    monthlyPrice: "$125/month",
    description:
      "Medium and large business with more than 3 people managing recruitment and project management",
    features: [
      "Enterprise Member badge",
      "Highest-level placement in the ProZ directory of translation companies",
      "Unlimited job postings",
    ],
  },
];

export const CORP_SERVICES: { id: number; name: string }[] = [
  { id: 1, name: "Artwork/Illustrations" },
  { id: 2, name: "Content development" },
  { id: 3, name: "Content management" },
  { id: 4, name: "Voiceover/dubbing" },
  { id: 5, name: "Document translation" },
  { id: 6, name: "Interpreting" },
  { id: 7, name: "Desktop publishing (DTP)" },
  { id: 9, name: "Internationalization" },
  { id: 47, name: "Editing" },
  { id: 11, name: "Localization" },
  { id: 14, name: "Translation" },
  { id: 17, name: "Multimedia localization" },
  { id: 20, name: "QA Testing" },
  { id: 23, name: "Training" },
  { id: 26, name: "Engineering" },
  { id: 29, name: "Glossary/Terminology" },
  { id: 32, name: "Graphics/Screen capture" },
  { id: 35, name: "Consulting" },
  { id: 38, name: "Staffing/Outsourcing" },
  { id: 41, name: "Tools/Technology systems" },
  { id: 110, name: "Search Engine Optimization" },
  { id: 50, name: "Proofreading" },
  { id: 137, name: "Summarizing" },
  { id: 134, name: "Typesetting" },
  { id: 131, name: "Language training" },
  { id: 128, name: "Telephone interpreting" },
  { id: 125, name: "Local guides" },
  { id: 122, name: "Project Management" },
  { id: 116, name: "Subtitling" },
  { id: 113, name: "Linguistic Testing" },
  { id: 107, name: "Transcriptions" },
  { id: 104, name: "Historical data digitalization" },
  { id: 119, name: "Copywriting" },
  { id: 101, name: "Technical writing" },
  { id: 140, name: "Clinical Trials" },
  { id: 142, name: "Scriptwriting" },
  { id: 143, name: "Software design" },
  { id: 145, name: "Graphics/3D animation" },
  { id: 151, name: "Transcreation" },
  { id: 152, name: "Sworn/Certified Translation" },
  { id: 153, name: "Terminology management" },
];

export const BUSINESS_PLAN_CATEGORIES: BusinessPlanCategory[] = [
  {
    name: "Production: ProZ BuZ Suite",
    features: [
      {
        name: "Recruitment (ProZ Recruit)",
        standard: "YES (1 user and 2 lists)",
        plus: "YES (2 users and 4 lists)",
        enterprise: "YES (4 users and unlimited lists. $10/month for additional users)",
      },
      {
        name: "Live database (ProZ Recruit)",
        standard: true,
        plus: true,
        enterprise: true,
      },
      {
        name: "Translation management (1 Protemos license)",
        standard: true,
        plus: true,
        enterprise: true,
      },
      {
        name: "Translation tool (Cafe Trans)",
        standard: true,
        plus: true,
        enterprise: true,
      },
      {
        name: "Freelancer payment (ProZ*Pay)",
        standard: true,
        plus: true,
        enterprise: true,
      },
    ],
  },
  {
    name: "Marketing",
    features: [
      {
        name: "ProZ.com Business Page",
        standard: true,
        plus: true,
        enterprise: true,
      },
      {
        name: "Verified Business badge (after verification process)",
        standard: true,
        plus: true,
        enterprise: true,
      },
      {
        name: "Higher-level placement in the ProZ.com search results",
        standard: true,
        plus: true,
        enterprise: true,
      },
      {
        name: "Testimonials posts visible in the company's page",
        standard: true,
        plus: true,
        enterprise: true,
      },
      {
        name: "Non-payment Blue Board entry notification before posting",
        standard: true,
        plus: true,
        enterprise: true,
      },
      {
        name: "Free Wix website",
        standard: true,
        plus: true,
        enterprise: true,
      },
      {
        name: "Unlimited posts in ProZ.com news feed",
        standard: true,
        plus: true,
        enterprise: true,
      },
      {
        name: "Networking events/opportunities",
        standard: true,
        plus: true,
        enterprise: true,
      },
    ],
  },
  {
    name: "Recruitment",
    features: [
      {
        name: "Job posts",
        standard: "8/month",
        plus: "16/month",
        enterprise: "Unlimited",
      },
      {
        name: "Individual messages to members, CPN, Pools and non-members",
        standard: "Unlimited",
        plus: "Unlimited",
        enterprise: "Unlimited",
      },
      {
        name: "Bulk messages to ProZ.com members, CPN, and Pools",
        standard: false,
        plus: "Unlimited",
        enterprise: "Unlimited",
      },
      {
        name: "Bulk messages to non-members",
        standard: false,
        plus: false,
        enterprise: "Unlimited",
      },
      {
        name: "Pool of vetted professionals built by ProZ.com",
        standard: false,
        plus: false,
        enterprise: true,
      },
    ],
  },
  {
    name: "Training",
    features: [
      {
        name: "ProZ.com hosted webinars and training events (up to 4 per year)",
        standard: false,
        plus: "4 per year",
        enterprise: "Unlimited",
      },
    ],
  },
  {
    name: "Managed Services requests",
    features: [
      {
        name: "Recruitment and project management done by ProZ.com staff",
        standard: "4 requests/year",
        plus: "12 requests/year",
        enterprise: "24 requests/year",
      },
    ],
  },
  {
    name: "Assigned Business Success Manager",
    features: [
      {
        name: "Support and help with taking advantage of all ProZ.com has to offer",
        standard: "1-time orientation session",
        plus: true,
        enterprise: true,
      },
    ],
  },
];

export const PROFESSIONAL_PLAN_CATEGORIES: ProPlanCategory[] = [
  {
    name: "Client Contact and Marketing Your Services",
    features: [
      {
        name: "Priority rank in the directories",
        free: "unavailable",
        standard: "available",
        plus: "available",
        premium: "available",
        detailUrl: "https://docker-syr10.proz.com/membership",
      },
      {
        name: "Priority positioning for remote (API) searches",
        free: "unavailable",
        standard: "unavailable",
        plus: "available",
        premium: "available",
      },
      {
        name: "Access to member-only jobs",
        free: "unavailable",
        standard: "available",
        plus: "available",
        premium: "available",
      },
      {
        name: "Quotes seen first by job posters",
        free: "unavailable",
        standard: "available",
        plus: "available",
        premium: "available",
        detailUrl: "https://docker-syr10.proz.com/membership",
      },
      {
        name: "Paid jobs and projects managed by ProZ.com team",
        free: "unavailable",
        standard: "available",
        plus: "available",
        premium: "available",
      },
      {
        name: "Priority routing for calls and managed work",
        free: "unavailable",
        standard: "available",
        plus: "available",
        premium: "available",
      },
      {
        name: "Professional membership to TM-Town",
        free: "unavailable",
        standard: "unavailable",
        plus: "available",
        premium: "available",
      },
      {
        name: "ProZ.com's high rank in Google and search engines",
        free: "unavailable",
        standard: "available",
        plus: "available",
        premium: "available",
        detailUrl: "https://docker-syr10.proz.com/membership",
      },
      {
        name: "Track visitors to your profile",
        free: "unavailable",
        standard: "available",
        plus: "available",
        premium: "available",
      },
      {
        name: "In-depth tracking and analytics of visitors",
        free: "unavailable",
        standard: "available",
        plus: "available",
        premium: "available",
        detailUrl: "https://docker-syr10.proz.com/membership",
      },
      {
        name: "Unlimited localization of profile taglines",
        free: "unavailable",
        standard: "available",
        plus: "available",
        premium: "available",
        detailUrl: "https://docker-syr10.proz.com/membership",
      },
    ],
  },
  {
    name: "Networking, Collaboration, and Help",
    features: [
      {
        name: "Terms research and assistance",
        free: "partial",
        standard: "unavailable",
        plus: "available",
        premium: "available",
      },
      {
        name: "Identity and security profile fields (SecurePRO™ program)",
        free: "partial",
        standard: "partial",
        plus: "available",
        premium: "available",
      },
    ],
  },
  {
    name: "Learning Opportunities",
    features: [
      {
        name: "Terms research and assistance",
        free: "partial",
        standard: "unavailable",
        plus: "available",
        premium: "available",
        detailUrl: "https://docker-syr10.proz.com/membership",
        value: 520,
      },
      {
        name: "Identity and security profile fields (SecurePRO™ program)",
        free: "partial",
        standard: "partial",
        plus: "available",
        premium: "available",
        value: 520,
      },
    ],
  },
  {
    name: "Tools of the Trade",
    features: [
      {
        name: "Terms research and assistance",
        free: "partial",
        standard: "unavailable",
        plus: "available",
        premium: "available",
        value: 520,
      },
      {
        name: "Identity and security profile fields (SecurePRO™ program)",
        free: "partial",
        standard: "partial",
        plus: "available",
        premium: "available",
        value: 520,
      },
    ],
  },
  {
    name: "Free Resources and Other Discounts",
    features: [
      {
        name: "Terms research and assistance",
        free: "partial",
        standard: "unavailable",
        plus: "available",
        premium: "available",
        value: 520,
      },
      {
        name: "Identity and security profile fields (SecurePRO™ program)",
        free: "partial",
        standard: "partial",
        plus: "available",
        premium: "available",
        detailUrl: "https://docker-syr10.proz.com/membership",
        value: 520,
      },
    ],
  },
];
export const TESTIMONIALS: Testimonial[] = [
  // Business Testimonials
  {
    id: 1,
    name: "Alessandra Campana",
    message:
      "The process is very smooth and straightforward. If an issue arises, the ProZ team always responds and resolves everything quickly.",
    type: "business",
    language: "English",
    country: "United States",
    image_url:
      "https://cfcdn.proz.com/file_resources/other/e5471d5e64beb07a1ed4b997f8162775_alessandra.jpg",
  },
  {
    id: 2,
    name: "Favio Estevez",
    message:
      "The payment funding flexibility and the Customer Service from the ProZ*Pay team are outstanding.",
    type: "business",
    language: "English",
    country: "United States",
    image_url:
      "https://cfcdn.proz.com/file_resources/other/c628538ccbd5007b360d4f0e5d70980b_favio.png",
  },
  {
    id: 3,
    name: "Thomas Chahweta",
    message: "I've been using ProZ*Pay for some time now, and it's been a lifesaver.",
    type: "business",
    language: "English",
    country: "Zimbabwe",
    image_url:
      "https://cfcdn.proz.com/file_resources/other/a4486f69ecfa08a9f9e4f930be4316fb_thomas.jpg",
  },
  {
    id: 4,
    name: "Sophie Dubois",
    message: "Un excellent moyen de rencontrer de nouveaux clients.",
    type: "business",
    language: "French",
    country: "France",
  },
  {
    id: 5,
    name: "Yuki Tanaka",
    message: "ビジネスのネットワーキングに最適なプラットフォームです。",
    type: "business",
    language: "Japanese",
    country: "Japan",
  },
  {
    id: 6,
    name: "Chen Wei",
    message: "这个平台帮助我找到了很多新的客户。",
    type: "business",
    language: "Chinese",
    country: "China",
  },
  {
    id: 7,
    name: "Olga Petrova",
    message: "Эта платформа значительно улучшила мой бизнес.",
    type: "business",
    language: "Russian",
    country: "Russia",
  },
  {
    id: 8,
    name: "Ahmed Khan",
    message: "یہ پلیٹ فارم میرے کاروبار کو بڑھانے میں مددگار ثابت ہوا ہے۔",
    type: "business",
    language: "Urdu",
    country: "Pakistan",
  },
  {
    id: 9,
    name: "Paolo Rossi",
    message: "Ottimo strumento per ampliare la rete aziendale.",
    type: "business",
    language: "Italian",
    country: "Italy",
  },
  {
    id: 10,
    name: "Fatima Zahra",
    message: "منصة رائعة لتوسيع العلاقات التجارية.",
    type: "business",
    language: "Arabic",
    country: "Morocco",
  },

  // Community Testimonials
  {
    id: 11,
    name: "Carlos Mendez",
    message: "Una comunidad que me ha apoyado mucho.",
    type: "community",
    language: "Spanish",
    country: "Mexico",
  },
  {
    id: 12,
    name: "Jane Smith",
    message: "Amazing support from the community.",
    type: "community",
    language: "English",
    country: "Canada",
  },
  {
    id: 13,
    name: "Anya Kovalenko",
    message: "Сообщество очень поддерживает и помогает.",
    type: "community",
    language: "Russian",
    country: "Ukraine",
  },
  {
    id: 14,
    name: "Li Na",
    message: "这个社区给了我很多帮助。",
    type: "community",
    language: "Chinese",
    country: "China",
  },
  {
    id: 15,
    name: "Emilia Novak",
    message: "Fantastyczna wspólnota, zawsze gotowa pomóc.",
    type: "community",
    language: "Polish",
    country: "Poland",
  },
  {
    id: 16,
    name: "Sara Müller",
    message: "Die Gemeinschaft hat mich sehr unterstützt.",
    type: "community",
    language: "German",
    country: "Switzerland",
  },
  {
    id: 17,
    name: "Ali Hassan",
    message: "مجتمع رائع وداعم.",
    type: "community",
    language: "Arabic",
    country: "Egypt",
  },
  {
    id: 18,
    name: "Lucia Conti",
    message: "Una comunità che mi ha sempre aiutato.",
    type: "community",
    language: "Italian",
    country: "Italy",
  },
  {
    id: 19,
    name: "Hiroshi Yamamoto",
    message: "コミュニティは非常にサポート的です。",
    type: "community",
    language: "Japanese",
    country: "Japan",
  },
  {
    id: 20,
    name: "Nguyen Thi",
    message: "Cộng đồng đã hỗ trợ tôi rất nhiều.",
    type: "community",
    language: "Vietnamese",
    country: "Vietnam",
  },

  // CPN Testimonials
  {
    id: 21,
    name: "Fernando Alvarez",
    message: "El programa CPN ha sido una bendición para mi carrera.",
    type: "CPN",
    language: "Spanish",
    country: "Argentina",
  },
  {
    id: 22,
    name: "Linda Johnson",
    message: "CPN program significantly boosted my professional growth.",
    type: "CPN",
    language: "English",
    country: "USA",
  },
  {
    id: 23,
    name: "Mikhail Petrov",
    message: "Программа CPN помогла мне в профессиональном развитии.",
    type: "CPN",
    language: "Russian",
    country: "Russia",
  },
  {
    id: 24,
    name: "Lena Schmidt",
    message: "Das CPN-Programm hat meine Karriere vorangebracht.",
    type: "CPN",
    language: "German",
    country: "Germany",
  },
  {
    id: 25,
    name: "Isabelle Moreau",
    message: "Le programme CPN a considérablement amélioré ma carrière.",
    type: "CPN",
    language: "French",
    country: "France",
  },
  {
    id: 26,
    name: "Takeshi Nakamura",
    message: "CPNプログラムは私のキャリアに大いに役立ちました。",
    type: "CPN",
    language: "Japanese",
    country: "Japan",
  },
  {
    id: 27,
    name: "Adel Fahmy",
    message: "برنامج CPN كان له أثر إيجابي على مسيرتي المهنية.",
    type: "CPN",
    language: "Arabic",
    country: "Egypt",
  },
  {
    id: 28,
    name: "Viktor Balazs",
    message: "A CPN program jelentős lendületet adott a karrieremnek.",
    type: "CPN",
    language: "Hungarian",
    country: "Hungary",
  },
  {
    id: 29,
    name: "Carla Silva",
    message: "O programa CPN impulsionou a minha carreira.",
    type: "CPN",
    language: "Portuguese",
    country: "Brazil",
  },
  {
    id: 30,
    name: "Nur Aisha",
    message: "Program CPN memberikan dorongan besar pada karier saya.",
    type: "CPN",
    language: "Indonesian",
    country: "Indonesia",
  },

  // Invoicing Testimonials
  {
    id: 31,
    name: "Juan Carlos",
    message: "El sistema de facturación es muy fácil de usar.",
    type: "invoicing",
    language: "Spanish",
    country: "Spain",
  },
  {
    id: 32,
    name: "Susan Lee",
    message: "Invoicing system is very user-friendly.",
    type: "invoicing",
    language: "English",
    country: "Australia",
  },
  {
    id: 33,
    name: "Sergey Ivanov",
    message: "Система выставления счетов очень удобна.",
    type: "invoicing",
    language: "Russian",
    country: "Russia",
  },
  {
    id: 34,
    name: "Anna Johansson",
    message: "Fakturering systemet är mycket användarvänligt.",
    type: "invoicing",
    language: "Swedish",
    country: "Sweden",
  },
  {
    id: 35,
    name: "Miguel Angel",
    message: "El sistema de facturación es muy intuitivo.",
    type: "invoicing",
    language: "Spanish",
    country: "Mexico",
  },
  {
    id: 36,
    name: "Mina Hassan",
    message: "نظام الفوترة سهل الاستخدام للغاية.",
    type: "invoicing",
    language: "Arabic",
    country: "UAE",
  },
  {
    id: 37,
    name: "Jin-Soo Kim",
    message: "청구 시스템이 매우 사용하기 쉽습니다.",
    type: "invoicing",
    language: "Korean",
    country: "South Korea",
  },
  {
    id: 38,
    name: "Tomás Ribeiro",
    message: "O sistema de faturamento é muito fácil de usar.",
    type: "invoicing",
    language: "Portuguese",
    country: "Portugal",
  },
  {
    id: 39,
    name: "Yasmin Khan",
    message: "بلنگ کا نظام بہت آسان ہے۔",
    type: "invoicing",
    language: "Urdu",
    country: "Pakistan",
  },
  {
    id: 40,
    name: "Francesca Russo",
    message: "Il sistema di fatturazione è molto intuitivo.",
    type: "invoicing",
    language: "Italian",
    country: "Italy",
  },

  // Moderator Program Testimonials
  {
    id: 41,
    name: "Lucia Perez",
    message: "Ser moderador ha sido una experiencia muy enriquecedora.",
    type: "moderator Program",
    language: "Spanish",
    country: "Argentina",
  },
  {
    id: 42,
    name: "Emily Brown",
    message: "Being a moderator has been a very rewarding experience.",
    type: "moderator Program",
    language: "English",
    country: "UK",
  },
  {
    id: 43,
    name: "Anastasia Nikolaeva",
    message: "Быть модератором — это очень ценный опыт.",
    type: "moderator Program",
    language: "Russian",
    country: "Russia",
  },
  {
    id: 44,
    name: "Nina Sokolova",
    message: "Moderatorenrolle ist eine sehr bereichernde Erfahrung.",
    type: "moderator Program",
    language: "German",
    country: "Germany",
  },
  {
    id: 45,
    name: "Claire Martin",
    message: "Être modérateur a été une expérience très enrichissante.",
    type: "moderator Program",
    language: "French",
    country: "France",
  },
  {
    id: 46,
    name: "Satoshi Yamamoto",
    message: "モデレーターであることは非常にやりがいのある経験です。",
    type: "moderator Program",
    language: "Japanese",
    country: "Japan",
  },
  {
    id: 47,
    name: "Fatma Al-Mansour",
    message: "كوني مشرفة كان تجربة مجزية للغاية.",
    type: "moderator Program",
    language: "Arabic",
    country: "Saudi Arabia",
  },
  {
    id: 48,
    name: "Gabriel Alves",
    message: "Ser moderador foi uma experiência muito gratificante.",
    type: "moderator Program",
    language: "Portuguese",
    country: "Brazil",
  },
  {
    id: 49,
    name: "Katarzyna Nowak",
    message: "Bycie moderatorem to bardzo satysfakcjonujące doświadczenie.",
    type: "moderator Program",
    language: "Polish",
    country: "Poland",
  },
  {
    id: 50,
    name: "Mariam Fahmy",
    message: "L'expérience en tant que modérateur a été très enrichissante.",
    type: "moderator Program",
    language: "French",
    country: "Tunisia",
  },

  // Events Testimonials
  {
    id: 51,
    name: "Carlos López",
    message: "Los eventos son bien organizados y muy informativos.",
    type: "events",
    language: "Spanish",
    country: "Mexico",
  },
  {
    id: 52,
    name: "Emma Wilson",
    message: "Events are well-organized and highly informative.",
    type: "events",
    language: "English",
    country: "USA",
  },
  {
    id: 53,
    name: "Yulia Ivanova",
    message: "Мероприятия очень хорошо организованы и информативны.",
    type: "events",
    language: "Russian",
    country: "Russia",
  },
  {
    id: 54,
    name: "Anna Bauer",
    message: "Veranstaltungen sind gut organisiert und sehr informativ.",
    type: "events",
    language: "German",
    country: "Austria",
  },
  {
    id: 55,
    name: "Nicolas Dupont",
    message: "Les événements sont bien organisés et très instructifs.",
    type: "events",
    language: "French",
    country: "France",
  },
  {
    id: 56,
    name: "Aiko Suzuki",
    message: "イベントは非常によく組織されており、非常に有益です。",
    type: "events",
    language: "Japanese",
    country: "Japan",
  },
  {
    id: 57,
    name: "Khalid Al-Haddad",
    message: "الأحداث منظمة بشكل جيد وغنية بالمعلومات.",
    type: "events",
    language: "Arabic",
    country: "Jordan",
  },
  {
    id: 58,
    name: "Fernanda Santos",
    message: "Os eventos são bem organizados e muito informativos.",
    type: "events",
    language: "Portuguese",
    country: "Brazil",
  },
  {
    id: 59,
    name: "Stefan Kovac",
    message: "Događaji su dobro organizirani i vrlo informativni.",
    type: "events",
    language: "Croatian",
    country: "Croatia",
  },
  {
    id: 60,
    name: "Thabo Mbeki",
    message: "Iziganeko zihlelwe kakuhle kwaye zinolwazi oluninzi.",
    type: "events",
    language: "Xhosa",
    country: "South Africa",
  },

  // Training Testimonials
  {
    id: 61,
    name: "Jose Martinez",
    message: "Los entrenamientos son muy completos y útiles.",
    type: "training",
    language: "Spanish",
    country: "Spain",
  },
  {
    id: 62,
    name: "Linda Green",
    message: "Training sessions are comprehensive and helpful.",
    type: "training",
    language: "English",
    country: "Australia",
  },
  {
    id: 63,
    name: "Vladimir Kuznetsov",
    message: "Обучение очень полное и полезное.",
    type: "training",
    language: "Russian",
    country: "Russia",
  },
  {
    id: 64,
    name: "Elena Pappas",
    message: "Οι εκπαιδεύσεις είναι πολύ ολοκληρωμένες και χρήσιμες.",
    type: "training",
    language: "Greek",
    country: "Greece",
  },
  {
    id: 65,
    name: "Pedro Alvarado",
    message: "Los entrenamientos son muy detallados y prácticos.",
    type: "training",
    language: "Spanish",
    country: "Chile",
  },
  {
    id: 66,
    name: "Fatima Boukhris",
    message: "التدريبات شاملة للغاية ومفيدة.",
    type: "training",
    language: "Arabic",
    country: "Morocco",
  },
  {
    id: 67,
    name: "Chen Li",
    message: "培训内容非常全面且实用。",
    type: "training",
    language: "Chinese",
    country: "China",
  },
  {
    id: 68,
    name: "Samantha Johansson",
    message: "Utbildningarna är mycket omfattande och användbara.",
    type: "training",
    language: "Swedish",
    country: "Sweden",
  },
  {
    id: 69,
    name: "Carlos Ferreira",
    message: "Os treinamentos são muito abrangentes e úteis.",
    type: "training",
    language: "Portuguese",
    country: "Portugal",
  },
  {
    id: 70,
    name: "Amina Bashir",
    message: "ٹریننگ سیشنز بہت جامع اور مددگار ہیں۔",
    type: "training",
    language: "Urdu",
    country: "Pakistan",
  },

  // General Testimonials
  {
    id: 71,
    name: "Isabel Rodriguez",
    message: "Gran plataforma para conectarse con profesionales.",
    type: "general",
    language: "Spanish",
    country: "Argentina",
  },
  {
    id: 72,
    name: "Michael Johnson",
    message: "Great platform to connect with professionals.",
    type: "general",
    language: "English",
    country: "USA",
  },
  {
    id: 73,
    name: "Andrei Popov",
    message: "Отличная платформа для связи с профессионалами.",
    type: "general",
    language: "Russian",
    country: "Russia",
  },
  {
    id: 74,
    name: "Sofia Richter",
    message: "Tolle Plattform, um sich mit Fachleuten zu vernetzen.",
    type: "general",
    language: "German",
    country: "Germany",
  },
  {
    id: 75,
    name: "Marie Lefevre",
    message: "Super plateforme pour se connecter avec des professionnels.",
    type: "general",
    language: "French",
    country: "France",
  },
  {
    id: 76,
    name: "Yasuko Nakamura",
    message: "プロフェッショナルとつながるための素晴らしいプラットフォーム。",
    type: "general",
    language: "Japanese",
    country: "Japan",
  },
  {
    id: 77,
    name: "Amir Hossein",
    message: "پلت فرم عالی برای ارتباط با حرفه ای ها.",
    type: "general",
    language: "Persian",
    country: "Iran",
  },
  {
    id: 78,
    name: "Hassan Yusuf",
    message: "Mjadala bora ya kuungana na wataalamu.",
    type: "general",
    language: "Swahili",
    country: "Kenya",
  },
  {
    id: 79,
    name: "Rosa Santos",
    message: "Ótima plataforma para se conectar com profissionais.",
    type: "general",
    language: "Portuguese",
    country: "Brazil",
  },
  {
    id: 80,
    name: "Tala Al-Najjar",
    message: "منصة رائعة للتواصل مع المحترفين.",
    type: "general",
    language: "Arabic",
    country: "Jordan",
  },

  // Pro bono Testimonials
  {
    id: 90,
    name: "Mary Alice Kukowski - The International Rescue Committee",
    message:
      "The International Rescue Committee (IRC) in Denver, Colorado is endlessly grateful for the work of ProZ Pro Bono. Through the partnership with ProZ.com Pro Bono we have been able to translate over 100 pages of guides, forms, and documents for our clients in over 13 languages. By having resources in their native languages, our clients are empowered to be active participants in their resettlement journey. A big thank you to the team of translators at ProZ Pro Bono who have worked so hard to provide impeccably translated materials for the clients at IRC in Denver.",
    type: "probono",
    language: "English",
    country: "",
  },
  {
    id: 91,
    name: "MHeidi Hirvonen - Give Directly",
    message:
      "The ProZ Pro Bono translation service has helped GiveDirectly build a more inclusive and equitable employee experience by ensuring internal materials are translated accurately and quickly. The quality of ProZ.com's work has been exceptional across every medium – documents, slide decks, survey forms, and videos. And the Pro Bono team is fast! They’ve consistently turned around requests in a matter of days. Moreover, communication and coordination with the team has been easy and seamless. Thank you so much, ProZ Pro Bono1",
    type: "probono",
    language: "English",
    country: "",
  },
  {
    id: 92,
    name: "Vivien Green",
    message:
      "I am at the point of attempting to embark on a career in freelance translation but have yet to take on any paid work. I am keen to find some unpaid apprentice work for an established freelancer or agency before attempting to find paid work as this will give me some experience and increase my confidence.",
    type: "mentorship",
    language: "English",
    country: "",
  },
  {
    id: 93,
    name: "Michele Lemaire",
    message:
      "I need to build my reputation/be able to provide references. To that end, I am ready to take on work for very little pay and/or in exchange for review time of segments of translation of a book that I am working on (for training purpose). My specialty fields are: Medical/pharmaceuticals/social sciences which are parts of my professional background. And literature/cinema which are parts of my favorites for translation purpose.",
    type: "mentorship",
    language: "English",
    country: "",
  },
  {
    id: 94,
    name: "Luisa Cambilargiu",
    message:
      "I am facing an odd situation where I have been working for over 20 years inside a company as a translator, but now I need to start all over again as a freelancer: what I would look for in a mentor is some help in understanding the market, hints on how to best position myself in this highly-competitive environment and, more in general, be a reference point for someone who is just now jumping into this jungle.",
    type: "mentorship",
    language: "English",
    country: "",
  },
];

export const SAMP_RECRUIT_USERS = [
  {
    name: "Brian Njoroge",
    country: "Mumbai, India",
    photo: "next/next_assets/images/staff/brian.png",
  },
  {
    name: "Jared Tabor",
    country: "Nairobi, Kenya",
    photo: "next/next_assets/images/staff/jared.jpg",
  },
  {
    name: "Fawad Aslam",
    country: "Lahore, Pakistan",
    photo: "next/next_assets/images/staff/fawad_aslam.jpg",
  },
  {
    name: "David Lekopien",
    country: "Nairobi, Kenya",
    photo: "next/next_assets/images/staff/david-lekopien.jpeg",
  },
  {
    name: "Andrea Capuselli",
    country: "Kampala, Uganda",
    photo: "next/next_assets/images/staff/andrea.jpg",
  },
  {
    name: "Monica Oliveira",
    country: "Mogadishu, Somalia",
    photo: "next/next_assets/images/staff/monica_new.jpg",
  },
  {
    name: "Janelle Popovici",
    country: "Berlin, Germany",
    photo: "next/next_assets/images/staff/janelle.jpg",
  },
];

export const DEFAULT_USER_INFO_COLS = {
  include_user_pass_table: false,
  fields_user_pass_table: ["username", "password_hint"],

  include_entities_table: true,
  fields_entities_table: [
    "entity_id",
    "registered_date",
    "contact_first",
    "contact_middle",
    "contact_last",
    "contact_address_line1",
    "contact_address_line2",
    "contact_address_line3",
    "contact_address",
    "contact_city",
    "contact_city_code",
    "contact_country",
    "contact_country_code",
    "contact_phone",
    "contact_email",
    "account_type",
    "contact_url",
    "agency_name",
    "paypal_email",
    "contact_email_2",
    "platinum_since",
  ],

  include_entity_about_me_table: false,
  fields_entity_about_me_table: ["lang", "value", "service_id"],

  include_entity_resources_table: false,
  fields_entity_resources_table: [
    "showname",
    "resource_image_url",
    "square_resource_image_url",
    "my_tagline",
    "showname",
    "resource_resume_url",
    "resource_video_url",
    "resource_audio_url",
    "resume_type_desc",
    "my_skills",
    "months_experience",
    "about_me",
    "profile_title",
    "profile_uuid",
    "keywords",
    "meta_description",
  ],
  include_field_of_expertise: false,
  include_language_credentials: false,
  include_rating_data: false,
  include_pro_tag_data: false,
  include_pro_bono_data: false,
  include_membership_data: false,
  include_completeness_data: false,
  include_pools_data: false,
  include_user_services: false,
  include_taglines: false,
  include_preferences: false,
  include_language_pairs: false,
};

export const PROFESSIONAL_MEMBERSHIP_TYPES = [
  "platinum",
  "pro_plus",
  "pro_premium",
  "pro_premium_yearly",
];
export const BUSINESS_MEMBERSHIP_TYPES = ["corporate", "bus_plus", "bus_enterprise"];

export const TAGLINES_SERVICES: Record<string, number> = {
  translating: 1,
  translation: 1,
  interpreting: 2,
  interpretation: 2,
  subtitling: 3,
};
