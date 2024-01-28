import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PrimaryButton from "../components/form/PrimaryButton";

describe("PrimaryButton component", () => {
  const mockOnClick = jest.fn();

  test("renders PrimaryButton component", () => {
    const { getByText } = render(<PrimaryButton text="Submit" />);
    expect(getByText("Submit")).toBeInTheDocument();
  });

  test("calls onClick when the button is clicked", () => {
    const { getByText } = render(
      <PrimaryButton text="Submit" onClick={mockOnClick} />
    );
    fireEvent.click(getByText("Submit"));
    expect(mockOnClick).toHaveBeenCalled();
  });

  test("passes additional className to the button", () => {
    const { container } = render(<PrimaryButton text="Submit" />);
    const button = container.querySelector("button");
    expect(button).toHaveClass("h3-bold");
  });

  test("passes additional className to the button with custom styles", () => {
    const { container } = render(<PrimaryButton text="Submit" />);
    const button = container.querySelector("button");
    expect(button).toHaveClass("submit-button");
  });

  test('passes type "submit" to the button', () => {
    const { container } = render(<PrimaryButton text="Submit" />);
    const button = container.querySelector("button");
    expect(button).toHaveAttribute("type", "submit");
  });

  test("passes custom onClick handler to the button", () => {
    const { getByText } = render(
      <PrimaryButton text="Submit" onClick={mockOnClick} />
    );
    fireEvent.click(getByText("Submit"));
    expect(mockOnClick).toHaveBeenCalled();
  });
});
