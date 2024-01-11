import SignUpPage from "./pages/SignUp";
import SignInPage from "./pages/SignIn";

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
];

export default AppRoutes;
