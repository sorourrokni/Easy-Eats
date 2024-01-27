import { useNavigate } from "react-router-dom";
import TitleHeader from "../components/home/content/TitleHeader";
import OrderView from "../components/home/content/OrderView";
import DashboardLayout from "../components/DashboardLayout";
import PreOrderView from "../components/home/content/PreOrderView";

interface UpComingOrders {
  name: string;
  time: number;
  id: string;
  percent1: number;
  percent2: number;
  percent3: number;
}
interface PreviousOrders {
  name: string;
  date: string;
  time: string;
  tag: string;
  items: Items[];
  onDetailsClick: () => void;
}
interface Items {
  name: string;
  count: number;
}
const items1: Items[] = [
  { name: "Delicious Cheese Pie", count: 1 },
  { name: "Peperoni Pie", count: 1 },
];

const items2: Items[] = [
  { name: "Chef’s Burger Deluxe", count: 3 },
  { name: "Vegetable Skewers", count: 1 },
];
const items3: Items[] = [
  { name: "Chicken Wrap", count: 1 },
  { name: "Medium Fries Deluxe", count: 2 },
];
const items4: Items[] = [
  { name: "Grand BigMac", count: 3 },
  { name: "Chicken Nuggets", count: 4 },
];
const items5: Items[] = [
  { name: "Large Peperoni Pizza", count: 2 },
  { name: "Small Diet Coca Cola", count: 2 },
];
const orders: UpComingOrders[] = [
  {
    name: "Burger King",
    id: "#1DF90E",
    time: 0.5,
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

const preOrders: PreviousOrders[] = [
  {
    name: "Pizza Hut",
    tag: "Completed",
    time: "11:54 PM",
    date: "September 16, 2020",
    items: items1,
    onDetailsClick: () => {},
  },
  {
    name: "Carrows Restaurant",
    tag: "Canceled",
    time: "11:54 PM",
    date: "September 16, 2020",
    items: items2,
    onDetailsClick: () => {},
  },
  {
    name: "KFC",
    tag: "Completed",
    time: "11:54 PM",
    date: "September 16, 2020",
    items: items3,
    onDetailsClick: () => {},
  },
  {
    name: "McDonald’s",
    tag: "Canceled",
    time: "11:54 PM",
    date: "September 16, 2020",
    items: items4,
    onDetailsClick: () => {},
  },
  {
    name: "Domino’s Pizza",
    tag: "Completed",
    time: "11:54 PM",
    date: "September 16, 2020",
    items: items5,
    onDetailsClick: () => {},
  },
];

function OrdersPage() {
  const navigate = useNavigate();

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
          <TitleHeader title={"Upcoming orders"}></TitleHeader>
          <OrderView orders={orders} cols={3} gutter={32}></OrderView>
          <TitleHeader title={"Previous orders"}></TitleHeader>
          <PreOrderView cols={3} gutter={32} orders={preOrders}></PreOrderView>
        </div>
      }
      menuItem={"Orders"}
    ></DashboardLayout>
  );
}

export default OrdersPage;
