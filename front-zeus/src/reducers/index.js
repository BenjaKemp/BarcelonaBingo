import { combineReducers } from "redux";
import selectedWord from "./reducer_select_word";
import sightSeen from "./reducer_sight_seen";

const rootReducer = combineReducers({
  selectedWord: selectedWord,
  sightSeen: sightSeen
});

export default rootReducer;
