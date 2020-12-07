const INCREMENT_COUNTER = "INCREMENT_COUNTER";
const DECREMENT_COUNTER = "DECREMENT_COUNTER";

const initialState = {
	data: 10,
};

export const increment = () => {
	return {
		type: INCREMENT_COUNTER,
		payload: 10,
	};
};
export const decrement = () => {
	return {
		type: DECREMENT_COUNTER,
		payload: 5,
	};
};

const testReducer = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT_COUNTER: {
			return {
				...state,
				data: state.data + action.payload,
			};
		}
		case DECREMENT_COUNTER: {
			return {
				...state,
				data: state.data - action.payload,
			};
		}
		default:
			return state;
	}
};

export default testReducer;
