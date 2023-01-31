/* eslint-disable no-console */
import type { Server, Socket } from 'socket.io'

let i = 0

export default function (io: Server) {
  io.on('connection', (socket: Socket) => {
    console.log('socket connected', socket.id)
    socket.on('join room', (room) => {
      socket.join(room)
    })
    socket.on('message', () => {
      return `hi ${i++}`
    })
    socket.on('disconnect', (reason) => {
      console.log('socket disconnected', reason)
      io.emit('user disconnected', socket.id)
    })
  })
}

// let count = 0
//
// const jsmServerFunctions = function (io: Server) {
//   io.on('connection', (socket: Socket) => {
//     console.log('socket connected', socket.id)
//     socket.on('join room', (room) => {
//       socket.join(room)
//     })
//     socket.on('count', (d) => {
//       count = d
//       io.emit('count', count)
//     })
//     socket.on('disconnect', (reason) => {
//       console.log('socket disconnected')
//       io.emit('user disconnected', socket.id)
//     })
//   })
// }

// export default jsmServerFunctions
