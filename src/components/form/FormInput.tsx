import { Form, Input, Space } from "antd";
import styles from "./FormInput.module.css";
import BaseIcon from "../icon/BaseIcon";

interface FormInputProps {
  label: string;
  icon: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
}

function FormInput({
  label,
  icon,
  name,
  type,
  placeholder,
  required,
}: FormInputProps) {
  return (
    <Space>
      <BaseIcon srcSet={icon} alt="icon"></BaseIcon>
      <Form.Item
        className={styles.item}
        label={label}
        name={name}
        rules={[
          {
            required: required,
            message: `Please enter your ${label.toLowerCase()}`,
          },
        ]}
      >
        <Input className={styles.input} type={type} placeholder={placeholder} />
      </Form.Item>
    </Space>
  );
}

export default FormInput;