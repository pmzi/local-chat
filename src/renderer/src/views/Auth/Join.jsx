import { Button, Input, Form } from 'antd';

import strings from '@shared/constants/strings';
import { required } from '@shared/utilities/form-validation';
import { AUTH_ROUTE } from '@shared/constants/routes';
import LinkButton from '@shared/components/LinkButton';

export default function Join() {
  function onFinish(vals) {
    console.log(vals);
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col">
        <h1 className="text-h1 mb-16">
          {strings.join.TITLE}
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
            label={strings.join.DESCRIPTION}
            name="address"
            rules={[required()]}
          >
            <Input size="large" pattern="^\d+\.\d+\.\d+\.\d+:\d+$" addonBefore="http://" placeholder="192.168.1.2:8080" />
          </Form.Item>
          <Form.Item className="text-center">
            <div className="flex justify-between">
              <LinkButton size="large" type="text" link={AUTH_ROUTE}>
                {strings.BACK}
              </LinkButton>
              <Button size="large" type="primary" htmlType="submit">
                {strings.join.ACTION_TEXT}
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}