import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Menu } from "semantic-ui-react";
const SignedOutMenu = ({ setAuthenticated, authenticated }) => {
	return (
		<>
			<Menu.Item as={NavLink} to="/" exact header>
				<img src="/assets/logo.png" alt="logo" style={{ marginRight: 15 }} />
				Re-vents
			</Menu.Item>

			<Menu.Item as={NavLink} to="/events" name="Events" />
			{authenticated && (
				<Menu.Item as={NavLink} to="/create-event">
					<Button positive inverted content="Create Event" />
				</Menu.Item>
			)}
			<Menu.Item position="right">
				<Button
					basic
					inverted
					content="Login"
					onClick={() => setAuthenticated(true)}
				/>
				<Button
					basic
					inverted
					content="Register"
					style={{ marginLeft: "0.5em" }}
				/>
			</Menu.Item>
		</>
	);
};

export default SignedOutMenu;
