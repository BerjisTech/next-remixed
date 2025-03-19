import { CalendarEvent } from "@/constants/calender";
import {
  setCalenderEvents,
  setCalenderSliceBits,
} from "@/lib/store/features/calender/calenderSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { useCallback } from "react";

export function useCalendarHook() {
  const dispatch = useAppDispatch();
  const { currentMonth, events, currentYear, currentMonthName } = useAppSelector(
    (state) => state.calender
  );
  const { user } = useAppSelector((state) => state.profile);

  const getDaysInMonth = (year: number, month: number): Date[] => {
    const date = new Date(year, month, 1);
    const days: Date[] = [];

    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    return days;
  };

  const loadMonth = useCallback((year: number, month: number): Date[] => {
    return generateCalendarGrid(year, month);
  }, []);

  const generateCalendarGrid = useCallback((year: number, month: number): Date[] => {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = new Date(year, month, 1).getDay();
    const leadingEmptyDays = Array(firstDay).fill(null);
    return [...leadingEmptyDays, ...daysInMonth];
  }, []);

  const getEventsForDay = (date: Date): CalendarEvent[] => {
    if (!date) return [];
    return events.filter((event) => isSameDay(new Date(event.date), date));
  };

  const isSameDay = (date1: Date, date2: Date): boolean => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  const isToday = (date: Date): boolean => {
    return isSameDay(date, new Date());
  };

  const isPastDate = (date: Date): boolean => {
    const today = new Date();
    return date < new Date(today.getFullYear(), today.getMonth(), today.getDate());
  };

  const addEvent = (day: Date) => {
    const newEvent: CalendarEvent = {
      entity_calendar_id: Date.now(),
      entity_id: user?.entity_id as number,
      date: day,
      availability: "New Availability",
    };
    dispatch(setCalenderEvents([...events, newEvent]));
  };

  const removeEvent = (eventId: number): void => {
    dispatch(setCalenderEvents(events.filter((event) => event.entity_calendar_id !== eventId)));
  };

  const updateEvent = (updatedEvent: CalendarEvent): void => {
    dispatch(
      setCalenderEvents(
        events.map((event) =>
          event.entity_calendar_id === updatedEvent.entity_calendar_id ? updatedEvent : event
        )
      )
    );
  };

  const previousMonth = () => {
    let newYear = currentYear;
    let newMonth = currentMonth - 1;
    if (newMonth < 0) {
      newMonth = 11;
      newYear--;
    }
    dispatch(setCalenderSliceBits({ bitToSet: "currentMonth", value: newMonth }));
    dispatch(setCalenderSliceBits({ bitToSet: "currentYear", value: newYear }));
    dispatch(
      setCalenderSliceBits({
        bitToSet: "currentMonthName",
        value: new Date(newYear, newMonth).toLocaleString("default", { month: "long" }),
      })
    );
    loadMonth(newYear, newMonth);
  };

  const nextMonth = () => {
    let newYear = currentYear;
    let newMonth = currentMonth + 1;
    if (newMonth > 11) {
      newMonth = 0;
      newYear++;
    }
    dispatch(setCalenderSliceBits({ bitToSet: "currentMonth", value: newMonth }));
    dispatch(setCalenderSliceBits({ bitToSet: "currentYear", value: newYear }));
    dispatch(
      setCalenderSliceBits({
        bitToSet: "currentMonthName",
        value: new Date(newYear, newMonth).toLocaleString("default", { month: "long" }),
      })
    );
    loadMonth(newYear, newMonth);
  };

  return {
    addEvent,
    removeEvent,
    updateEvent,
    isToday,
    getEventsForDay,
    generateCalendarGrid,
    getDaysInMonth,
    loadMonth,
    isPastDate,
    // isLoading,
    previousMonth,
    nextMonth,
  };
}
