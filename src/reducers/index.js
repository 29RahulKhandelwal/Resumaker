import {combineReducers} from "redux";
import profileReducer from "./profileReducer";
import educationReducer from "./educationReducer";
import workReducer from "./workReducer";
import skillReducer from "./skillReducer";
import projectReducer from "./projectReducer";

const rootReducer=combineReducers({
    profileReducer,
    educationReducer,
    workReducer,
    skillReducer,
    projectReducer
});

export default rootReducer;