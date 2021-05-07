import { chatRoom } from '@services/api';
import useAsync from '@shared/hooks/useAsync';
import { Form, Input, Button } from 'antd';
import { useRef } from 'react';
import { useParams } from 'react-router-dom';

import useChatManagerActions from '../../shared/hooks/useChatManagerActions';

export default function ChatRoomAction() {
  const [form] = Form.useForm();
  const messageBoxEl = useRef();
  const { dispatchAddOutgoingMessage } = useChatManagerActions();
  const { execute: sendMessage, loading } = useAsync(chatRoom.sendMessage);
  const { id = '' } = useParams();

  async function pushMessage({ message }) {
    const msg = { to: id, message };
    await sendMessage(msg);

    dispatchAddOutgoingMessage(msg);

    form.resetFields();

    messageBoxEl.current.focus();
  }

  return (
    <Form
      layout="inline"
      className="flex"
      onFinish={pushMessage}
      form={form}
    >
      <Form.Item name="message" className="flex-1 mr-0">
        <Input ref={messageBoxEl} size="large" placeholder="Any messages...!" />
      </Form.Item>
      <Form.Item className="mr-0">
        <Button loading={loading} size="large" htmlType="submit">Send</Button>
      </Form.Item>
    </Form>
  );
}
