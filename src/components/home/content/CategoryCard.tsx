import { Card } from "antd";
import BaseIcon from "../../icon/BaseIcon";
import styles from "./CategoryCard.module.css";

interface CardProps {
  title: string;
  description: string;
  icon: string;
}
function CategoryCard({ title, description, icon }: CardProps) {
  return (
    <Card className={styles.card} hoverable>
      <BaseIcon srcSet={icon} alt="card icon"></BaseIcon>
      <h1 className={`${styles.title} h4-bold`}>{title}</h1>
      <p className={`${styles.description} caption1-regular`}>{description}</p>
    </Card>
  );
}

export default CategoryCard;
