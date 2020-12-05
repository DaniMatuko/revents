import React from "react";
import EventListItem from "./EventListItem";

const EventList = ({ events, handleSelctedEvent, handleDeleteEvent }) => {
  return (
    <div>
      {events.map((event) => (
        <EventListItem
          key={event.id}
          event={event}
          handleSelctedEvent={handleSelctedEvent}
          handleDeleteEvent={handleDeleteEvent}
        />
      ))}
    </div>
  );
};

export default EventList;
