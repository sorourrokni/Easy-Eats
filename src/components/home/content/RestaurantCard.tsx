import { Card, Flex, Tag } from "antd";
import styles from "./RestaurantCard.module.css";
import IconCard from "./IconCard";

const TagTypes = {
  FREE: "Free",
  OFFER: "Offer",
  NOTFREE: "Delivery",
};

const CostLevel = {
  1: "$",
  2: "$$",
  3: "$$$",
};
interface CardProps {
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
function FoodCard({
  name,
  starIcon,
  rate,
  rateCount,
  foodType,
  foodIcon,
  costLevel,
  costIcon,
  img,
  tag,
  cost,
  buyOffer,
  getOffer,
  locationIcon,
  distance,
}: CardProps) {
  let tagContent;
  let tagBgColor;
  let tagColor;
  let level;

  switch (tag) {
    case TagTypes.FREE:
      tagColor = "var(--primary-color-100)";
      tagBgColor = "var(--primary-color-10)";
      tagContent = "Free delivery";
      break;
    case TagTypes.OFFER:
      tagColor = "var(--secondary-color-100)";
      tagBgColor = "var(--secondary-color-10)";
      tagContent = "Offer";
      break;
    case TagTypes.NOTFREE:
      tagColor = "var(--primary-color-100)";
      tagBgColor = "var(--primary-color-10)";
      tagContent = "Delivery";
      break;
    default:
      tagColor = "var(--primary-color-100)";
      tagBgColor = "var(--primary-color-10)";
      tagContent = "Free delivery";
  }

  if (tagContent == "Offer") {
    tagContent = `Buy ${buyOffer} get ${getOffer} free`;
  } else if (tagContent == "Delivery") {
    tagContent = `$ ${cost} Delivery`;
  }

  switch (costLevel) {
    case 1:
      level = CostLevel[1];
      break;
    case 2:
      level = CostLevel[2];
      break;
    case 3:
      level = CostLevel[3];
      break;
    default:
      level = CostLevel[1];
  }

  return (
    <Card
      size="small"
      className={styles.card}
      hoverable
      bodyStyle={{ padding: "0", width: "100%" }}
    >
      <Flex className={styles.row1}>
        <img className={styles.img} alt="restaurant img" src={img} />
        <Flex className={styles.col}>
          <h1 className={`${styles.title} h4-bold`}>{name}</h1>

          <Flex className={styles.row2}>
            <IconCard
              icon={starIcon}
              rate={rate}
              rateCount={rateCount}
            ></IconCard>
            <IconCard icon={foodIcon} foodType={foodType}></IconCard>
            <IconCard icon={costIcon} costLevel={level}></IconCard>
          </Flex>
          <Flex className={styles.row3}>
            <Tag
              className={`${styles.tag} caption2-Semi-bold`}
              style={{ color: tagColor, backgroundColor: tagBgColor }}
            >
              {tagContent}
            </Tag>
            <IconCard icon={locationIcon} distance={distance}></IconCard>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}

export default FoodCard;
