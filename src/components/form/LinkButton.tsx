import React from "react";
import { Typography, Button, Flex } from "antd";
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
      <Typography.Text className={styles.text}>
        {title}
        <Button className={styles.linkButton} type="link" onClick={onClick}>
          {textButton}
        </Button>
      </Typography.Text>
    </Flex>
  );
};

export default LinkButton;
