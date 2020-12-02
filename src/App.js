import EventsDashboard from "./featuers/events/eventsDashboard/EventsDashboard";
import "./layout/styles.css";
import NavBar from "./featuers/navbar/NavBar";
import { Container } from "semantic-ui-react";

const App = () => {
  return (
    <div>
      <NavBar />
      <Container>
        <Container className="main" />
        <EventsDashboard />
      </Container>
    </div>
  );
};

export default App;
