import { useLocation, useNavigate } from "react-router-dom";
import Banner from "../components/restaurant/Banner";
import restaurantImg from "../assets/images/Burger King.png";
import bannerImg from "../assets/images/banner.png";
import heartIcon from "../assets/icons/Heart.svg";
import DashboardLayout from "../components/DashboardLayout";

interface RestaurantData {
  email: string;
  password: string;
  remember: boolean;
}

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
  interface Banner {
    icon: string;
    banner: string;
    img: string;
  }

  const banner: Banner[] = [
    {
      icon: heartIcon,
      banner: bannerImg,
      img: restaurantImg,
    },
  ];
  return (
    <DashboardLayout
      children={
        <>
          <Banner
            icon={heartIcon}
            banner={bannerImg}
            img={restaurantImg}
          ></Banner>
          <p></p>
        </>
      }
      menuItem={"Home"}
    ></DashboardLayout>
  );
}

export default RestaurantPage;
