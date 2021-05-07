import {
  ADD_INCOMING_MESSAGE, ADD_NEW_USER, ADD_OUTGOING_MESSAGE, LOAD_INITIAL_PROPS, REMOVE_USER,
} from './action-types';

export function dispatchLoadInitialProps(dispatch, data) {
  dispatch({ type: LOAD_INITIAL_PROPS, payload: data });
}

export function dispatchAddNewUser(dispatch, data) {
  dispatch({ type: ADD_NEW_USER, payload: data });
}

export function dispatchRemoveUser(dispatch, data) {
  dispatch({ type: REMOVE_USER, payload: data });
}

export function dispatchAddIncomingMessage(dispatch, data) {
  dispatch({ type: ADD_INCOMING_MESSAGE, payload: data });
}

export function dispatchAddOutgoingMessage(dispatch, data) {
  dispatch({ type: ADD_OUTGOING_MESSAGE, payload: data });
}
