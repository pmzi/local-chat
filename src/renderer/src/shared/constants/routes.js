import parseUrl from '@shared/utilities/parseUrl';

const AUTH_PREFIX = '/auth';

export const authRoute = {
  URL: `${AUTH_PREFIX}/`,
};
export const joinRoute = {
  URL: `${AUTH_PREFIX}/join`,
};
export const createRoute = {
  URL: `${AUTH_PREFIX}/create`,
};

const CHAT_PREFIX = '/chat';

export const chatGlobalRoomRoute = {
  URL: `${CHAT_PREFIX}/room`,
};

export const chatPrivateMessageRoute = {
  URL: `${CHAT_PREFIX}/room/:id`,
  parse(id) { return parseUrl(this.URL, { params: { id } }); },
};
