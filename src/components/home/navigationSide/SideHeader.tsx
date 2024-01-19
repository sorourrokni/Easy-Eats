import { Flex } from "antd";
import BaseIcon from "../../icon/BaseIcon";
import styles from "./SideHeader.module.css";

interface SideHeaderProps {
  title: string;
  srcSet: string;
}

function SideHeader({ title, srcSet }: SideHeaderProps) {
  return (
    <Flex className={styles.flex}>
      <BaseIcon srcSet={srcSet} alt={"headerIcon"}></BaseIcon>
      <h1 className={`${styles.title} h3-bold`}>{title}</h1>
    </Flex>
  );
}

export default SideHeader;
