import { Menu } from "antd";
import React from "react";
import styles from "./CustomMenu.module.css";

interface MenuItem {
  key: string;
  icon: JSX.Element;
  label: string;
}

interface MenuProps {
  items: MenuItem[];
  selectedKeys: string[];
  onSelect: (params: any) => void;
}

function CustomMenu({ items, selectedKeys, onSelect }: MenuProps) {
  return (
    <Menu
      className={styles.customMenu}
      mode="inline"
      defaultSelectedKeys={["1"]}
      selectedKeys={selectedKeys}
      onSelect={onSelect}
      items={items}
    ></Menu>
  );
}

export default CustomMenu;
