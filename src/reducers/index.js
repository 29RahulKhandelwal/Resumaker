import {combineReducers} from "redux";
import profileReducer from "./profileReducer";
import educationReducer from "./educationReducer";
import workReducer from "./workReducer";
import skillReducer from "./skillReducer";
import projectReducer from "./projectReducer";
import linkReducer from "./linkReducer";
import progressReducer from "./progressReducer";
import previewReducer from "./previewReducer";

const rootReducer=combineReducers({
    profileReducer,
    educationReducer,
    workReducer,
    skillReducer,
    projectReducer,
    linkReducer,
    progressReducer,
    previewReducer
});

export default rootReducer;