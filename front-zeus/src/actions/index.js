import {SELECT_WORD, SIGHT_SEEN, SET_WORDS, USER_NAME, PASSWORD, NEW_USER, LOGGED, VICTORY, RESET } from "../constants/action-types";


<<<<<<< HEAD
export function selectWord (word, index){

=======
export const selectWord = (word, index) => {
>>>>>>> a2398b1dbe50a6f46584d28343e129fe72209efa
  return {
    type: SELECT_WORD,
    word,
    index
  };
}
export function sightSeen (value, index){
<<<<<<< HEAD

=======
  console.log('hi ben', value , index)
>>>>>>> a2398b1dbe50a6f46584d28343e129fe72209efa
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

export function username (value){
  return {
    type: USER_NAME,
  value

  }
}
export function password (value){
  return {
    type: PASSWORD,
  value

  }
}
export function newUser (value){
  return {
    type: NEW_USER,
  value

  }
}
export function logged (value){
  return {
    type: LOGGED,
  value
  }
}
export function reset (value){
  return {
    type: RESET,

  }
}
