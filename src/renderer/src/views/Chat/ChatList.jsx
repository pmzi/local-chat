import { Link } from 'react-router-dom';

import { CHAT_GLOBAL_ROOM_ROUTE, CHAT_PRIVATE_MESSAGE_ROUTE } from '@shared/constants/routes';
import strings from '@shared/constants/strings';

const rooms = [
  {
    name: strings.chat.list.GLOBAL_ROOM,
    to: CHAT_GLOBAL_ROOM_ROUTE,
  },
  {
    name: strings.chat.list.GLOBAL_ROOM,
    to: CHAT_PRIVATE_MESSAGE_ROUTE(12),
  },
];

export default function ChatList() {
  const roomsElements = rooms.map(({ name, to }) => (
    <li key={to} className="min-h-16 flex text-2xl mb-4 last:mb-0">
      <Link to={to} className="border-l-4 border-primary px-10 w-full flex items-center">
        {name}
      </Link>
    </li>
  ));

  return (
    <div className="h-full">
      <header className="flex justify-center items-center h-16 border-b border-layout mb-4 py-12">
        <h2 className="text-h2 mb-0">
          {strings.chat.list.TITLE}
        </h2>
      </header>
      <ul className="px-0">
        {roomsElements}
      </ul>
    </div>
  );
}
