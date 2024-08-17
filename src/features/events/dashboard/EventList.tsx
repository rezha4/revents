import { AppEvent } from "../../../app/types/event";
import EventListItem from "./EventListItem";

export default function EventList({ events }: { events: AppEvent[] }) {
  return (
    <>
      {events.map((event: AppEvent) => (
        <EventListItem
          key={event.id}
          event={event}
        />
      ))}
    </>
  );
}
