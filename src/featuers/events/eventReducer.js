import { sampleData } from "../../api/sampleData";
import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from "./eventConstants";

const initialState = {
	events: sampleData
};

const eventReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_EVENT:
			return {
				...state,
				events: [...state.events, action.payload]
			};

		case UPDATE_EVENT:
			return {
				...state,
				events: [
					...state.events.filter((event) => event.id !== action.payload.id),
					action.payload
				]
			};

		case DELETE_EVENT:
			return {
				...state,
				events: [...state.events.filter((event) => event.id !== action.payload)]
			};

		default:
			return state;
	}
};

export default eventReducer;
