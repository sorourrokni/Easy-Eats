import { List } from "antd";
import styles from "./FoodsView.module.css";
import RestaurantCard from "./RestaurantCard";

interface Restaurants {
  name: string;
  img: string;
  rate: number;
  rateCount: number;
  starIcon: string;
  foodType: string;
  foodIcon: string;
  costLevel: number;
  costIcon: string;
  tag: string;
  buyOffer?: number;
  getOffer?: number;
  cost?: number;
  distance: number;
  locationIcon: string;
}

interface ListProps {
  restaurants?: Restaurants[];
  cols: number;
  gutter: number;
  title: string;
}

function RestaurantView({ restaurants, cols, gutter, title }: ListProps) {
  return (
    <>
      <h1 className={`${styles.header} h2-bold`}>{title}</h1>
      <List
        dataSource={restaurants}
        className={styles.list}
        grid={{ gutter: gutter, column: cols }}
        renderItem={(food) => (
          <List.Item>
            <RestaurantCard
              name={food.name}
              img={food.img}
              rate={food.rate}
              rateCount={food.rateCount}
              starIcon={food.starIcon}
              foodType={food.foodType}
              foodIcon={food.foodIcon}
              tag={food.tag}
              getOffer={food.getOffer}
              buyOffer={food.buyOffer}
              cost={food.cost}
              costLevel={food.costLevel}
              costIcon={food.costIcon}
              distance={food.distance}
              locationIcon={food.locationIcon}
            />
          </List.Item>
        )}
      />
    </>
  );
}

export default RestaurantView;
