import { Card, Flex, Progress, Tag } from "antd";
import BaseIcon from "../../icon/BaseIcon";
import styles from "./UpComingOrderCard.module.css";
import DefaultButton from "../button/DefaultButton";
import timeIcon from "../../../assets/icons/Clock.svg";

interface CardProps {
  name: string;
  date: string;
  time: string;
  tag: string;
  foods: Foods[];
}

const TagTypes = {
    Completed: "Free",
    OFFER: "Canceled",
    NOTFREE: "Delivery",
  };

interface Foods {
  name: string;
  count: number;
}
function PreviousOrderCard({ name, date, time, foods }: CardProps) {
  return (
    <Card
      size="small"
      className={styles.card}
      hoverable
      bodyStyle={{ padding: "16px", width: "100%" }}
    >
      <Flex className={styles.row1}>
        <h4 className={`h4-bold`}>{name}</h4>
        <Tag>
            
        </Tag>
      </Flex>
      <Flex className={styles.row2}>
        <Flex className={styles.row2}>
          <BaseIcon srcSet={timeIcon} alt={""}></BaseIcon>
          <p className={`${styles.arrival} body3-regular`}>Estimated arrival</p>
          <h2 className={`${styles.time} h2-bold`}>{`${time} min`}</h2>
          <Flex className={styles.col}></Flex>
        </Flex>
        <DefaultButton
          textButton="Track"
          buttonType="primary"
          onClick={() => {}}
          isSelected={true}
        ></DefaultButton>
      </Flex>
      <Flex className={styles.col}></Flex>
    </Card>
  );
}

export default PreviousOrderCard;
