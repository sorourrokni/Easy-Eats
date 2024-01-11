import React from 'react';
import {Checkbox, Form} from 'antd';

function SingInFormCheckbox() {
    return (
        <Form.Item name="remember" valuePropName="checked">
            <Checkbox>
                <span className={'p-medium-normal'}>Remember me</span>
            </Checkbox>
        </Form.Item>
    );
}

export default SingInFormCheckbox;
