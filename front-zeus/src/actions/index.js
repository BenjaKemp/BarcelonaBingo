import {SELECT_WORD, SIGHT_SEEN, SET_WORDS, USER_NAME, PASSWORD, NEW_USER, LOGGED } from "../constants/action-types";


export const selectWord = (word, index) => {
  return {
    type: SELECT_WORD,
    word,
    index
  };
}
export function sightSeen (value, index){
  console.log('hi ben', value , index)
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
  // console.log(value)
  return {
    type: USER_NAME,
  value

  }
}
export function password (value){
  // console.log(value)
  return {
    type: PASSWORD,
  value

  }
}
export function newUser (value){
  // console.log(value)
  return {
    type: NEW_USER,
  value

  }
}
export function logged (value){
  // console.log(value)
  return {
    type: LOGGED,
  value

  }
}
