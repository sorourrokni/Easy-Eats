import React from 'react';
import {Checkbox, Form} from 'antd';
import styles from './SignUpFormCheckbox.module.css'

function SignUpFormCheckbox() {
    return (
        <Form.Item name="terms" valuePropName="checked"
                   rules={[{required: true, message: 'Please accept the terms and privacy policy'}]}>
            <Checkbox className={styles.checkbox}>
                I have read and accept to <a href="#">Our Term and <br/> Privacy Policy</a>
            </Checkbox>
        </Form.Item>
    );
}

export default SignUpFormCheckbox;
