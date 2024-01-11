import { Image } from "antd";
import styles from "./SideCover.module.css";

interface ImageProps {
  src: string;
  alt: string;
}
const SideCover = ({ src, alt }: ImageProps) => {
  return <Image className={styles.cover} src={src} alt={alt} />;
};

export default SideCover;
