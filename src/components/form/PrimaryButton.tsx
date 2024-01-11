import React from "react";
import { Button, Form } from "antd";
import styles from "./PrimaryButton.module.css";

interface FormButtonProps {
  text: string;
}

function PrimaryButton({ text }: FormButtonProps) {
  return (
    <Form.Item>
      <Button
        className={`${styles.submitButton} button-medium-semi`}
        type="primary"
        htmlType="submit"
      >
        {text}
      </Button>
    </Form.Item>
  );
}

export default PrimaryButton;
