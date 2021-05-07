import ExternalLink from '@shared/components/ExternalLink';
import strings from '@shared/constants/strings';
import playSound from '@shared/utilities/playSound';
import ChatRouter from './ChatRouter';
import ChatList from './ChatList';
import ChatHeader from './ChatHeader';

export default function Chat() {
  playSound();
  return (
    <div className="grid grid-cols-chat grid-rows-chat h-screen">
      <header className="col-span-2 border-b border-layout">
        <ChatHeader />
      </header>
      <aside className="border-r border-layout">
        <ChatList />
      </aside>
      <main>
        <ChatRouter />
      </main>
      <footer className="border-t border-layout col-span-2 flex items-center justify-center">
        {strings.FOOTER(<ExternalLink key={1} href="https://github.com/pmzi/local-chat" className="ml-2">Github</ExternalLink>)}
      </footer>
    </div>
  );
}
