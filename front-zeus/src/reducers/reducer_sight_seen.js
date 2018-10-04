import { SIGHT_SEEN, SET_WORDS } from "../constants/action-types";
import { findWinner } from "./reducer_winner";
import { score } from "../sockets";

 const initialState = {
  words: []
};
export default function(state = initialState, action) {
  findWinner(action.index);
  switch (action.type) {
    case SIGHT_SEEN:
    score(action.value)
      return {
        ...state,
        words: state.words.map(el => {
          if (el.title === action.value) {
            el.index = action.index;
            el.seen = true;
          }

          return el;
        })
      };
      case SET_WORDS:
      return {
        ...state,
        words: action.words,
      }

       default:
      return state;
  }
}
