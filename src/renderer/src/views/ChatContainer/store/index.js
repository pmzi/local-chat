import { useReducer } from 'react';
import reducer from './reducer';

const globalRoom = {
  '': {
    name: 'Global Room',
    messages: [],
  },
};

export default function useChatManagerStore() {
  return useReducer(reducer, {
    chats: {
      ...globalRoom,
    },
    server: {
      name: '',
      address: '',
    },
    user: {
      id: '',
      name: '',
    },
  });
}

export * from './action-callers';
