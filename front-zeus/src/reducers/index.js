import selectedWord from "./reducer_select_word";
import sightSeen from "./reducer_sight_seen";
import credentials from "./reducer_log_in";
import modalInfo from "./reducer_modal_info";
import { combineReducers } from "redux";



const rootReducer = combineReducers({
  modalInfo: modalInfo,
  selectedWord: selectedWord,
  sightSeen: sightSeen,
  credentials: credentials,


});


export default rootReducer;
