import { List } from "antd";
import styles from "./FoodsView.module.css";
import RestaurantCard from "./RestaurantCard";

interface Restaurants {
  name: string;
  img: string;
  rate: number;
  rateCount: number;
  foodType: string;
  costLevel: number;
  tag: string;
  buyOffer?: number;
  getOffer?: number;
  cost?: number;
  distance: number;
}

interface ListProps {
  restaurants?: Restaurants[];
  cols: number;
  gutter: number;
  onClick: () => void;
}

function RestaurantView({ restaurants, cols, gutter, onClick }: ListProps) {
  return (
    <>
      <List
        dataSource={restaurants}
        className={styles.list}
        grid={{ gutter: gutter, column: cols }}
        renderItem={(food) => (
          <List.Item onClick={onClick}>
            <RestaurantCard
              name={food.name}
              img={food.img}
              rate={food.rate}
              rateCount={food.rateCount}
              foodType={food.foodType}
              tag={food.tag}
              getOffer={food.getOffer}
              buyOffer={food.buyOffer}
              cost={food.cost}
              costLevel={food.costLevel}
              distance={food.distance}
            />
          </List.Item>
        )}
      />
    </>
  );
}

export default RestaurantView;
