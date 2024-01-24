import { Flex } from "antd";
import styles from "./TabsView.module.css";

interface TabsProps {
  items: any;
}

function TabsView({ items }: TabsProps) {
  return <Flex className={styles.flex}>{items}</Flex>;
}

export default TabsView;
