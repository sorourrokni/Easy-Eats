import styles from "./BaseIcon.module.css";

interface BaseIconProps {
  srcSet: string;
  alt: string;
  className?: string;
  onClick?: () => void;
  isSelected?: boolean;
}

function BaseIcon({
  srcSet,
  alt,
  className = "",
  onClick,
  isSelected = false,
}: BaseIconProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`${styles.container} ${
        onClick ? styles.clickableContainer : ""
      } ${isSelected ? styles.selected : ""} ${className}`}
      onClick={handleClick}
    >
      <img className={styles.icon} loading="lazy" srcSet={srcSet} alt={alt} />
    </button>
  );
}

export default BaseIcon;
