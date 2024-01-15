import React from "react";
import { Button, Flex } from "antd";
import styles from "./ForgotPasswordLink.module.css";

interface LinkButtonProps {
  onClick: () => void;
  textButton: String;
}
const ForgotPasswordLink: React.FC<LinkButtonProps> = ({
  textButton,
  onClick,
}) => {
  return (
    <Flex className={styles.flex}>
      <Button
        className={`${styles.link} body2-regular`}
        type="link"
        onClick={onClick}
      >
        {textButton}
      </Button>
    </Flex>
  );
};

export default ForgotPasswordLink;
