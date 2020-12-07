import React from "react";
import { Segment, Item } from "semantic-ui-react";

const EventDetailedSidebar = ({ event }) => {
	return (
		<>
			<Segment
				textAlign="center"
				style={{ border: "none" }}
				attached="top"
				secondary
				inverted
				color="teal">
				{`${event.attendees.length} People Going`}
			</Segment>
			<Segment attached>
				<Item.Group relaxed divided>
					{event.attendees.map((attendee) => (
						<Item key={attendee.id} style={{ position: "relative" }}>
							<Item.Image size="tiny" src={attendee.photoURL} />
							<Item.Content verticalAlign="middle">
								<Item.Header as="h3">
									<span>{attendee.name}</span>
								</Item.Header>
							</Item.Content>
						</Item>
					))}
				</Item.Group>
			</Segment>
		</>
	);
};

export default EventDetailedSidebar;
