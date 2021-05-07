import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import ChatRoomMessagesItemSending from './ChatRoomMessagesItemSending';
import ChatRoomMessagesItemComing from './ChatRoomMessagesItemComing';

export default function ChatRoomMessages({ messages }) {
  const containerElement = useRef();
  const messagesElements = messages.map(({ id, message, me }) => {
    if (me) {
      return <ChatRoomMessagesItemSending key={id} message={message} />;
    }

    return <ChatRoomMessagesItemComing key={id} message={message} />;
  });

  useEffect(() => {
    const scrollTop = containerElement.current.scrollHeight - containerElement.current.clientHeight;
    containerElement.current.scrollTop = scrollTop;
  }, []);

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
