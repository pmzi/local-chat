import ws from '@services/ws';

export default {
  createServer({ name, port }) {
    return Promise.resolve(window.api.createServer({ name, port }));
  },
  joinServer({ address, name }) {
    return ws.connect(address, { name });
  },
  sendMessage({ toId, message }) {
    return Promise.resolve(ws.emit('message', { toId, message }));
  },
  listenForMessages(cb) {
    ws.on('message', cb);
  },
  listenForNewUser(cb) {
    ws.on('newUser', cb);
  },
};
