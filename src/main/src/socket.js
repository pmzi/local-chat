const { createServer } = require('http');
const createIO = require('socket.io');

const { PROPERTIES_EVENT, MESSAGE_EVENT, NEW_USER_EVENT } = require('./shared/constants/socketEvents');

module.exports = {
  createServer({ name, port }) {
    const httpServer = createServer();
    const io = createIO(httpServer, {
      cors: {
        origin: '*',
      },
    });

    io.on('connection', (client) => {
      console.log('New Connection!');
      client.emit(PROPERTIES_EVENT, { name, port });

      client.on(MESSAGE_EVENT, (event, { toId = null, message }) => {
        if (toId) client.to(toId).emit(MESSAGE_EVENT, { fromId: client.id, message });
        else io.emit(MESSAGE_EVENT, { fromId: null, message });
      });

      io.emit(NEW_USER_EVENT, {
        id: client.id,
        name: client.handshake.query.name,
      });
    });

    console.log('CALLED');

    httpServer.listen(port);
  },
};
