import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AuthForm from "../components/form/AuthForm";

describe("AuthForm component", () => {
  const mockOnFinish = jest.fn();

  test("renders AuthForm component", async () => {
    const { getByText, getByLabelText } = render(
      <AuthForm
        title="Test Title"
        description="Test Description"
        onFinish={mockOnFinish}
        cover="test-cover.jpg"
      >
        <div data-testid="test-child">Test Child</div>
      </AuthForm>
    );

    expect(getByText("Test Title")).toBeInTheDocument();
    expect(getByText("Test Description")).toBeInTheDocument();
    expect(getByLabelText("Username")).toBeInTheDocument();
    expect(getByLabelText("Password")).toBeInTheDocument();
    expect(getByText("test-child")).toBeInTheDocument();
  });

  test("calls onFinish when the form is submitted", async () => {
    const { getByLabelText, getByText } = render(
      <AuthForm
        title="Test Title"
        description="Test Description"
        onFinish={mockOnFinish}
        cover="test-cover.jpg"
      >
        <div data-testid="test-child">Test Child</div>
      </AuthForm>
    );

    fireEvent.change(getByLabelText("Username"), {
      target: { value: "testUser" },
    });
    fireEvent.change(getByLabelText("Password"), {
      target: { value: "testPassword" },
    });
    fireEvent.click(getByText("Submit"));

    await waitFor(() => {
      expect(mockOnFinish).toHaveBeenCalledWith({
        username: "testUser",
        password: "testPassword",
      });
    });
  });
});
