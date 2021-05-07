import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';

import { AUTH_ROUTE } from '@shared/constants/routes';
import { chatRoom } from '@services/api';
import strings from '@shared/constants/strings';
import ChatManagerContext from '../shared/contexts/ChatManagerContext';

export default function ChatHeader() {
  const history = useHistory();
  const chatData = useContext(ChatManagerContext);

  function leave() {
    chatRoom.disconnect();
    history.push(AUTH_ROUTE);
  }

  return (
    <div className="flex justify-between items-center px-8 h-full">
      <div className="text-4xl">
        {strings.chat.header.GREETINGS(<span key={1} className="text-primary ml-2">{chatData.user.name}</span>)}
      </div>
      <div className="text-center">
        <div>
          <span className="text-primary">
            {chatData.server.name}
          </span>
        </div>
        <div>
          <span className="text-primary">
            {chatData.server.address}
          </span>
        </div>
      </div>
      <div>
        <Button
          className="flex items-center justify-center"
          type="dashed"
          danger
          icon={<LogoutOutlined />}
          onClick={leave}
        >
          Leave
        </Button>
      </div>
    </div>
  );
}
