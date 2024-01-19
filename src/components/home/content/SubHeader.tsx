import { Flex } from "antd";
import BaseIcon from "../../icon/BaseIcon";
import styles from "./SubHeader.module.css";

interface UserProps {
  title: string;
  prefixIcon: string;
  suffixIcon: string;
}

function SubHeader({ title, prefixIcon, suffixIcon }: UserProps) {
  return (
    <Flex className={styles.flex}>
      <BaseIcon srcSet={prefixIcon} alt="UserIcon"></BaseIcon>
      <header>
        <h5 className={`${styles.title} h5-semi-bold`}>{title}</h5>
      </header>
      <BaseIcon srcSet={suffixIcon} alt="UserIcon"></BaseIcon>
    </Flex>
  );
}

export default SubHeader;
