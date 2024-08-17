import { AppEvent } from "../../../app/types/event";
import EventListItem from "./EventListItem";

export default function EventList({
  events,
  selectEvent,
  deleteEvent
}: {
  events: AppEvent[];
  selectEvent: (event: AppEvent) => void;
  deleteEvent: (eventId: string) => void;
}) {
  return (
    <>
      {events.map((event: AppEvent) => (
        <EventListItem
          key={event.id}
          event={event}
          selectEvent={selectEvent}
          deleteEvent={deleteEvent}
        />
      ))}
    </>
  );
}
