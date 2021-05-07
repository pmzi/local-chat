import { io } from 'socket.io-client';

let socket = null;

export default {
  connect(address, { name }) {
    return new Promise((resolve) => {
      socket = io(address, {
        query: {
          name,
        },
      });

      socket.on('connect', resolve);
    });
  },
  on(event, cb) {
    socket.on(event, cb);
  },
  once(event, cb) {
    socket.once(event, cb);
  },
  emit(event, data, cb) {
    console.log(socket);
    socket.emit(event, data, cb);
  },
};
