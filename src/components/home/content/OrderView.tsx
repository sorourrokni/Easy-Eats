import { List } from "antd";
import styles from "./FoodsView.module.css";
import UpComingOrderCard from "./UpComingOrderCard";

interface UpComingOrders {
  name: string;
  time: number;
  id: string;
  percent1: number;
  percent2: number;
  percent3: number;
}

interface ListProps {
  orders?: UpComingOrders[];
  cols: number;
  gutter: number;
}

function OrderView({ orders, cols, gutter }: ListProps) {
  return (
    <>
      <List
        dataSource={orders}
        className={styles.list}
        grid={{ gutter: gutter, column: cols }}
        renderItem={(order) => (
          <List.Item>
            <UpComingOrderCard
              name={order.name}
              id={order.id}
              time={order.time}
              percent1={order.percent1}
              percent2={order.percent2}
              percent3={order.percent3}
            />
          </List.Item>
        )}
      />
    </>
  );
}

export default OrderView;
