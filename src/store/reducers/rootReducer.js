import { combineReducers } from "redux";
import authReducer from "./authReducer";
import projectReducer from "./projectReducer";

//firestore

import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer // sync auth
});

export default rootReducer;
