import EventsDashboard from "./featuers/events/eventsDashboard/EventsDashboard";
import "./layout/styles.css";
import NavBar from "./featuers/navbar/NavBar";
import { Container } from "semantic-ui-react";
import { useState } from "react";

const App = () => {
  const [formOpen, setFormOpen] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSelctedEvent = (event) => {
    setSelectedEvent(event);
    setFormOpen(true);
  };


  const handleFormOpen = () => {
    setFormOpen(true);
    setSelectedEvent(null);
  };

  return (
    <div>
      <NavBar setFormOpen={handleFormOpen} />
      <Container>
        <Container className="main" />
        <EventsDashboard
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          selectedEvent={selectedEvent}
          handleSelctedEvent={handleSelctedEvent}
        />
      </Container>
    </div>
  );
};

export default App;
