import ChatRouter from './ChatRouter';

export default function Chat() {
  return (
    <div className="grid grid-cols-chat grid-rows-chat h-screen">
      <header className="col-span-2">
        Pouya&apos;s Room(192.168.1.1:8080)
      </header>
      <aside>
        Rooms List
      </aside>
      <main>
        <ChatRouter />
      </main>
      <footer>
        Fork me!
      </footer>
    </div>
  );
}
