// eslint-disable-next-line import/no-extraneous-dependencies
const { contextBridge, shell } = require('electron');

contextBridge.exposeInMainWorld('utility', {
  openExternalLink(link) {
    shell.openExternal(link);
  },
});
