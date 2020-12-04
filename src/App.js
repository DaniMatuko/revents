import EventsDashboard from "./featuers/events/eventsDashboard/EventsDashboard";
import "./layout/styles.css";
import NavBar from "./featuers/navbar/NavBar";
import { Container } from "semantic-ui-react";
import { useState } from "react";

const App = () => {
  const [formOpen, setFormOpen] = useState();

  return (
    <div>
      <NavBar setFormOpen={setFormOpen} />
      <Container>
        <Container className="main" />
        <EventsDashboard formOpen={formOpen} setFormOpen={setFormOpen} />
      </Container>
    </div>
  );
};

export default App;
