import SignUpPage from "./pages/SignUp";
import SignInPage from "./pages/SignIn";
import Authentication from "./pages/Authentication";
import Home from "./pages/Home";

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
    element: <Authentication />,
  },
  {
    path: "/home",
    element: <Home />,
  },
];

export default AppRoutes;
