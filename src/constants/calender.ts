export interface CalendarEvent {
  entity_calendar_id: number;
  entity_id: number;
  date: Date;
  availability: string;
}

export interface RenderAvailability {
  title: string;
  icon: React.ReactNode;
  background: string;
}
