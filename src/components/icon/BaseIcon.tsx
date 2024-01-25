import styles from "./BaseIcon.module.css";

interface BaseIconProps {
  srcSet: string;
  alt: string;
  color?: string;
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
  color,
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
      <img
        className={`${styles.icon} ${isSelected ? styles.selected : ""}`}
        style={{ color: color }}
        loading="lazy"
        srcSet={srcSet}
        alt={alt}
      />
    </button>
  );
}

export default BaseIcon;
