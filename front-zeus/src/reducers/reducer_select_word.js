import { SELECT_WORD } from "../constants/action-types";
export const initialState = {
  selectedWord: null
};
export default function(state = initialState, action) {
  switch (action.type) {
    case SELECT_WORD:
      return {
        ...state,
        selectedWord: action.word
      };
  }
  return state;
}
