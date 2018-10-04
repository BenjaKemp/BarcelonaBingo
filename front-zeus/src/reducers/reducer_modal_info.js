import {  POINT_SCORED, CLOSE_MODAL} from "../constants/action-types";
export const initialState = {
  modalIsOpen: false,
  message: null
};
export default function(state = initialState, action) {
  switch (action.type) {
    case POINT_SCORED:
      return {
        ...state,
        modalIsOpen: true,
        message: action.message
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
