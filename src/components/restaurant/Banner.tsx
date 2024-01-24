import styles from "./Banner.module.css";
import BaseIcon from "../icon/BaseIcon";

interface BannerProps {
  icon: string;
  banner: string;
  img: string;
}

function Banner({ icon, img, banner }: BannerProps) {
  return (
    <div className={styles.bannerContainer}>
      <img alt="banner" src={banner} className={styles.banner} />
      <BaseIcon srcSet={icon} alt="like icon" className={styles.likeIcon} />
      <img src={img} alt="restaurant img" className={styles.centeredImage} />
    </div>
  );
}

export default Banner;
