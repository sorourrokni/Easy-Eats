import React, { useState } from "react";
import homeIcon from "../assets/icons/Home.svg";
import settingIcon from "../assets/icons/Settings.svg";
import feedIcon from "../assets/icons/Feed.svg";
import documentIcon from "../assets/icons/Document.svg";
import bookmarkIcon from "../assets/icons/Bookmark.svg";
import messageIcon from "../assets/icons/message.svg";
import userIcon from "../assets/icons/userImg.svg";
import menuIcon from "../assets/icons/menuIcon.svg";
import { Input, Layout, theme } from "antd";
import SideLayout from "../components/home/navigationSide/SideLayout";
import User from "../components/home/navigationSide/User";
import CategoryView from "../components/home/content/CategoryView";
import nearestIcon from "../assets/icons/NearestIcon.svg";
import pickUpIcon from "../assets/icons/PickUpIcon.svg";
import dineInIcon from "../assets/icons/dineIn.svg";
import highClassIcon from "../assets/icons/highClass.svg";
import fastDeliveryIcon from "../assets/icons/fastDelivery.svg";
import popularIcon from "../assets/icons/popular.svg";
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
import foodImg1 from "../assets/images/food-1.svg";
import foodImg2 from "../assets/images/food-2.svg";
import foodImg3 from "../assets/images/food-3.svg";
import foodImg4 from "../assets/images/food-4.svg";
import foodImg5 from "../assets/images/food-5.svg";
import foodImg6 from "../assets/images/food-6.svg";
import InputSearch from "../components/input/search/InputSearch";
import FoodsView from "../components/home/content/FoodsView";
import deliveryIcon from "../assets/icons/Delivery.svg";
import foodIcon from "../assets/icons/Silverware.svg";
import starIcon from "../assets/icons/Star.svg";
import RestaurantView from "../components/home/content/RestaurantView";
import restaurantImg1 from "../assets/images/Burger King.png";
import restaurantImg2 from "../assets/images/Carrows Restaurant.png";
import restaurantImg3 from "../assets/images/KFC.png";
import restaurantImg4 from "../assets/images/Domino’s Pizza.png";
import restaurantImg5 from "../assets/images/McDonald’s.png";
import restaurantImg6 from "../assets/images/Pizza Hut.png";
import moneyIcon from "../assets/icons/Money.svg";
import distanceIcon from "../assets/icons/Location-withoutBorder.svg";

const { Header, Content, Footer } = Layout;

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

interface Category {
  title: string;
  options: string;
  icon: string;
}
const categories: Category[] = [
  {
    title: "Popular",
    options: "286+ options",
    icon: popularIcon,
  },
  {
    title: "Fast delivery",
    options: "1,843+ options",
    icon: fastDeliveryIcon,
  },
  {
    title: "High class",
    options: "25+ options",
    icon: highClassIcon,
  },
  {
    title: "Dine in",
    options: "182+ options",
    icon: dineInIcon,
  },
  {
    title: "Pick up",
    options: "3,548+ options",
    icon: pickUpIcon,
  },
  {
    title: "Nearest",
    options: "44+ options",
    icon: nearestIcon,
  },
];

interface Foods {
  name: string;
  img: string;
  rate: number;
  rateCount: number;
  starIcon: string;
  foodType: string;
  foodIcon: string;
  deliveryTime1: number;
  deliveryTime2: number;
  deliveryIcon: string;
  tag: string;
  buyOffer?: number;
  getOffer?: number;
  cost?: number;
}
const foods: Foods[] = [
  {
    name: "Gigantic Rodeo Burger",
    img: foodImg1,
    rate: 4.3,
    rateCount: 104,
    starIcon: starIcon,
    foodType: "Burger",
    foodIcon: foodIcon,
    deliveryTime1: 45,
    deliveryTime2: 55,
    deliveryIcon: deliveryIcon,
    tag: "Delivery",
    cost: 2.99,
  },
  {
    name: "Delicious Cheese Pie",
    img: foodImg2,
    rate: 4.9,
    rateCount: 31,
    starIcon: starIcon,
    foodType: "Pie",
    foodIcon: foodIcon,
    deliveryTime1: 15,
    deliveryTime2: 25,
    deliveryIcon: deliveryIcon,
    tag: "Offer",
    buyOffer: 1,
    getOffer: 1,
  },
  {
    name: "Chef’s Burger Deluxe",
    img: foodImg3,
    rate: 4.6,
    rateCount: 1006,
    starIcon: starIcon,
    foodType: "Burger",
    foodIcon: foodIcon,
    deliveryTime1: 20,
    deliveryTime2: 30,
    deliveryIcon: deliveryIcon,
    tag: "Free",
  },
  {
    name: "Peperoni Pie",
    img: foodImg4,
    rate: 4.4,
    rateCount: 543,
    starIcon: starIcon,
    foodType: "Pie",
    foodIcon: foodIcon,
    deliveryTime1: 30,
    deliveryTime2: 45,
    deliveryIcon: deliveryIcon,
    tag: "Free",
  },
  {
    name: "Natural Vegetable Rice",
    img: foodImg5,
    rate: 4.2,
    rateCount: 8,
    starIcon: starIcon,
    foodType: "Rice",
    foodIcon: foodIcon,
    deliveryTime1: 35,
    deliveryTime2: 40,
    deliveryIcon: deliveryIcon,
    tag: "Delivery",
    cost: 3.45,
  },
  {
    name: "Vegetable Skewers",
    img: foodImg6,
    rate: 4.3,
    rateCount: 45,
    starIcon: starIcon,
    foodType: "Skewers",
    foodIcon: foodIcon,
    deliveryTime1: 10,
    deliveryTime2: 20,
    deliveryIcon: deliveryIcon,
    tag: "Delivery",
    cost: 4.99,
  },
];

