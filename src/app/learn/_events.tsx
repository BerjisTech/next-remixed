import React from "react";
import EventsCard from "./_eventsCard";
import { Meetup } from "@/interfaces/events";
import { getMeetups } from "@/server/data/events";

interface EventsProps {
  limit: number;
  offset: number;
  direction?: "row" | "column"; // Add direction prop with default value
  card_direcion?: "row" | "col";
  width?: string;
  wrap?: "wrap" | "no-wrap";
  admin?: boolean;
}

const Events: React.FC<EventsProps> = async ({
  limit = 10,
  offset = 0,
  direction = "row",
  card_direcion = "col",
  width = "0",
  wrap = "no-wrap",
  admin = false,
}) => {
  const events = await getMeetups(limit, offset);
  const custom_width = width !== "0" ? width : limit > 3 ? "32%" : `${100 / (limit + 0.2)}%`;

  return (
    <div className={`flex flex-${direction} justify-start items-start w-full gap-6 flex-${wrap}`}>
      {events.map((event: Meetup) => (
        <EventsCard event={event} key={event.id} admin={admin} />
      ))}
    </div>
  );
};

export default Events;
