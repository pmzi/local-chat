import { useContext } from 'react';
import { Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';

import ChatManagerContext from '../shared/ChatManagerContext';

export default function ChatHeader() {
  const chatData = useContext(ChatManagerContext);

  return (
    <div className="flex justify-between items-center px-8 h-full">
      <div className="text-4xl">
        Welcome
        {' '}
        <span className="text-primary">{chatData.user.name}</span>
        !
      </div>
      <div>
        <div>
          Room Name:
          {' '}
          <span className="text-primary">
            {chatData.server.name}
          </span>
        </div>
        <div>
          Room Address:
          {' '}
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
          onClick={chatData.leave}
        >
          Leave
        </Button>
      </div>
    </div>
  );
}
