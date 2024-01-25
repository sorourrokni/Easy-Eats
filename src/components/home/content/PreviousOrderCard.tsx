import { Card, Flex, List, Tag } from "antd";
import styles from "./PreviousOrderCard.module.css";
import DefaultButton from "../button/DefaultButton";
import timeIcon from "../../../assets/icons/Clock.svg";
import IconCard from "./IconCard";
import dateIcon from "../../../assets/icons/Calendar.svg";
import ItemCounts from "./ItemCounts";

interface CardProps {
  name: string;
  date: string;
  time: string;
  tag: string;
  items: Items[];
  onDetailsClick: () => void;
}

const TagTypes = {
  COMPLETED: "Completed",
  CANCELED: "Canceled",
};

interface Items {
  name: string;
  count: number;
}
function PreviousOrderCard({
  name,
  date,
  time,
  items,
  tag,
  onDetailsClick,
}: CardProps) {
  let tagColor;
  let tagBgColor;
  let tagContent;

  switch (tag) {
    case TagTypes.CANCELED:
      tagColor = "var(--error-color-100)";
      tagBgColor = "var(--error-color-10)";
      tagContent = "Canceled";
      break;
    case TagTypes.COMPLETED:
      tagColor = "var(--success-color-100)";
      tagBgColor = "var(--success-color-10)";
      tagContent = "Completed";
      break;
    default:
      tagColor = "var(--success-color-100)";
      tagBgColor = "var(--success-color-10)";
      tagContent = "Completed";
  }
  return (
    <Card
      size="small"
      className={styles.card}
      hoverable
      bodyStyle={{ padding: "16px", width: "100%" }}
    >
      <Flex className={styles.row1}>
        <h4 className={`h4-bold`}>{name}</h4>
        <Tag
          className={`${styles.tag} caption2-Semi-bold`}
          style={{ color: tagColor, backgroundColor: tagBgColor }}
        >
          {tagContent}
        </Tag>
      </Flex>

      <Flex className={styles.row2}>
        <IconCard icon={dateIcon} date={date}></IconCard>
        <IconCard icon={timeIcon} time={time}></IconCard>
      </Flex>
      <List
        dataSource={items}
        className={styles.list}
        grid={{ column: 1 }}
        renderItem={(item) => (
          <List.Item>
            <ItemCounts name={item.name} count={item.count} />
          </List.Item>
        )}
      />

      <Flex className={styles.row3}>
        <DefaultButton
          textButton="Details"
          buttonType="secondary"
          onClick={onDetailsClick}
          isSelected={true}
          className={styles.button}
        ></DefaultButton>
        <DefaultButton
          textButton="Get help"
          buttonType="secondary"
          onClick={() => {}}
          className={styles.button}
        ></DefaultButton>
      </Flex>
    </Card>
  );
}

export default PreviousOrderCard;
