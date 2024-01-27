import { useNavigate } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";
import { Divider, Flex } from "antd";
import Item from "../components/home/content/Item";
import profileIC from "../assets/icons/setting-Profile.svg";
import bookmarkIC from "../assets/icons/setting-Bookmark.svg";
import mailIC from "../assets/icons/setting-Mail.svg";
import paymentIC from "../assets/icons/setting-Wallet.svg";
import cardIC from "../assets/icons/Card.svg";
import supportIC from "../assets/icons/Support.svg";

import inviteIC from "../assets/icons/Split-order.svg";
import moneyIC from "../assets/icons/setting-Money.svg";

import styles from "../components/settings/Content.module.css";
import TitleHeader from "../components/home/content/TitleHeader";
import { RightOutlined } from "@ant-design/icons";

interface SignInData {
  email: string;
  password: string;
  remember: boolean;
}

function SettingsPage() {
  const navigate = useNavigate();

  const onFinish = async (values: SignInData) => {
    //   try {
    //     const response = await fetch("/login", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(values),
    //     });
    //     if (!response.ok) {
    //       throw new Error("Login failed");
    //     }
    //     const result = await response.json();
    //     console.log("Login successful:", result);
    //     navigate("/");
    //   } catch (error: any) {
    //     console.error("Error during login:", error.message);
    //   }
  };

  return (
    <DashboardLayout
      children={
        <Flex className={styles.col}>
          <TitleHeader className={styles.header} title="Settings"></TitleHeader>

          <TitleHeader
            title="General"
            className={`${styles.header} body2-regular`}
          ></TitleHeader>
          <Flex className={styles.row}>
            <Item icon={profileIC} title="Personal information"></Item>
            <RightOutlined
              style={{ fontSize: "16px", color: "var(--default-icon-color)" }}
              onClick={() => {}}
            ></RightOutlined>
          </Flex>
          <Divider></Divider>
          <Flex className={styles.row}>
            <Item icon={bookmarkIC} title="Saved addresses"></Item>
            <RightOutlined
              style={{ fontSize: "16px", color: "var(--default-icon-color)" }}
              onClick={() => {}}
            ></RightOutlined>
          </Flex>
          <Divider></Divider>
          <Flex className={styles.row}>
            <Item icon={mailIC} title="Marketing preferences"></Item>
            <RightOutlined
              style={{ fontSize: "16px", color: "var(--default-icon-color)" }}
              onClick={() => {}}
            ></RightOutlined>
          </Flex>
          <Divider></Divider>

          <TitleHeader
            title="Payments"
            className={`${styles.header} body2-regular`}
          ></TitleHeader>
          <Flex className={styles.row}>
            <Item icon={paymentIC} title="Payment methods"></Item>
            <RightOutlined
              style={{ fontSize: "16px", color: "var(--default-icon-color)" }}
              onClick={() => {}}
            ></RightOutlined>
          </Flex>
          <Divider></Divider>
          <Flex className={styles.row}>
            <Item icon={cardIC} title="My cards"></Item>
            <RightOutlined
              style={{ fontSize: "16px", color: "var(--default-icon-color)" }}
              onClick={() => {}}
            ></RightOutlined>
          </Flex>
          <Divider></Divider>

          <TitleHeader
            title="Other"
            className={`${styles.header} body2-regular`}
          ></TitleHeader>
          <Flex className={styles.row}>
            <Item icon={supportIC} title="Support"></Item>
            <RightOutlined
              style={{ fontSize: "16px", color: "var(--default-icon-color)" }}
              onClick={() => {}}
            ></RightOutlined>
          </Flex>
          <Divider></Divider>
          <Flex className={styles.row}>
            <Item icon={inviteIC} title="Invite a friend"></Item>
            <RightOutlined
              style={{ fontSize: "16px", color: "var(--default-icon-color)" }}
              onClick={() => {}}
            ></RightOutlined>
          </Flex>
          <Divider></Divider>
          <Flex className={styles.row}>
            <Item icon={moneyIC} title="Discounts"></Item>
            <RightOutlined
              style={{ fontSize: "16px", color: "var(--default-icon-color)" }}
              onClick={() => {}}
            ></RightOutlined>
          </Flex>
          <Divider></Divider>
        </Flex>
      }
      menuItem={"Settings"}
    ></DashboardLayout>
  );
}

export default SettingsPage;
