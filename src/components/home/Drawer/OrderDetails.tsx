import { Card, Drawer } from "antd";
import BaseIcon from "../../icon/BaseIcon";
import styles from "./CategoryCard.module.css";
import { useState } from "react";

interface DrawerProps {
  title: string;
  description: string;
  icon: string;
}

function OrderDetails({}: DrawerProps) {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return <Drawer onClose={onClose} open={open}></Drawer>;
}

export default OrderDetails;
