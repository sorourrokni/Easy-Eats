import styles from "./Banner.module.css";
import BaseIcon from "../icon/BaseIcon";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { useState } from "react";

interface BannerProps {
  banner: string;
  img: string;
}

function Banner({ img, banner }: BannerProps) {
  const [isAddedToFavourites, setIsAddedToCart] = useState(false);
  const [isSelected, setSelected] = useState(false);

  const handleClick = () => {
    setIsAddedToCart(!isAddedToFavourites);
    setSelected(!isSelected);
  };
  return (
    <div className={styles.bannerContainer}>
      <img alt="banner" src={banner} className={styles.banner} />
      {isAddedToFavourites ? (
        <HeartFilled
          className={styles.heartIcon}
          style={{ fontSize: "24px", color: "var(--error-color-100)" }}
          onClick={handleClick}
        />
      ) : (
        <HeartOutlined
          className={styles.heartIcon}
          style={{ fontSize: "24px", color: "black" }}
          onClick={handleClick}
        />
      )}
      <img src={img} alt="restaurant img" className={styles.centeredImage} />
    </div>
  );
}

export default Banner;
