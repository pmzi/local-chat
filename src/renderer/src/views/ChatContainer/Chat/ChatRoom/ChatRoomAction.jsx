import { Form, Input, Button } from 'antd';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import ChatManagerContext from '../../shared/ChatManagerContext';

export default function ChatRoomAction() {
  const [form] = Form.useForm();
  const { sendMessage } = useContext(ChatManagerContext);
  const { id = '' } = useParams();

  function pushMessage({ message }) {
    sendMessage({
      message,
      to: id,
    });

    form.resetFields();
  }

  return (
    <Form
      layout="inline"
      className="flex"
      onFinish={pushMessage}
      form={form}
    >
      <Form.Item name="message" className="flex-1 mr-0">
        <Input size="large" placeholder="Any messages...!" />
      </Form.Item>
      <Form.Item className="mr-0">
        <Button size="large" htmlType="submit">Send</Button>
      </Form.Item>
    </Form>
  );
}
