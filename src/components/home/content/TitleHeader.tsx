import { Flex } from "antd";
import styles from "./TitleHeader.module.css";

interface TitleHeaderProps {
  title: string;
  button?: any;
  className?: string;
}

function TitleHeader({ title, button, className }: TitleHeaderProps) {
  return (
    <Flex className={styles.flex}>
      <h1 className={`${className} ${styles.title} h2-bold`}>{title}</h1>
      {button}
    </Flex>
  );
}

export default TitleHeader;
