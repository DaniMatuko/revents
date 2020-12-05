import EventsDashboard from "./featuers/events/eventsDashboard/EventsDashboard";
import "./layout/styles.css";
import NavBar from "./featuers/navbar/NavBar";
import { Container } from "semantic-ui-react";
import { useState } from "react";
import { Route } from "react-router-dom";
import HomePage from "./featuers/homepage/HomePage";
import EventDetailedPage from "./featuers/events/eventdetailed/EventDetailedPage";
import EventForm from "./featuers/events/eventForm/EventForm";

const App = () => {

	return (
		<>
			<Route path="/" exact component={HomePage} />
			<Route
				path={"/(.+)"}
				render={() => (
					<>
						<NavBar  />
						<Container>
							<Container className="main" />
							<Route path="/events" exact component={EventsDashboard} />
							<Route path="/events/:id" component={EventDetailedPage} />
							<Route path="/create-event" component={EventForm} />
						</Container>
					</>
				)}
			/>
		</>
	);
};

export default App;
