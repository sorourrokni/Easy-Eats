import React from "react";
import { Flex, Form } from "antd";
import FormHeader from "./FormHeader";
import styles from "./AuthForm.module.css";
import SideCover from "./SideCover";

interface AuthFormProps {
  title: string;
  description: string;
  cover: string;
  onFinish: (values: any) => void;
  children: React.ReactNode;
}

function AuthForm({
  title,
  description,
  onFinish,
  children,
  cover,
}: AuthFormProps) {
  return (
    <Flex justify="center" align="center" className={styles.flex}>
      <SideCover src={cover} alt="SideImage"></SideCover>
      <Form
        onFinish={onFinish}
        className={styles.form}
        layout="vertical"
        requiredMark={false}
      >
        <FormHeader title={title} description={description} />
        <section className={styles.section}>{children}</section>
      </Form>
    </Flex>
  );
}

export default AuthForm;
