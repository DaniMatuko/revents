import React from "react";
import {
  Button,
  Container,
  Header,
  Icon,
  Image,
  Segment,
} from "semantic-ui-react";

const HomePage = ({history}) => {
  return (
    <Segment inverted textAlign="center" className="landingPage">
      <Container>
        <Header inverted as="h1">
          <Image src="/assets/logo.png" />
          Re-vents
        </Header>
        <Button size="huge"  inverted onClick={()=>history.push("/events")}>
          Get Started
          <Icon name="right arrow" inverted />
        </Button>
      </Container>
    </Segment>
  );
};

export default HomePage;
