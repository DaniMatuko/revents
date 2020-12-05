import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Menu } from "semantic-ui-react";
import SignedInMenu from "./SignedInMenu";
import SignedOutMenu from "./SignedOutMenu";

const NavBar = () => {
  const [authenticated, setAuthenticated] = useState();
  const history = useHistory();

  const handleSignOut = () => {
    setAuthenticated(false);
    history.push("/");
  };

  return (
    <Menu inverted fixed="top">
      <Container>
        <SignedOutMenu setAuthenticated={setAuthenticated} authenticated={authenticated} />
        {authenticated && <SignedInMenu signOut={handleSignOut} />}
      </Container>
    </Menu>
  );
};

export default NavBar;
