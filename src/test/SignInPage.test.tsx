import { render } from "@testing-library/react";
import SignInPage from "../pages/SignIn";

test("renders SignInPage component", () => {
  const { getByText } = render(<SignInPage />);
  expect(getByText("Welcome!")).toBeInTheDocument();
});
