const { createServer } = require('http');
const createIO = require('socket.io');

const handleConnection = require('./handleConnection');

module.exports = function createSocketServer({ name, port }) {
  const httpServer = createServer();
  const io = createIO(httpServer, {
    cors: {
      origin: '*',
    },
  });

  io.on('connection', handleConnection({ name, port, io }));

  httpServer.listen(port);
};
