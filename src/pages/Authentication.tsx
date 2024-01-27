import { useNavigate } from "react-router-dom";
import FormInput from "../components/form/FormInput";
import PrimaryButton from "../components/form/PrimaryButton";
import AuthForm from "../components/form/AuthForm";
import emailIcon from "../assets/icons/email.svg";
import SideImage from "../assets/images/SideImage.png";

interface AuthenticationData {
  email: string;
}

function AuthenticationPage() {
  const navigate = useNavigate();

  const onFinish = async (values: AuthenticationData) => {
    try {
      const response = await fetch(
        "http://localhost:8000/rest-auth/password/reset/",
        {
          method: "POST",
          headers: {
            "Content-Type": "*/*",
          },
          body: JSON.stringify(values),
        }
      );
      if (!response.ok) {
        throw new Error("Authentication failed");
      }
      const result = await response.json();
      console.log("Registration successful:", result);
      navigate("/home");
    } catch (error: any) {
      console.error("Error during registration:", error.message);
    }
  };

  return (
    <>
      <AuthForm
        title="Forgot password?"
        description="Please enter your email address to continue"
        cover={SideImage}
        onFinish={onFinish}
      >
        <>
          <FormInput
            label="Email address"
            icon={emailIcon}
            name="email"
            type="email"
            placeholder="markclarke@gmail.com"
            required
          />
          <PrimaryButton text="Continue" />
        </>
      </AuthForm>
    </>
  );
}

export default AuthenticationPage;
