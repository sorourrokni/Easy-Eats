import { Button, Form } from "antd";
import styles from "./PrimaryButton.module.css";

interface FormButtonProps {
  onClick?: () => void;
  text: string;
}

function PrimaryButton({ text, onClick }: FormButtonProps) {
  return (
    <Form.Item>
      <Button
        className={`${styles.submitButton} h3-bold`}
        type="primary"
        htmlType="submit"
        onClick={onClick}
      >
        {text}
      </Button>
    </Form.Item>
  );
}

export default PrimaryButton;
