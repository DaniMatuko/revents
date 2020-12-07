import eventReducer from "../featuers/events/eventReducer";
import testReducer from "../featuers/sandbox/testReducer";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
	test: testReducer,
	event: eventReducer,
});

export default rootReducer;
