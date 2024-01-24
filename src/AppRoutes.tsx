import SignUpPage from "./pages/SignUp";
import SignInPage from "./pages/SignIn";
import AuthenticationPage from "./pages/Authentication";
import RestaurantPage from "./pages/Restaurant";
import DashboardPage from "./pages/Dashboard";
import HomePage from "./pages/Home";
import ExplorePage from "./pages/Explore";
import FavouritesPage from "./pages/Favourites";
import OrdersPage from "./pages/Orders";

const AppRoutes = [
  {
    index: true,
    element: <SignUpPage />,
  },
  {
    path: "/register",
    element: <SignUpPage />,
  },
  {
    path: "/login",
    element: <SignInPage />,
  },
  {
    path: "/authentication",
    element: <AuthenticationPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/restaurant",
    element: <RestaurantPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/explore",
    element: <ExplorePage />,
  },
  {
    path: "/favourites",
    element: <FavouritesPage />,
  },
  {
    path: "/orders",
    element: <OrdersPage />,
  },
];

export default AppRoutes;
