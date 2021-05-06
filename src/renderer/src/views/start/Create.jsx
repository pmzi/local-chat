import { Button, Input, Form } from 'antd';

import strings from '@shared/constants/strings';
import { required } from '@shared/utilities/form-validation';
import LinkButton from '@shared/components/LinkButton';
import { ENTER_ROUTE } from '@shared/constants/router';

export default function Create() {
  function onFinish(vals) {
    console.log(vals);
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col">
        <h1 className="text-h1 mb-16">
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
              <LinkButton size="large" type="text" link={ENTER_ROUTE}>
                {strings.BACK}
              </LinkButton>
              <Button size="large" type="primary" htmlType="submit">
                {strings.create.ACTION_TEXT}
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
