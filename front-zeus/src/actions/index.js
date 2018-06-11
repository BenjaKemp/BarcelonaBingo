import {SELECT_WORD, SIGHT_SEEN, SET_WORDS } from "../constants/action-types";


export function selectWord (word, index){
  return {
    type: SELECT_WORD,
    word,
    index
  };
}
export function sightSeen (value, index){
  return {
    type: SIGHT_SEEN,
    value,
    index
  };
}
export function setWords (words){
  return {
    type: SET_WORDS,
    words
  }
}
