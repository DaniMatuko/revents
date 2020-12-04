import React from "react";
import { Form, Button, Segment, Header } from "semantic-ui-react";
const EventForm = ({ setFormOpen }) => {
  return (
    <Segment>
      <Header content="Create Event" />
      <Form>
        <Form.Field>
          <input type="text" placeholder="Event Title" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Category" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Description" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="City" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Venue" />
        </Form.Field>
        <Form.Field>
          <input type="date" />
        </Form.Field>
        <Form.Field>
          <Button type="submit" positive content="Submit" />
          <Button
            type="submit"
            content="Cancel"
            onClick={() => setFormOpen(false)}
          />
        </Form.Field>
      </Form>
    </Segment>
  );
};

export default EventForm;
