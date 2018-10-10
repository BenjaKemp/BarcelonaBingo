import io from 'socket.io-client';
import {pointScored, closeModal} from '../actions'
import store from '../index.js'
const socket = io('http://localhost:3000/');



socket.on('opponentScored', (data) => {
  console.log(data)
  let opponentPoint = data.description
  store.dispatch(pointScored(opponentPoint, true))
  setTimeout(()=>{store.dispatch(closeModal())}, 3000)
} );
socket.on('tester', (data) => {
console.log('tester data', data)
} );

export function score (seen) {
    let username = localStorage.getItem('username');
  socket.emit('score', {
    title: 'SCORE',
    message: 'player has scored',
    username: username,
    sight: seen
  })
}
export function victory (data) {
  socket.emit('victory', {
    title: 'victory',
    data
  })
}
