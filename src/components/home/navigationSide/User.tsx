import { Flex } from "antd";
import BaseIcon from "../../icon/BaseIcon";
import styles from "./User.module.css";

interface UserProps {
  name: string;
  email: string;
  userIcon: string;
  menuIcon: string;
}

function User({ name, email, userIcon, menuIcon }: UserProps) {
  return (
    <Flex className={styles.flex}>
      <BaseIcon srcSet={userIcon} alt="UserIcon"></BaseIcon>
      <header className={styles.header}>
        <h1 className={`${styles.name} h5-bold`}>{name}</h1>
        <p className={`${styles.email} caption2-regular`}>{email}</p>
      </header>
      <BaseIcon srcSet={menuIcon} alt="UserIcon"></BaseIcon>
    </Flex>
  );
}

export default User;
