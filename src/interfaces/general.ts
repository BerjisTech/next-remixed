export interface SliderItem {
  first_name: string;
  last_name: string;
  id: number;
  image_url: string;
  image: string;
  imageAlt: string;
}

export interface Slide {
  image: string;
  imageAlt: string;
  first_name: string;
  last_name: string;
  address: string;
  categories: any;
  rate: string;
}

export interface SwiperProps {
  items: SliderItem[];
  onGetRoomClick: (user: any) => void;
  onSlideClicked: (event: { index: number; selected: number; type: string }) => void;
  className?: string;
}

export interface StaffMember {
  id: number;
  name: string;
  title: string;
  url: string;
  active?: boolean;
}

export interface AccordionItem {
  tab: number;
  title: string;
  content: string;
  isOpen: boolean;
}

export interface Service {
  [service_id: number]: string; // Adjust types if necessary
}

export interface Content {
  title: string;
  body: string;
}
