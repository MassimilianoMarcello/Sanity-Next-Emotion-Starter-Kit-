import React from "react";
import styles from "./CategoryFilter.module.scss";

interface CategoryFilterProps {
  selectedCategory: string | null;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>;
  importanceOrder: string[];
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  setSelectedCategory,
  importanceOrder,
}) => {
  const handleClearCategoryFilter = () => {
    setSelectedCategory(null);
  };

  return (
    <div className={styles.filterButtons}>
      {importanceOrder.map((category) => (
        <button
          key={category}
          className={`${styles.filterButton} ${
            selectedCategory === category ? styles.active : ""
          }`}
          onClick={() =>
            setSelectedCategory((prev) => (prev === category ? null : category))
          }
        >
          {category}
        </button>
      ))}
      <button className={styles.clearButton} onClick={handleClearCategoryFilter}>
        Clear Category Filter
      </button>
    </div>
  );
};

export default CategoryFilter;