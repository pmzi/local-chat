import { useContext } from 'react';
import ChatManagerContext from '../contexts/ChatManagerContext';
import {
  dispatchLoadInitialProps, dispatchAddNewUser, dispatchRemoveUser,
  dispatchAddIncomingMessage, dispatchAddOutgoingMessage,
} from '../../store';

export default function useChatManagerActions() {
  const { dispatch } = useContext(ChatManagerContext);

  return {
    dispatchLoadInitialProps: dispatchLoadInitialProps.bind(null, dispatch),
    dispatchAddNewUser: dispatchAddNewUser.bind(null, dispatch),
    dispatchRemoveUser: dispatchRemoveUser.bind(null, dispatch),
    dispatchAddIncomingMessage: dispatchAddIncomingMessage.bind(null, dispatch),
    dispatchAddOutgoingMessage: dispatchAddOutgoingMessage.bind(null, dispatch),
  };
}
