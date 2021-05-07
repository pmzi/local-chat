import { useParams } from 'react-router-dom';

import ChatRoomMessages from './ChatRoomMessages';
import ChatRoomAction from './ChatRoomAction';

const messages = [
  {
    id: 1,
    message: 'Hi From Another',
    me: false,
  },
  {
    id: 2,
    message: 'Hi From Another',
    me: false,
  },
  {
    id: 3,
    message: 'Hi From Me',
    me: true,
  },
  {
    id: 4,
    message: 'Hi From Another',
    me: false,
  },
  {
    id: 5,
    message: 'Hi From Me',
    me: true,
  },
];

export default function ChatRoom() {
  const { id = '' } = useParams();

  return (
    <div className="flex flex-col h-full">
      <header className="border-b border-layout h-20 flex items-center justify-center">
        Chatting with
        {' '}
        <span className="text-primary ml-2">
          {id || 'global'}
        </span>
        !
      </header>
      <div className="flex-1 overflow-hidden">
        <ChatRoomMessages messages={messages} />
      </div>
      <div>
        <ChatRoomAction />
      </div>
    </div>
  );
}
