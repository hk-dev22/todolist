import auth from "../../firebase";

// Register user or sign up

export const registerUserStart = () => {
  return {
    type: "REGISTER_USER_START"
  };
};

export const registerUserSuccessful = (user) => {
  return {
    type: "REGISTER_USER_SUCCESSFUL",
    payload: user
  };
};

export const registerUserFailed = (error) => {
  return {
    type: "REGISTER_USER_FAILED",
    payload: error
  };
};

export const registerInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(registerUserStart);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        user.updateProfile({
          email
        });
        dispatch(registerUserSuccessful(user));
      })
      .catch((error) => dispatch(registerUserFailed(error.message)));
  };
};

// Login

export const loginUserStart = () => {
  return {
    type: "LOGIN_USER_START"
  };
};

export const loginUserSuccessful = (user) => {
  return {
    type: "LOGIN_USER_SUCCESSFUL",
    payload: user
  };
};

export const loginUserFailed = (error) => {
  return {
    type: "LOGIN_USER_FAILED",
    payload: error
  };
};

export const loginInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(loginUserStart);
    auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(loginUserSuccessful(user));
      })
      .catch((error) => dispatch(loginUserFailed(error.message)));
  };
};

//Logout
export const logoutUserStart = () => {
  return {
    type: "LOGOUT_USER_START"
  };
};

export const logoutUserSuccessful = (user) => {
  return {
    type: "LOGOUT_USER_SUCCESSFUL",
    payload: user
  };
};

export const logoutUserFailed = (error) => {
  return {
    type: "LOGOUT_USER_FAILED",
    payload: error
  };
};

export const logoutInitiate = () => {
  return function (dispatch) {
    dispatch(logoutUserStart);
    auth
      .signOut()
      .then((resp) => dispatch(logoutUserSuccessful()))
      .catch((error) => dispatch(logoutUserFailed(error.message)));
  };
};
//Set user

export const setUser = (user) => ({
  type: "SET_USER",
  payload: user
});
