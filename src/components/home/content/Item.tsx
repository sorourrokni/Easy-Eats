import { Flex } from "antd";
import BaseIcon from "../../icon/BaseIcon";
import styles from "./Item.module.css";

interface ItemProps {
  icon: string;
  title?: string;
  time?: string;
}

function Item({ icon, title }: ItemProps) {
  return (
    <Flex className={styles.row2}>
      <BaseIcon srcSet={icon} alt={"food icon"}></BaseIcon>
      <h4 className={`${styles.content} h4-bold`}>{title}</h4>
    </Flex>
  );
}

export default Item;
