const AUTH_PREFIX = '/auth';

export const AUTH_ROUTE = `${AUTH_PREFIX}/`;
export const JOIN_ROUTE = `${AUTH_PREFIX}/join`;
export const CREATE_ROUTE = `${AUTH_PREFIX}/create`;

const CHAT_PREFIX = '/chat';

export const CHAT_GLOBAL_ROOM_ROUTE = `${CHAT_PREFIX}/room`;
export const CHAT_PRIVATE_MESSAGE_ROUTE = (id) => `${CHAT_PREFIX}/room/${id}`;
export const CHAT_PRIVATE_MESSAGE_ROUTER_ROUTE = `${CHAT_PREFIX}/room/:id`;
