import { Flex } from "antd";
import BaseIcon from "../../icon/BaseIcon";
import styles from "./IconCard.module.css";

interface IconCardProps {
  icon: string;
  rateCount?: number;
  rate?: number;
  foodType?: string;
  costLevel?: string;
  distance?: number;
  deliveryTime1?: number;
  deliveryTime2?: number;
}

function IconCard({
  rateCount,
  rate,
  icon,
  foodType,
  costLevel,
  distance,
  deliveryTime1,
  deliveryTime2,
}: IconCardProps) {
  let content;

  if (rate && rateCount) {
    content = `${rate} (${rateCount})`;
  } else if (foodType) {
    content = foodType;
  } else if (costLevel) {
    content = costLevel;
  } else if (distance) {
    content = `${distance} km`;
  } else if (deliveryTime1 && deliveryTime2) {
    content = `${deliveryTime1} - ${deliveryTime2} min`;
  }

  return (
    <Flex className={styles.flex}>
      <BaseIcon srcSet={icon} alt={"food icon"}></BaseIcon>
      <p className={`${styles.content} caption1-regular`}>{content}</p>
    </Flex>
  );
}

export default IconCard;
