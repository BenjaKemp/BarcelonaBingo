import io from 'socket.io-client';
const socket = io('http://localhost:3000/');

socket.on('opponentScored', (data) => {
  let opponentPoint = data.description.sight
  alert(`Look out! a rival has just seen ${opponentPoint}`)
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
