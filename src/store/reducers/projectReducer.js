import { CREATE_PROJECT, CREATE_PROJECT_ERROR } from "../actions/actionTypes";

const initialState = {
  projects: [
    { id: "1", title: "help me find peach", content: "something" },
    { id: "2", title: "help me find stars", content: "something" },
    { id: "3", title: "help me find mango", content: "something" }
  ]
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PROJECT:
      console.log("created project ", action.project);
      return state;
    case CREATE_PROJECT_ERROR:
      console.log("create project error ", action.error);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
