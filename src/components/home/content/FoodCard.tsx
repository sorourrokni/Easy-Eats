import { Card, Flex, Tag } from "antd";
import styles from "./FoodCard.module.css";
import IconCard from "./IconCard";
import addToCardIC from "../../../assets/icons/add-to-cart-3046.svg";
import BaseIcon from "../../icon/BaseIcon";
import Icon from "@ant-design/icons/lib/components/Icon";
import { ShoppingCartOutlined, ShoppingOutlined } from "@ant-design/icons";
import { useState } from "react";

const TagTypes = {
  FREE: "Free",
  OFFER: "Offer",
  NOTFREE: "Delivery",
};

interface CardProps {
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
function FoodCard({
  name,
  starIcon,
  rate,
  rateCount,
  foodType,
  foodIcon,
  deliveryTime1,
  deliveryTime2,
  deliveryIcon,
  img,
  tag,
  cost,
  buyOffer,
  getOffer,
}: CardProps) {
  let tagContent;
  let tagBgColor;
  let tagColor;

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

  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isSelected, setSelected] = useState(false);

  const handleClick = () => {
    setIsAddedToCart(!isAddedToCart);
    setSelected(!isSelected);
  };

  return (
    <Card
      size="small"
      className={styles.card}
      hoverable
      cover={<img className={styles.img} alt="food img" src={img} />}
    >
      <Flex className={styles.col}>
        <Flex className={styles.row1}>
          <h1 className={`${styles.title} h4-bold`}>{name}</h1>
          <Tag
            className={`${styles.tag} caption2-Semi-bold`}
            style={{ color: tagColor, backgroundColor: tagBgColor }}
          >
            {tagContent}
          </Tag>
        </Flex>
        <Flex className={styles.row2}>
          <IconCard
            icon={starIcon}
            rate={rate}
            rateCount={rateCount}
          ></IconCard>
          <IconCard icon={foodIcon} foodType={foodType}></IconCard>
          <IconCard
            icon={deliveryIcon}
            deliveryTime1={deliveryTime1}
            deliveryTime2={deliveryTime2}
          ></IconCard>
          {isAddedToCart ? (
            <ShoppingOutlined
              style={{ fontSize: "24px", color: "var(--secondary-color-100)" }}
              onClick={handleClick}
            />
          ) : (
            <ShoppingCartOutlined
              style={{ fontSize: "24px", color: "var(--primary-color-100)" }}
              onClick={handleClick}
            />
          )}
        </Flex>
      </Flex>
    </Card>
  );
}

export default FoodCard;
