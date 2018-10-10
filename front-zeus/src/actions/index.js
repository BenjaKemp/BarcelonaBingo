import {SELECT_WORD, SIGHT_SEEN, SET_WORDS, USER_NAME, PASSWORD, NEW_USER, LOGGED, VICTORY, RESET, POINT_SCORED, CLOSE_MODAL } from "../constants/action-types";


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
export function pointScored (message){
  console.log('this is received from socket', message)
  return {
    type: POINT_SCORED,
    sight: message.sight,
    username: message.username

  }
}
export function closeModal (){
  return {
    type: CLOSE_MODAL


  }
}
