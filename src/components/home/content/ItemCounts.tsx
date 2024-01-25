import { Flex } from "antd";
import styles from "./ItemCounts.module.css";

interface ItemsProps {
  name: string;
  count: number;
}
function ItemCounts({ name, count }: ItemsProps) {
  return (
    <Flex className={styles.row}>
      <p className={styles.count}>{count}</p>
      <h6 className={`${styles.name} h6-bold`}>{name}</h6>
    </Flex>
  );
}

export default ItemCounts;
