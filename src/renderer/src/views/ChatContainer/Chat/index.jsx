import { useContext } from 'react';

import ExternalLink from '@shared/components/ExternalLink';
import strings from '@shared/constants/strings';
import ChatRouter from './ChatRouter';
import ChatList from './ChatList';
import ChatManagerContext from '../shared/ChatManagerContext';

export default function Chat() {
  const chatData = useContext(ChatManagerContext);

  return (
    <div className="grid grid-cols-chat grid-rows-chat h-screen">
      <header className="col-span-2 flex justify-center items-center border-b border-layout">
        {chatData.server.name}
        &apos;s Room(
        {chatData.server.address}
        )
      </header>
      <aside className="border-r border-layout">
        <ChatList />
      </aside>
      <main>
        <ChatRouter />
      </main>
      <footer className="border-t border-layout col-span-2 flex items-center justify-center">
        {strings.FOOTER(<ExternalLink href="https://github.com/pmzi/local-chat" className="ml-2">Github</ExternalLink>)}
      </footer>
    </div>
  );
}
