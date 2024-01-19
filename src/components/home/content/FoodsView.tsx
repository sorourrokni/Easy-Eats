import { List } from "antd";
import styles from "./FoodsView.module.css";
import FoodCard from "./FoodCard";

interface Foods {
  name: string;
  img: string;
  rate: number;
  rateCount: number;
  starIcon: string;
  foodType: string;
  foodIcon: string;
  deliveryTime1: number;
  deliveryTime2: number;
  deliveryIcon: string;
  tag: string;
  buyOffer?: number;
  getOffer?: number;
  cost?: number;
}

interface ListProps {
  foods?: Foods[];
  cols: number;
  gutter: number;
  title: string;
}

function FoodsView({ foods, cols, gutter, title }: ListProps) {
  return (
    <>
      <h1 className={`${styles.header} h2-bold`}>{title}</h1>
      <List
        dataSource={foods}
        className={styles.list}
        grid={{ gutter: gutter, column: cols }}
        renderItem={(food) => (
          <List.Item>
            <FoodCard
              name={food.name}
              img={food.img}
              rate={food.rate}
              rateCount={food.rateCount}
              starIcon={food.starIcon}
              foodType={food.foodType}
              foodIcon={food.foodIcon}
              deliveryTime1={food.deliveryTime1}
              deliveryTime2={food.deliveryTime2}
              deliveryIcon={food.deliveryIcon}
              tag={food.tag}
              getOffer={food.getOffer}
              buyOffer={food.buyOffer}
              cost={food.cost}
            />
          </List.Item>
        )}
      />
    </>
  );
}

export default FoodsView;
