import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Image, Item, List, Segment } from "semantic-ui-react";
import EventAttendee from "./EventAttendee";

const EventListItem = ({
	event,
	handleDeleteEvent,
	history,
}) => {
	return (
		<Segment.Group>
			<Segment>
				<Item.Group>
					<Item>
						<Item.Image circular size="tiny">
							<Image src={event.hostPhotoURL} alt="user" />
						</Item.Image>
						<Item.Content>
							<Item.Header content={event.title} />
							<Item.Description>Hosted by {event.hostedBy}</Item.Description>
						</Item.Content>
					</Item>
				</Item.Group>
			</Segment>
			<Segment>
				<Icon name="clock" /> {event.date}
				<Icon name="marker" /> {event.venue}
			</Segment>

			<Segment secondary>
				<List horizontal>
					{event.attendees.map((attendee) => (
						<EventAttendee key={attendee.id} attendee={attendee} />
					))}
				</List>
			</Segment>
			<Segment clearing>
				<div> {event.description}</div>
				<Button
					color="red"
					content="Delete"
					floated="right"
					onClick={() => handleDeleteEvent(event)}
				/>
				<Button
					as={Link}
					color="teal"
					content="View"
					floated="right"
					to={`/events/${event.id}`}
				/>
			</Segment>
		</Segment.Group>
	);
};

export default EventListItem;
