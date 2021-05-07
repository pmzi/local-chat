// eslint-disable-next-line import/no-extraneous-dependencies
const { ipcMain } = require('electron');
const socket = require('./socket');

module.exports = function start() {
  ipcMain.on('createServer', (event, { port = 8080, name = 'Awesome Room' }) => {
    socket.createServer({ port, name });
  });
};
