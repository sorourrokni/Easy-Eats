import { useNavigate } from "react-router-dom";
import foodImg1 from "../assets/images/food-1.svg";
import foodImg2 from "../assets/images/food-2.svg";
import foodImg3 from "../assets/images/food-3.svg";
import foodImg4 from "../assets/images/food-4.svg";
import foodImg5 from "../assets/images/food-5.svg";
import foodImg6 from "../assets/images/food-6.svg";
import FoodsView from "../components/home/content/FoodsView";
import deliveryIcon from "../assets/icons/Delivery.svg";
import foodIcon from "../assets/icons/Silverware.svg";
import starIcon from "../assets/icons/Star.svg";
import restaurantImg1 from "../assets/images/Burger King.png";
import restaurantImg2 from "../assets/images/Carrows Restaurant.png";
import restaurantImg3 from "../assets/images/KFC.png";
import restaurantImg4 from "../assets/images/Domino’s Pizza.png";
import restaurantImg5 from "../assets/images/McDonald’s.png";
import restaurantImg6 from "../assets/images/Pizza Hut.png";
import moneyIcon from "../assets/icons/Money.svg";
import locationIcon from "../assets/icons/Location.svg";
import TabsView from "../components/home/content/TabsView";
import TabsButton from "../components/home/button/DefaultButton";
import { useState } from "react";
import RestaurantView from "../components/home/content/RestaurantView";
import restaurantIcon from "../assets/icons/Restaurant.svg";
import DefaultButton from "../components/home/button/DefaultButton";
import DashboardContent from "../components/home/content/DashboardContent";
import DashboardLayout from "../components/DashboardLayout";

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

function FavouritesPage() {
  const [showDishes, setShowDishes] = useState(true);
  const [selectedTab, setSelectedTab] = useState("Dishes");

  const handleDishesClick = () => {
    setShowDishes(true);
    setSelectedTab("Dishes");
  };

  const handleRestaurantClick = () => {
    setShowDishes(false);
    setSelectedTab("Restaurants");
  };

  const onFinish = async () => {
    // try {
    //   const response = await fetch("/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(values),
    //   });
    //   if (!response.ok) {
    //     throw new Error("Login failed");
    //   }
    //   const result = await response.json();
    //   console.log("Login successful:", result);
    //   navigate("/");
    // } catch (error: any) {
    //   console.error("Error during login:", error.message);
    // }
  };
  return (
    <DashboardLayout
      children={
        <div style={{ backgroundColor: "#ffffff" }}>
          <TabsView
            items={
              <>
                <DefaultButton
                  textButton="Restaurants (8)"
                  prefixIcon={restaurantIcon}
                  onClick={handleRestaurantClick}
                  isSelected={selectedTab === "Restaurants"}
                  buttonType={"primary"}
                ></DefaultButton>
                <DefaultButton
                  textButton="Dishes (23)"
                  prefixIcon={foodIcon}
                  onClick={handleDishesClick}
                  isSelected={selectedTab === "Dishes"}
                  buttonType={"primary"}
                ></DefaultButton>
              </>
            }
          ></TabsView>
          {showDishes ? (
            <FoodsView foods={foods} cols={3} gutter={32}></FoodsView>
          ) : (
            <RestaurantView
              restaurants={restaurants}
              cols={3}
              gutter={24}
              onClick={handleRestaurantClick}
            ></RestaurantView>
          )}
        </div>
      }
      menuItem="Favourites"
    ></DashboardLayout>
  );
}

export default FavouritesPage;
