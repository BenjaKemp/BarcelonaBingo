import { USER_NAME, PASSWORD, NEW_USER, LOGGED } from "../constants/action-types";

export const logIn = {
  username: "",
  password: "",
  logged: false,
  newUser: true,
  title: "Log in Now"
};
export default function(state = logIn, action) {
  console.log('action.value', action.value)
  switch (action.type) {
    case USER_NAME:
      return {
        ...state ,
        username: action.value.username
      };
      case PASSWORD:
      return {
        ...state ,
        password: action.value.password
      };
  case NEW_USER:
    return {
      ...state ,
      newUser: (!state.newUser)
    }
    case LOGGED:
      return {
        ...state ,
        logged: (!state.logged)
      };
    }
  return state;

}
