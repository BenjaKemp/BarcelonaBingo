import io from 'socket.io-client';
import {pointScored, closeModal} from '../actions'
import store from '../index.js'
const socket = io('http://localhost:3000/');

socket.on('opponentScored', (data) => {
  let opponentPoint = data.description.sight
  store.dispatch(pointScored(opponentPoint, true))
  setTimeout(()=>{store.dispatch(closeModal())}, 3000)
} );

export function score (seen) {
  socket.emit('score', {
    title: 'SCORE',
    message: 'player has scored',
    sight: seen
  })
}
export function victory (data) {
  socket.emit('victory', {
    title: 'victory',
    data
  })
}
