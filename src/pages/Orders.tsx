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
import RestaurantView from "../components/home/content/RestaurantView";
import restaurantImg1 from "../assets/images/Burger King.png";
import restaurantImg2 from "../assets/images/Carrows Restaurant.png";
import restaurantImg3 from "../assets/images/KFC.png";
import restaurantImg4 from "../assets/images/Domino’s Pizza.png";
import restaurantImg5 from "../assets/images/McDonald’s.png";
import restaurantImg6 from "../assets/images/Pizza Hut.png";
import moneyIcon from "../assets/icons/Money.svg";
import locationIcon from "../assets/icons/Location.svg";
import TitleHeader from "../components/home/content/TitleHeader";
import OrderView from "../components/home/content/OrderView";

interface UpComingOrders {
  name: string;
  time: number;
  id: string;
  percent1: number;
  percent2: number;
  percent3: number;
}
const orders: UpComingOrders[] = [
  {
    name: "Burger King",
    id: "#1DF90E",
    time: 35,
    percent1: 100,
    percent2: 100,
    percent3: 60,
  },
  {
    name: "McDonald’s",
    id: "#3E0AQ9",
    time: 60,
    percent1: 100,
    percent2: 80,
    percent3: 0,
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
];

function OrdersPage() {
  const navigate = useNavigate();

  const handleRestaurantCardClick = () => {
    navigate("/restaurant");
  };
  const handleFoodCardClick = () => {
    navigate("/food");
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
    <div style={{ backgroundColor: "#ffffff" }}>
      <TitleHeader title={"Upcoming orders"}></TitleHeader>
      <OrderView orders={orders} cols={3} gutter={32}></OrderView>
      <TitleHeader title={"Previous orders"}></TitleHeader>
    </div>
  );
}

export default OrdersPage;
