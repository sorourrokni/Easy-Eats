import styles from "./Content.module.css";
import { Flex, Tag } from "antd";
import locationIcon from "../../assets/icons/Location-grey.svg";
import starIcon from "../../assets/icons/Star.svg";
import foodIcon from "../../assets/icons/Silverware.svg";
import costIcon from "../../assets/icons/Money.svg";
import IconCard from "../home/content/IconCard";
import DefaultButton from "../home/button/DefaultButton";
import { useState } from "react";

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

interface BannerProps {
  name: string;
  description: string;
  openTime: number;
  tag?: string;
  buyOfferTag?: number;
  getOfferTag?: number;
  rate: number;
  rateCount: number;
  foodType: string;
  costLevel: number;
  cost?: number;
  distance: number;
}

function Content({
  name,
  description,
  openTime,
  rate,
  rateCount,
  cost,
  costLevel,
  foodType,
  distance,
  tag,
  buyOfferTag,
  getOfferTag,
}: BannerProps) {
  const [selectedButton, setSelectedButton] = useState<string | null>(
    "Popular"
  );

  const handleButtonClick = (textButton: string) => {
    setSelectedButton((prevSelectedButton) => {
      if (prevSelectedButton === textButton) {
        return null;
      } else {
        return textButton;
      }
    });
  };

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
    tagContent = `Buy ${buyOfferTag} get ${getOfferTag} free`;
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
    <Flex className={styles.col}>
      <Flex className={styles.row1}>
        <h1 className="h1-bold">{name}</h1>
        {/* <Flex className={styles.tagRow}>
          <Tag
            className={`${styles.tag} caption2-Semi-bold`}
            style={{ color: tagColor, backgroundColor: tagBgColor }}
          >
            {tagContent}
          </Tag>
        </Flex> */}
      </Flex>
      <p className={`${styles.description} body2-regular`}>{description}</p>
      <Flex className={styles.itemsRow}>
        <IconCard icon={starIcon} rate={rate} rateCount={rateCount}></IconCard>
        <IconCard icon={foodIcon} foodType={foodType}></IconCard>
        <IconCard icon={costIcon} costLevel={level}></IconCard>
        <IconCard icon={locationIcon} distance={distance}></IconCard>
      </Flex>
      <Flex className={styles.buttons}>
        <DefaultButton
          textButton="Popular"
          buttonType="primary"
          onClick={() => handleButtonClick("Popular")}
          isSelected={selectedButton === "Popular"}
        ></DefaultButton>
        <DefaultButton
          textButton="Burgers"
          buttonType="primary"
          onClick={() => handleButtonClick("Burgers")}
          isSelected={selectedButton === "Burgers"}
        ></DefaultButton>
        <DefaultButton
          textButton="Fries"
          buttonType="primary"
          onClick={() => handleButtonClick("Fries")}
          isSelected={selectedButton === "Fries"}
        ></DefaultButton>{" "}
        <DefaultButton
          textButton="Drinks"
          buttonType="primary"
          onClick={() => handleButtonClick("Drinks")}
          isSelected={selectedButton === "Drinks"}
        ></DefaultButton>
        <DefaultButton
          textButton="Wraps"
          buttonType="primary"
          onClick={() => handleButtonClick("Wraps")}
          isSelected={selectedButton === "Wraps"}
        ></DefaultButton>
      </Flex>
    </Flex>
  );
}

export default Content;
