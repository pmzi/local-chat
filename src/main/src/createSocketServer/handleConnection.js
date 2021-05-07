const ip = require('ip');

const {
  PROPERTIES_EVENT, MESSAGE_EVENT, NEW_USER_EVENT, USER_LEFT_EVENT,
} = require('./shared/constants/socketEvents');

module.exports = function handleConnection({ name, port, io }) {
  const address = ip.address();

  const users = new Set();

  return (client) => {
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
      else client.broadcast.emit(MESSAGE_EVENT, { from: '', message });
    });

    client.on('disconnect', () => {
      users.delete(user);
      io.emit(USER_LEFT_EVENT, user);
    });

    client.on('leave', () => {
      client.disconnect();
    });

    io.emit(NEW_USER_EVENT, user);
  };
};
