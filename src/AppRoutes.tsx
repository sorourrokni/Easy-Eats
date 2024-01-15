import SignUpPage from "./pages/SignUp";
import SignInPage from "./pages/SignIn";
import Authentication from "./pages/Authentication";

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
];

export default AppRoutes;
