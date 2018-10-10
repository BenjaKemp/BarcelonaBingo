import {  POINT_SCORED, CLOSE_MODAL} from "../constants/action-types";
export const initialState = {
  modalIsOpen: false,
  message: null,
  username: null
};
export default function(state = initialState, action) {
  console.log('action tings', action)
  switch (action.type) {
    case POINT_SCORED:
      return {
        ...state,
        modalIsOpen: true,
        message: action.sight,
        username: action.username

      }
    case CLOSE_MODAL:
      return {
        ...state,
        modalIsOpen: false
      }
      default:
      return state;
  }
}
