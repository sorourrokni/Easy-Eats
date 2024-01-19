import React from "react";
import { Button, Flex } from "antd";
import styles from "./LinkButton.module.css";

interface LinkButtonProps {
  onClick: () => void;
  textButton: String;
  title?: String;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  onClick,
  textButton,
  title = "Already have an account?",
}) => {
  return (
    <Flex className={styles.flex}>
      <span className={`${styles.title}body2-regular`}>{title}</span>
      <Button
        className={`${styles.linkButton} h4-bold`}
        type="link"
        onClick={onClick}
      >
        {textButton}
      </Button>
    </Flex>
  );
};

export default LinkButton;
