import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import EventForm from "../eventForm/EventForm";
import EventList from "./EventList";
import { sampleData } from "../../../api/sampleData";

const EventsDashboard = ({
  formOpen,
  setFormOpen,
  handleSelctedEvent,
  selectedEvent,
}) => {
  const [events, setEvent] = useState(sampleData);

  const handleCreateEvent = (event) => {
    setEvent([...events, event]);
  };

  const handleEventUpdate = (updatedEvent) => {
    setEvent(
      events.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      )
    );
    handleSelctedEvent(null);
  };

  const handleDeleteEvent = (deletedEvent) => {
    setEvent(events.filter((event) => event.id !== deletedEvent.id));
  };

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList
          events={events}
          handleSelctedEvent={handleSelctedEvent}
          handleDeleteEvent={handleDeleteEvent}
        />
      </Grid.Column>
      <Grid.Column width={6}>
        {formOpen && (
          <EventForm
            setFormOpen={setFormOpen}
            setEvent={setEvent}
            handleCreateEvent={handleCreateEvent}
            selectedEvent={selectedEvent}
            updateEvent={handleEventUpdate}
            key={selectedEvent ? selectedEvent.id : null}
          />
        )}
      </Grid.Column>
    </Grid>
  );
};

export default EventsDashboard;
