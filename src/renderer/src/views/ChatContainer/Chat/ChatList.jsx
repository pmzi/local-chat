import { NavLink } from 'react-router-dom';

import strings from '@shared/constants/strings';
import { useContext } from 'react';
import { CHAT_PRIVATE_MESSAGE_ROUTE } from '@shared/constants/routes';
import ChatManagerContext from '../shared/ChatManagerContext';

export default function ChatList() {
  const { chats } = useContext(ChatManagerContext);

  const roomsElements = Object.entries(chats).map(([id, { name }]) => (
    <li key={id} className="min-h-16 flex text-2xl mb-4 last:mb-0">
      <NavLink activeClassName="border-l-4 border-primary" exact to={CHAT_PRIVATE_MESSAGE_ROUTE(id)} className="px-10 w-full flex items-center">
        {name}
      </NavLink>
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