interface Restaurants {
  name: string;
  img: string;
  rate: number;
  rateCount: number;
  starIcon: string;
  foodType: string;
  foodIcon: string;
  costLevel: number;
  costIcon: string;
  tag: string;
  buyOffer?: number;
  getOffer?: number;
  cost?: number;
  distance: number;
  locationIcon: string;
}
const restaurants: Restaurants[] = [
  {
    name: "Burger King",
    img: restaurantImg1,
    rate: 4.8,
    rateCount: 1873,
    starIcon: starIcon,
    foodType: "Skewers",
    foodIcon: foodIcon,
    costLevel: 1,
    costIcon: moneyIcon,
    tag: "Free",
    locationIcon: locationIcon,
    distance: 4.3,
  },
  {
    name: "Burger King",
    img: restaurantImg2,
    rate: 4.8,
    rateCount: 1873,
    starIcon: starIcon,
    foodType: "Skewers",
    foodIcon: foodIcon,
    costLevel: 1,
    costIcon: moneyIcon,
    tag: "Free",
    locationIcon: locationIcon,
    distance: 4.3,
  },
  {
    name: "Burger King",
    img: restaurantImg3,
    rate: 4.8,
    rateCount: 1873,
    starIcon: starIcon,
    foodType: "Skewers",
    foodIcon: foodIcon,
    costLevel: 1,
    costIcon: moneyIcon,
    tag: "Free",
    locationIcon: locationIcon,
    distance: 4.3,
  },
  {
    name: "Burger King",
    img: restaurantImg4,
    rate: 4.8,
    rateCount: 1873,
    starIcon: starIcon,
    foodType: "Skewers",
    foodIcon: foodIcon,
    costLevel: 1,
    costIcon: moneyIcon,
    tag: "Free",
    locationIcon: locationIcon,
    distance: 4.3,
  },
  {
    name: "Burger King",
    img: restaurantImg5,
    rate: 4.8,
    rateCount: 1873,
    starIcon: starIcon,
    foodType: "Skewers",
    foodIcon: foodIcon,
    costLevel: 1,
    costIcon: moneyIcon,
    tag: "Free",
    locationIcon: locationIcon,
    distance: 4.3,
  },
  {
    name: "Burger King",
    img: restaurantImg6,
    rate: 4.8,
    rateCount: 1873,
    starIcon: starIcon,
    foodType: "Skewers",
    foodIcon: foodIcon,
    costLevel: 1,
    costIcon: moneyIcon,
    tag: "Free",
    locationIcon: locationIcon,
    distance: 4.3,
  },
];

const Home: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [selectedKeys, setSelectedKeys] = useState<string[]>(["1"]);
  const handleMenuSelect = ({ key }: { key: React.Key }) => {
    setSelectedKeys([key.toString()]);
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
        <Content
          style={{
            overflow: "initial",
          }}
        >
          <div
            style={{
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <CategoryView
              categories={categories}
              cols={6}
              gutter={32}
              title="Explore categories"
            ></CategoryView>
            <RestaurantView
              restaurants={restaurants}
              cols={3}
              gutter={24}
              title="Featured restaurants"
            ></RestaurantView>
            <FoodsView
              foods={foods}
              cols={3}
              gutter={32}
              title="Asian food"
            ></FoodsView>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ui web  ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Home;
