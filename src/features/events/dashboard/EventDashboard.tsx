import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import EventForm from "../form/EventForm";
import { sampleData } from "../../../app/api/sampleData";
import { useEffect, useState } from "react";
import { AppEvent } from "../../../app/types/event";

export default function EventDashboard({
  formOpen,
  setFormOpen,
  selectEvent,
  selectedEvent,
}: {
  formOpen: boolean;
  setFormOpen: (value: boolean) => void;
  selectEvent: (event: AppEvent | null) => void;
  selectedEvent: AppEvent | null;
}) {
  const [events, setEvents] = useState<AppEvent[]>([]);

  useEffect(() => {
    setEvents(sampleData);
  }, []);

  function addEvent(event: AppEvent) {
    setEvents((prev) => [...prev, event]);
  }

  function updateEvent(updatedEvent: AppEvent) {
    setEvents(
      events.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      )
    );
    selectEvent(null);
    setFormOpen(false);
  }

  function deleteEvent(eventId: string) {
    setEvents(events.filter((event) => event.id !== eventId));
  }

  return (
    <>
      <Grid>
        <Grid.Column width="10">
          <EventList events={events} selectEvent={selectEvent} deleteEvent={deleteEvent} />
        </Grid.Column>
        <Grid.Column width="6">
          {formOpen && (
            <EventForm
              addEvent={addEvent}
              setFormOpen={setFormOpen}
              selectedEvent={selectedEvent}
              key={selectedEvent ? selectedEvent.id : "create"}
              updateEvent={updateEvent}
            />
          )}
        </Grid.Column>
      </Grid>
    </>
  );
}
