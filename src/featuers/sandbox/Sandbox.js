import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Icon } from "semantic-ui-react";
import { decrement, increment } from "./testReducer";

const Sandbox = () => {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.test.data);

	return (
		<>
			<h1>Sandbox</h1>
			<h2>The Data is: {data}</h2>
			<Button color="green" onClick={() => dispatch(increment())}>
				<Icon name="plus" />
			</Button>
			<Button color="red" onClick={() => dispatch(decrement())}>
				<Icon name="minus" />
			</Button>
		</>
	);
};

export default Sandbox;
