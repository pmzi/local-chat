import { Button, Input, Form } from 'antd';

import strings from '@shared/constants/strings';
import { required } from '@shared/utilities/form-validation';

export default function Join() {
  function onFinish(vals) {
    console.log(vals);
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col">
        <h1 className="text-h1 mb-16">
          Joining a room!
        </h1>
        <Form
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            label={strings.join.DESCRIPTION}
            name="address"
            rules={[required()]}
          >
            <Input size="large" pattern="^\d+\.\d+\.\d+\.\d+:\d+$" addonBefore="http://" placeholder="192.168.1.2:8080" />
          </Form.Item>
          <Form.Item className="text-center">
            <Button size="large" type="primary" htmlType="submit">
              {strings.join.ACTION_TEXT}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
