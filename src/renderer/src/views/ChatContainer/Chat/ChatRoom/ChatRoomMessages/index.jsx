import { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import ChatManagerContext from '@/views/ChatContainer/shared/contexts/ChatManagerContext';
import ChatRoomMessagesItemSending from './ChatRoomMessagesItemSending';
import ChatRoomMessagesItemComing from './ChatRoomMessagesItemComing';

export default function ChatRoomMessages({ messages }) {
  const containerElement = useRef();
  const { user } = useContext(ChatManagerContext);

  const messagesElements = messages.map(({ message, from }) => {
    const id = Date.now();
    if (from === user.id) {
      return <ChatRoomMessagesItemSending key={id} message={message} />;
    }

    return <ChatRoomMessagesItemComing key={id} message={message} />;
  });

  useEffect(() => {
    const scrollTop = containerElement.current.scrollHeight - containerElement.current.clientHeight;
    containerElement.current.scrollTop = scrollTop;
  }, [messages]);

  return (
    <div className="overflow-auto h-full" ref={containerElement}>
      <div className="flex flex-col p-8 justify-end min-h-full overflow-hidden">
        {messagesElements}
      </div>
    </div>
  );
}

ChatRoomMessages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    message: PropTypes.string,
    me: PropTypes.bool,
  })).isRequired,
};
