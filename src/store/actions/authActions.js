import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from "./actionTypes";
// import { firestore } from "firebase";

export const signIn = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: LOGIN_SUCCESS });
      })
      .catch(error => {
        dispatch({ type: LOGIN_ERROR, error });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .logout()
      .then(() => {
        dispatch({ type: LOGOUT_SUCCESS });
      });
  };
};

export const signUp = userData => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const fireStore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(userData.email, userData.password)
      .then(response => {
        return fireStore
          .collection("users")
          .doc(response.user.uid)
          .set({
            firstName: userData.firstName,
            lastName: userData.lastName,
            initials: userData.firstName[0] + userData.lastName[0]
          });
      })
      .then(() => {
        dispatch({ type: SIGNUP_SUCCESS });
      })
      .catch(error => {
        dispatch({ type: SIGNUP_ERROR, error });
      });
  };
};
