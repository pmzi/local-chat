export function loadInitialProps(state, { server, users, user }) {
  const chats = {
    ...state.chats,
  };

  users.forEach(({ name, id }) => {
    chats[id] = { name, messages: [] };
  });

  return {
    ...state,
    server,
    user,
    chats,
  };
}

export function addNewUser(state, { id, name }) {
  if (id in state.chats) return state;

  return {
    ...state,
    chats: {
      ...state.chats,
      [id]: {
        name,
        messages: [],
      },
    },
  };
}

export function addIncomingMessage(state, {
  message, from,
}) {
  const oldChats = state.chats;

  return {
    ...state,
    chats: {
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
    },
  };
}

export function removeUser(state, { id }) {
  const newChats = { ...state.chats };
  delete newChats[id];
  return {
    ...state,
    chats: newChats,
  };
}

export function addOutgoingMessage(state, {
  to, message,
}) {
  const oldChats = state.chats;

  return {
    ...state,
    chats: {
      ...oldChats,
      [to]: {
        ...oldChats[to],
        messages: [
          ...oldChats[to].messages,
          {
            from: state.user.id,
            message,
          },
        ],
      },
    },
  };
}
