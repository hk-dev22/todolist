const initialState = {
  registrationError: null,
  message: null,
  loading: false,
  currentUser: null
};

const account = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_USER_START":
    case "LOGIN_USER_START":
      state = {
        ...state,
        loading: true,
        registrationError: null
      };
      break;
    case "REGISTER_USER_SUCCESSFUL":
    case "LOGIN_USER_SUCCESSFUL":
      state = {
        ...state,
        loading: false,
        currentUser: action.payload,
        registrationError: null
      };
      break;
    case "REGISTER_USER_FAILED":
    case "LOGIN_USER_FAILED":
      state = {
        ...state,
        currentUser: null,
        loading: false,
        registrationError: action.payload
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default account;
