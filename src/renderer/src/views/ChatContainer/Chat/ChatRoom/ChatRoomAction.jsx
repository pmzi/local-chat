import useAsync from '@shared/hooks/useAsync';
import { Form, Input, Button } from 'antd';
import { useContext, useRef } from 'react';
import { useParams } from 'react-router-dom';

import ChatManagerContext from '../../shared/ChatManagerContext';

export default function ChatRoomAction() {
  const [form] = Form.useForm();
  const messageBoxEl = useRef();
  const { sendMessage } = useContext(ChatManagerContext);
  const { execute: sendActualMessage, loading } = useAsync(sendMessage);
  const { id = '' } = useParams();

  async function pushMessage({ message }) {
    await sendActualMessage({
      message,
      to: id,
    });

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
