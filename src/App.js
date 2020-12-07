import EventsDashboard from "./featuers/events/eventsDashboard/EventsDashboard";
import "./layout/styles.css";
import NavBar from "./featuers/navbar/NavBar";
import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";
import HomePage from "./featuers/homepage/HomePage";
import EventDetailedPage from "./featuers/events/eventdetailed/EventDetailedPage";
import EventForm from "./featuers/events/eventForm/EventForm";
import Sandbox from "./featuers/sandbox/Sandbox";

const App = () => {
	return (
		<>
			<Route path="/" exact component={HomePage} />
			<Route
				path={"/(.+)"}
				render={() => (
					<>
						<NavBar />
						<Container>
							<Container className="main" />
							<Route path="/events" exact component={EventsDashboard} />
							<Route path="/sandbox" exact component={Sandbox} />
							<Route path="/events/:id" component={EventDetailedPage} />
							<Route
								path={["/create-event", "/manage/:id"]}
								component={EventForm}
							/>
						</Container>
					</>
				)}
			/>
		</>
	);
};

export default App;
