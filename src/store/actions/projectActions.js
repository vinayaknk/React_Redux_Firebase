import { CREATE_PROJECT, CREATE_PROJECT_ERROR } from "./actionTypes";
// export const createproject = project => {
//   return {
//     type: "ADD_PROJECT",
//     project: project
//   };
// };

export const createProject = (project, userData) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to DB
    const firestore = getFirestore();
    const userData = getState().firebase.profile;
    const userId = getState().firebase.auth.uid;

    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: userData.firstName,
        authorLastName: userData.lastName,
        authorId: userId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: CREATE_PROJECT, project });
      })
      .catch(error => {
        dispatch({ type: CREATE_PROJECT_ERROR, error });
      });
  };
};
