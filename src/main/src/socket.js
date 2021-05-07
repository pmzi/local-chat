const { createServer } = require('http');
const createIO = require('socket.io');
const ip = require('ip');

const {
  PROPERTIES_EVENT, MESSAGE_EVENT, NEW_USER_EVENT, USER_LEFT_EVENT,
} = require('./shared/constants/socketEvents');

module.exports = {
  createServer({ name, port }) {
    const httpServer = createServer();
    const io = createIO(httpServer, {
      cors: {
        origin: '*',
      },
    });

    const address = ip.address();

    const users = new Set();

    io.on('connection', (client) => {
      console.log('New Connection!');

      const otherUsers = new Set(users);

      const user = {
        id: client.id,
        name: client.handshake.query.name,
      };

      users.add(user);

      client.on(PROPERTIES_EVENT, () => {
        client.emit(PROPERTIES_EVENT, { server: { name, address: `${address}:${port}` }, users: Array.from(otherUsers), user });
      });

      client.on(MESSAGE_EVENT, ({ to = '', message }) => {
        if (to) client.to(to).emit(MESSAGE_EVENT, { from: client.id, message });
        else io.emit(MESSAGE_EVENT, { from: '', message });
      });

      client.on('disconnect', () => {
        users.delete(user);
        io.emit(USER_LEFT_EVENT, user);
      });

      io.emit(NEW_USER_EVENT, user);
    });

    console.log('CALLED');

    httpServer.listen(port);
  },
};
