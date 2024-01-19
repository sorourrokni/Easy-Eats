import Sider from "antd/es/layout/Sider";
import { Layout } from "antd";
import { Footer } from "antd/es/layout/layout";
import styles from "./SideLayout.module.css";

interface SideLayoutProps {
  items: any;
}

function SideLayout({ items }: SideLayoutProps) {
  return (
    <Sider
      width="20%"
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <Layout className={styles.layout}>{items}</Layout>
    </Sider>
  );
}

export default SideLayout;
