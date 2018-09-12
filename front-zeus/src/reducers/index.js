import { combineReducers } from "redux";
import selectedWord from "./reducer_select_word";
import sightSeen from "./reducer_sight_seen";
import credentials from "./reducer_log_in";



const rootReducer = combineReducers({
  selectedWord: selectedWord,
  sightSeen: sightSeen,
  credentials: credentials,


});

export default rootReducer;
