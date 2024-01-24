import { Card, Flex, Progress } from "antd";
import BaseIcon from "../../icon/BaseIcon";
import styles from "./UpComingOrderCard.module.css";
import DefaultButton from "../button/DefaultButton";
import timeIcon from "../../../assets/icons/Clock.svg";

interface CardProps {
  name: string;
  id: string;
  time: number;
  percent1: number;
  percent2: number;
  percent3: number;
}
function UpComingOrderCard({
  name,
  id,
  time,
  percent1,
  percent2,
  percent3,
}: CardProps) {
  return (
    <Card
      size="small"
      className={styles.card}
      hoverable
      bodyStyle={{ padding: "16px", width: "100%" }}
    >
      <Flex className={styles.row1}>
        <h4 className={`h4-bold`}>{name}</h4>
        <p className={`body3-regular`}>{id}</p>
      </Flex>
      <Flex className={styles.row1}>
        <Flex className={styles.row2}>
          <BaseIcon srcSet={timeIcon} alt={""}></BaseIcon>
          <Flex className={styles.col}>
            <p className={`${styles.arrival} body3-regular`}>
              Estimated arrival
            </p>
            <h2 className={`${styles.time} h2-bold`}>{`${time} min`}</h2>
          </Flex>
        </Flex>
        <DefaultButton
          textButton="Track"
          buttonType="primary"
          onClick={() => {}}
          isSelected={true}
        ></DefaultButton>
      </Flex>
      <Flex className={styles.row3}>
        <Progress
          style={{ width: "28px", margin: "0" }}
          percent={percent1}
          status={percent1 > 0 && percent1 < 100 ? "active" : "normal"}
          showInfo={false}
          strokeColor={"var(--secondary-color-100)"}
        />
        <Progress
          style={{ width: "64px", margin: "0" }}
          percent={percent2}
          status={percent2 > 0 && percent2 < 100 ? "active" : "normal"}
          showInfo={false}
          strokeColor={"var(--secondary-color-100)"}
        />
        <Progress
          style={{ width: "200px", margin: "0" }}
          percent={percent3}
          status={percent3 > 0 && percent3 < 100 ? "active" : "normal"}
          showInfo={false}
          strokeColor={"var(--secondary-color-100)"}
        />
      </Flex>
    </Card>
  );
}

export default UpComingOrderCard;
