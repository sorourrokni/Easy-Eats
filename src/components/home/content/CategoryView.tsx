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
}

function CategoryView({ categories, cols, gutter }: ListProps) {
  return (
    <>
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
