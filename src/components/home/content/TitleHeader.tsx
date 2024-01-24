import { Flex } from "antd";
import styles from "./TitleHeader.module.css";

interface TitleHeaderProps {
  title: string;
  button?: any;
}

function TitleHeader({ title, button }: TitleHeaderProps) {
  return (
    <Flex className={styles.flex}>
      <h1 className={`${styles.title} h2-bold`}>{title}</h1>
      {button}
    </Flex>
  );
}

export default TitleHeader;
