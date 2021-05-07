import { useParams } from 'react-router-dom';

import { useContext } from 'react';
import strings from '@shared/constants/strings';
import ChatRoomMessages from './ChatRoomMessages';
import ChatRoomAction from './ChatRoomAction';
import ChatManagerContext from '../../shared/contexts/ChatManagerContext';

export default function ChatRoom() {
  const { id = '' } = useParams();
  const chatData = useContext(ChatManagerContext);

  const currentRoomData = chatData.chats[id];

  return (
    <div className="flex flex-col h-full">
      <header className="border-b border-layout h-20 flex items-center justify-center">
        {
        strings.chat.chatRoom.CHATTING_WITH(
          <span key={1} className="text-primary ml-2">
            {currentRoomData.name}
          </span>,
        )
        }
      </header>
      <div className="flex-1 overflow-hidden">
        <ChatRoomMessages messages={currentRoomData.messages} />
      </div>
      <div>
        <ChatRoomAction />
      </div>
    </div>
  );
}
