import SignUpPage from "./pages/SignUp";
import SignInPage from "./pages/SignIn";
import AuthenticationPage from "./pages/Authentication";
import RestaurantPage from "./pages/Restaurant";
import HomePage from "./pages/Home";
import ExplorePage from "./pages/Explore";
import FavouritesPage from "./pages/Favourites";
import OrdersPage from "./pages/Orders";
import SettingsPage from "./pages/Settings";

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
  {
    path: "/settings",
    element: <SettingsPage />,
  },
];

export default AppRoutes;
