import { List } from "antd";
import CategoryCard from "./CategoryCard";
import styles from "./CategoryView.module.css";

interface Category {
  title: string;
  options: string;
  icon: string;
}

interface ListProps {
  categories: Category[];
  cols: number;
  gutter: number;
  title: string;
}

function CategoryView({ categories, cols, gutter, title }: ListProps) {
  return (
    <>
      <h1 className={`${styles.header} h2-bold`}>{title}</h1>
      <List
        dataSource={categories}
        className={styles.list}
        grid={{ gutter: gutter, column: cols }}
        renderItem={(category) => (
          <List.Item>
            <CategoryCard
              title={category.title}
              description={category.options}
              icon={category.icon}
            />
          </List.Item>
        )}
      />
    </>
  );
}

export default CategoryView;
