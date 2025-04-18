import { List } from "antd";
import styles from "./FoodsView.module.css";
import FoodCard from "./FoodCard";

interface Foods {
  name: string;
  img: string;
  rate: number;
  rateCount: number;
  foodType: string;
  deliveryTime1: number;
  deliveryTime2: number;
  tag: string;
  buyOffer?: number;
  getOffer?: number;
  cost?: number;
  selected?: boolean;
}

interface ListProps {
  foods?: Foods[];
  cols: number;
  gutter: number;
}

const handleShowMoreClick = () => {
  // navigate("/login");
  // console.log("Sign In clicked!");
};

function FoodsView({ foods, cols, gutter }: ListProps) {
  return (
    <>
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
              foodType={food.foodType}
              deliveryTime1={food.deliveryTime1}
              deliveryTime2={food.deliveryTime2}
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
