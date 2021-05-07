import ws from '@services/ws';

export default {
  createServer({ name, port }) {
    return Promise.resolve(window.api.createServer({ name, port }));
  },
  joinServer({ address, name }) {
    return ws.connect(address, { name });
  },
  sendMessage({ to, message }) {
    return Promise.resolve(ws.emit('message', { to, message }));
  },
  getRoomProperties() {
    return new Promise((resolve) => {
      ws.emit('properties');

      ws.once('properties', resolve);
    });
  },
  listenForMessages(cb) {
    ws.on('message', cb);
  },
  listenForNewUser(cb) {
    ws.on('newUser', cb);
  },
  listenForUserLeft(cb) {
    ws.on('userLeft', cb);
  },
};
