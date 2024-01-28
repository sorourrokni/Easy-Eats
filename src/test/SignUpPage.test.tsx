import { render } from "@testing-library/react";
import SignUpPage from "../pages/SignUp";

test("renders SignUpPage component", () => {
  const { getByText } = render(<SignUpPage />);
  expect(getByText("Create an account")).toBeInTheDocument();
});
