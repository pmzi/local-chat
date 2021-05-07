// eslint-disable-next-line import/no-extraneous-dependencies
const { contextBridge, shell, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('utility', {
  openExternalLink(link) {
    shell.openExternal(link);
  },
});

contextBridge.exposeInMainWorld('api', {
  createServer(data) {
    ipcRenderer.send('createServer', data);
  },
});
