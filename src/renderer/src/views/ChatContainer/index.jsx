import { chatRoom } from '@services/api';
import useAsync from '@shared/hooks/useAsync';
import { useEffect, useState } from 'react';

import Chat from './Chat';
import ChatManagerContext from './shared/ChatManagerContext';

const globalRoom = {
  '': {
    name: 'Global Room',
    messages: [],
  },
};

export default function ChatContainer() {
  const [server, setServer] = useState({ name: '', address: '' });
  const [user, setUser] = useState({ name: '', id: '' });
  const [chats, setChats] = useState({
    ...globalRoom,
  });
  const { execute: getRoomProperties } = useAsync(chatRoom.getRoomProperties);

  function addNewUser({ id, name }) {
    if (id in chats) return;

    setChats((oldChats) => ({
      ...oldChats,
      [id]: {
        name,
        messages: [],
      },
    }));
  }

  function addChats(newChatsToBeAdded) {
    const newChats = {
      ...globalRoom,
    };
    newChatsToBeAdded.forEach(({ name, id }) => {
      newChats[id] = { name, messages: [] };
    });
    setChats(newChats);
  }

  function addOutgoingMessage({
    to, message,
  }) {
    setChats((oldChats) => ({
      ...oldChats,
      [to]: {
        ...oldChats[to],
        messages: [
          ...oldChats[to].messages,
          {
            from: user.id,
            message,
          },
        ],
      },
    }));
  }

  function addIncomingMessage({
    message, from,
  }) {
    setChats((oldChats) => ({
      ...oldChats,
      [from]: {
        ...oldChats[from],
        messages: [
          ...oldChats[from].messages,
          {
            from,
            message,
          },
        ],
      },
    }));
  }

  function removeUser({ id }) {
    console.log(id, chats);
    const newChats = { ...chats };
    delete newChats[id];
    setChats(newChats);
  }

  async function sendMessage({ to, message }) {
    await chatRoom.sendMessage({ to, message });
    addOutgoingMessage({ to, message });
  }

  useEffect(() => {
    getRoomProperties().then(({ server: serverProps, users, user: userInfo }) => {
      setServer(serverProps);
      addChats(users);
      setUser(userInfo);
    });

    chatRoom.listenForNewUser(addNewUser);
    chatRoom.listenForUserLeft(removeUser);
    chatRoom.listenForMessages(addIncomingMessage);
  }, []);

  return (
    <ChatManagerContext.Provider value={{
      chats,
      server,
      user,

      sendMessage,
    }}
    >
      <Chat />
    </ChatManagerContext.Provider>
  );
}