import { Form, Input, Button } from 'antd';

export default function ChatRoomAction() {
  return (
    <Form
      layout="inline"
      className="flex"
    >
      <Form.Item className="flex-1 mr-0">
        <Input size="large" placeholder="Any messages...!" />
      </Form.Item>
      <Form.Item className="mr-0">
        <Button size="large" htmlType="submit">Send</Button>
      </Form.Item>
    </Form>
  );
}
