import { useLocation, useNavigate } from "react-router-dom";
import Banner from "../components/restaurant/Banner";
import restaurantImg from "../assets/images/Burger King.png";
import bannerImg from "../assets/images/banner.png";
import DashboardLayout from "../components/DashboardLayout";
import Content from "../components/restaurant/Content";
import FoodsView from "../components/home/content/FoodsView";
import foodImg1 from "../assets/images/food-1.svg";
import foodImg2 from "../assets/images/food-2.svg";
import foodImg3 from "../assets/images/food-3.svg";
import foodImg4 from "../assets/images/food-4.svg";
import foodImg5 from "../assets/images/food-5.svg";
import foodImg6 from "../assets/images/food-6.svg";

interface RestaurantData {
  email: string;
  password: string;
  remember: boolean;
}

interface Foods {
  name: string;
  img: string;
  rate: number;
  rateCount: number;
  foodType: string;
  deliveryTime1: number;
  deliveryTime2: number;
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
    foodType: "Burger",
    deliveryTime1: 45,
    deliveryTime2: 55,
    tag: "Delivery",
    cost: 2.99,
  },
  {
    name: "Delicious Cheese Pie",
    img: foodImg2,
    rate: 4.9,
    rateCount: 31,

    foodType: "Pie",

    deliveryTime1: 15,
    deliveryTime2: 25,

    tag: "Offer",
    buyOffer: 1,
    getOffer: 1,
  },
  {
    name: "Chef’s Burger Deluxe",
    img: foodImg3,
    rate: 4.6,
    rateCount: 1006,
    foodType: "Burger",
    deliveryTime1: 20,
    deliveryTime2: 30,
    tag: "Free",
  },
  {
    name: "Peperoni Pie",
    img: foodImg4,
    rate: 4.4,
    rateCount: 543,
    foodType: "Pie",
    deliveryTime1: 30,
    deliveryTime2: 45,
    tag: "Free",
  },
  {
    name: "Natural Vegetable Rice",
    img: foodImg5,
    rate: 4.2,
    rateCount: 8,
    foodType: "Rice",
    deliveryTime1: 35,
    deliveryTime2: 40,
    tag: "Delivery",
    cost: 3.45,
  },
  {
    name: "Vegetable Skewers",
    img: foodImg6,
    rate: 4.3,
    rateCount: 45,
    foodType: "Skewers",
    deliveryTime1: 10,
    deliveryTime2: 20,
    tag: "Delivery",
    cost: 4.99,
  },
];

function RestaurantPage() {
  const location = useLocation();
  const restaurantData = location.state && location.state.restaurantData;

  console.log(restaurantData);
  const navigate = useNavigate();

  const onFinish = async (values: RestaurantData) => {
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
        <>
          <Banner banner={bannerImg} img={restaurantImg}></Banner>
          <Content
            name={"Burger King"}
            description={
              "It is one of the most iconic and well-recognizable fast food restaurants out there which offers really amazing food and drinks."
            }
            openTime={12}
            rate={4.8}
            rateCount={100}
            foodType={"Burger"}
            costLevel={1}
            distance={4.3}
          ></Content>
          <FoodsView foods={foods} cols={3} gutter={32}></FoodsView>
        </>
      }
      menuItem={"Home"}
    ></DashboardLayout>
  );
}

export default RestaurantPage;
