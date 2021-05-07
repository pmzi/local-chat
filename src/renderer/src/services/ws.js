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
  emit(event, data, cb) {
    socket.emit(event, data, cb);
  },
};
