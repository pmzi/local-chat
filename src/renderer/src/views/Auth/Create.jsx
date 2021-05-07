import { useState } from 'react';
import { Button, Input, Form } from 'antd';
import { useHistory } from 'react-router-dom';

import strings from '@shared/constants/strings';
import { required } from '@shared/utilities/form-validation';
import LinkButton from '@shared/components/LinkButton';
import { AUTH_ROUTE, CHAT_GLOBAL_ROOM_ROUTE } from '@shared/constants/routes';
import { chatRoom } from '@services/api';

export default function Create() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  async function onFinish({ name, port, displayName }) {
    setLoading(true);
    await chatRoom.createServer({ name, port });
    await chatRoom.joinServer({ address: `127.0.0.1:${port}`, name: displayName });
    setLoading(false);

    history.push(CHAT_GLOBAL_ROOM_ROUTE);
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col">
        <h1 className="mb-16">
          {strings.create.TITLE}
        </h1>
        <Form
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            label={strings.DISPLAY_NAME}
            name="displayName"
            rules={[required()]}
          >
            <Input size="large" placeholder={strings.DISPLAY_NAME_PLACEHOLDER} />
          </Form.Item>
          <Form.Item
            label={strings.create.ROOM_NAME}
            name="name"
            rules={[required()]}
          >
            <Input size="large" placeholder={strings.create.ROOM_NAME_PLACEHOLDER} />
          </Form.Item>
          <Form.Item
            label={strings.create.DESCRIPTION}
            name="port"
            rules={[required()]}
          >
            <Input size="large" type="number" pattern="^\d+$" addonBefore="http://localhost:" placeholder="8080" />
          </Form.Item>
          <Form.Item>
            <div className="flex justify-between">
              <LinkButton size="large" type="text" link={AUTH_ROUTE}>
                {strings.BACK}
              </LinkButton>
              <Button loading={loading} size="large" type="primary" htmlType="submit">
                {strings.create.ACTION_TEXT}
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
