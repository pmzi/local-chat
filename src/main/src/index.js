// eslint-disable-next-line import/no-extraneous-dependencies
const { ipcMain } = require('electron');
const createSocketServer = require('./createSocketServer');

module.exports = function start() {
  ipcMain.on('createServer', (event, { port = 8080, name = 'Awesome Room' }) => {
    createSocketServer({ port, name });
  });
};
