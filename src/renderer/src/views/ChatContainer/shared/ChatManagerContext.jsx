import { createContext } from 'react';

export default createContext({
  chats: {},
  server: {
    name: '',
    address: '',
  },
  user: {
    id: '',
    name: '',
  },
});
