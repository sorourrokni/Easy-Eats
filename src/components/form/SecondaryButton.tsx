import { Button, Form } from "antd";
import styles from "./SecondaryButton.module.css";

interface FormButtonProps {
  text: string;
}

function SecondaryButton({ text }: FormButtonProps) {
  return (
    <Form.Item>
      <Button
        className={`${styles.submitButton} h3-bold`}
        type="default"
        htmlType="submit"
      >
        {text}
      </Button>
    </Form.Item>
  );
}

export default SecondaryButton;
