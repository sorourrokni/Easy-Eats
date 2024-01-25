import { List } from "antd";
import styles from "./FoodsView.module.css";
import PreviousOrderCard from "./PreviousOrderCard";

interface PreviousOrders {
  name: string;
  date: string;
  time: string;
  tag: string;
  items: Items[];
  onDetailsClick: () => void;
}

interface Items {
  name: string;
  count: number;
}

interface ListProps {
  orders?: PreviousOrders[];
  cols: number;
  gutter: number;
}

function PreOrderView({ orders, cols, gutter }: ListProps) {
  return (
    <>
      <List
        dataSource={orders}
        className={styles.list}
        grid={{ gutter: gutter, column: cols }}
        renderItem={(order) => (
          <List.Item>
            <PreviousOrderCard
              name={order.name}
              date={order.date}
              time={order.time}
              tag={order.tag}
              items={order.items}
              onDetailsClick={order.onDetailsClick}
            />
          </List.Item>
        )}
      />
    </>
  );
}

export default PreOrderView;
