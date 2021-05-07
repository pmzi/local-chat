import {
  ADD_INCOMING_MESSAGE, ADD_NEW_USER, ADD_OUTGOING_MESSAGE, LOAD_INITIAL_PROPS, REMOVE_USER,
} from './action-types';
import {
  addIncomingMessage, addNewUser, addOutgoingMessage, loadInitialProps, removeUser,
} from './actions';

export default function reducer(state, action) {
  switch (action.type) {
    case LOAD_INITIAL_PROPS:
      return loadInitialProps(state, action.payload);
    case ADD_NEW_USER:
      return addNewUser(state, action.payload);
    case REMOVE_USER:
      return removeUser(state, action.payload);
    case ADD_INCOMING_MESSAGE:
      return addIncomingMessage(state, action.payload);
    case ADD_OUTGOING_MESSAGE:
      return addOutgoingMessage(state, action.payload);
    default:
      throw new Error();
  }
}
