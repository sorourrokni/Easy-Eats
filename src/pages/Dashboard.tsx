import React, { useState } from "react";
import homeIcon from "../assets/icons/Home.svg";
import settingIcon from "../assets/icons/Settings.svg";
import feedIcon from "../assets/icons/Feed.svg";
import documentIcon from "../assets/icons/Document.svg";
import bookmarkIcon from "../assets/icons/Bookmark.svg";
import messageIcon from "../assets/icons/message.svg";
import userIcon from "../assets/icons/userImg.svg";
import menuIcon from "../assets/icons/menuIcon.svg";
import { Layout, theme } from "antd";
import SideLayout from "../components/home/navigationSide/SideLayout";
import User from "../components/home/navigationSide/User";
import CustomMenu from "../components/home/navigationSide/CustomMenu";
import NavHeader from "../components/home/content/NavHeader";
import headerIcon from "../assets/icons/burger.svg";
import SideHeader from "../components/home/navigationSide/SideHeader";
import SubHeader from "../components/home/content/SubHeader";
import locationIcon from "../assets/icons/Location.svg";
import shoppingIcon from "../assets/icons/Shopping-bag.svg";
import bestdealsIcon from "../assets/icons/Coupon.svg";
import searchIcon from "../assets/icons/Search.svg";
import BaseIcon from "../components/icon/BaseIcon";
import shopIcon from "../assets/icons/filterIcon.svg";
import filterIcon from "../assets/icons/shopIcon.svg";
import InputSearch from "../components/input/search/InputSearch";
import { useNavigate } from "react-router-dom";
import DashboardContent from "../components/home/content/DashboardContent";
import { Link } from "react-router-dom";
import RestaurantPage from "./Restaurant";

const { Content, Footer } = Layout;

const iconMappings = {
  Home: homeIcon,
  Explore: feedIcon,
  Favourites: bookmarkIcon,
  Orders: documentIcon,
  Messages: messageIcon,
  Settings: settingIcon,
};

const items = [
  "Home",
  "Explore",
  "Favourites",
  "Orders",
  "Messages",
  "Settings",
].map((itemName, index) => ({
  key: String(index + 1),
  icon: (
    <img
      src={iconMappings[itemName as keyof typeof iconMappings]}
      alt={itemName}
    />
  ),

  label: itemName,
}));

function DashboardPage() {
  const navigate = useNavigate();
  const [selectedContent, setSelectedContent] = useState<React.ReactNode>(
    <DashboardContent pageSrc="/home" title="Home" />
  );

  const [selectedKeys, setSelectedKeys] = useState<string[]>(["1"]);

  const handleMenuSelect = ({ key }: { key: React.Key }) => {
    setSelectedKeys([key.toString()]);

    const menuItem = items.find((item) => item.key === key.toString());
    if (menuItem) {
      switch (menuItem.label) {
        case "Home":
          setSelectedContent(<DashboardContent pageSrc="/home" title="Home" />);
          break;
        case "Explore":
          setSelectedContent(
            <DashboardContent pageSrc="/explore" title="Explore" />
          );
          break;
        case "Favourites":
          setSelectedContent(
            <DashboardContent pageSrc="/favourites" title="Favourites" />
          );
          break;
        case "Orders":
          setSelectedContent(
            <DashboardContent pageSrc="/orders" title="Orders" />
          );
          break;
        case "Messages":
          setSelectedContent(
            <DashboardContent pageSrc="/register" title="Messages" />
          );
          break;
        case "Settings":
          setSelectedContent(
            <DashboardContent pageSrc="/register" title="Settings" />
          );
          break;

        default:
          setSelectedContent(null);
      }
    }
  };

  return (
    <Layout hasSider>
      <SideLayout
        items={
          <>
            <SideHeader title="Nibble" srcSet={headerIcon}></SideHeader>
            <CustomMenu
              items={items}
              selectedKeys={selectedKeys}
              onSelect={handleMenuSelect}
            />
            <User
              userIcon={userIcon}
              menuIcon={menuIcon}
              name="Mark Clarke"
              email="markclarke@gmail.com"
            ></User>
          </>
        }
      ></SideLayout>
      <Layout style={{ marginLeft: "20%" }}>
        <NavHeader
          items={
            <>
              <SubHeader
                title={"San Francisco, California"}
                prefixIcon={locationIcon}
                suffixIcon={menuIcon}
              ></SubHeader>
              <SubHeader
                title={"Pick up"}
                prefixIcon={shoppingIcon}
                suffixIcon={menuIcon}
              ></SubHeader>
              <SubHeader
                title={"Best deals"}
                prefixIcon={bestdealsIcon}
                suffixIcon={menuIcon}
              ></SubHeader>
              <InputSearch
                icon={searchIcon}
                placeholder="Search for anything…"
              ></InputSearch>
              <BaseIcon srcSet={filterIcon} alt="filterIcon"></BaseIcon>
              <BaseIcon srcSet={shopIcon} alt="shopIcon"></BaseIcon>
            </>
          }
        ></NavHeader>
        <Content>
          <div
            style={{
              margin: 0,
              minHeight: 280,
              background: "#ffffff",
              overflow: "initial",
            }}
          >
            {selectedContent}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ui web ©{new Date().getFullYear()} Created by UniTeam
        </Footer>
      </Layout>
    </Layout>
  );
}

export default DashboardPage;
