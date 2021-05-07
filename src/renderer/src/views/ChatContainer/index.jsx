import { useEffect } from 'react';

import { chatRoom } from '@services/api';
import Chat from './Chat';
import ChatManagerContext from './shared/contexts/ChatManagerContext';
import useChatManagerStore, {
  dispatchAddNewUser,
  dispatchRemoveUser,
  dispatchAddIncomingMessage,
  dispatchLoadInitialProps,
} from './store';

export default function ChatContainer() {
  const [state, dispatch] = useChatManagerStore();

  useEffect(() => {
    chatRoom.getRoomProperties().then((initialProps) => {
      dispatchLoadInitialProps(dispatch, initialProps);
    });

    chatRoom.listenForNewUser((user) => dispatchAddNewUser(dispatch, user));
    chatRoom.listenForUserLeft((user) => dispatchRemoveUser(dispatch, user));
    chatRoom.listenForMessages((msg) => dispatchAddIncomingMessage(dispatch, msg));
  }, []);

  return (
    <ChatManagerContext.Provider value={{
      ...state,
      dispatch,
    }}
    >
      <Chat />
    </ChatManagerContext.Provider>
  );
}
