import { Button } from "antd";
import styles from "./TextButton.module.css";
import BaseIcon from "../../icon/BaseIcon";

interface ButtonProps {
  onClick: () => void;
  textButton: string;
  icon: string;
}

function TextButton({ onClick, textButton, icon }: ButtonProps) {
  return (
    <Button
      className={`${styles.button} h4-semi-bold`}
      type="link"
      onClick={onClick}
    >
      {textButton}{" "}
      <BaseIcon
        srcSet={icon}
        alt="button icon"
        className={styles.icon}
      ></BaseIcon>
    </Button>
  );
}

export default TextButton;
