import FormInput from "../components/form/FormInput";
import PrimaryButton from "../components/form/PrimaryButton";
import AuthForm from "../components/form/AuthForm";
import { useNavigate } from "react-router-dom";
import SideImage from "../assets/images/SideImage.png";
import passwordIcon from "../assets/icons/password.svg";
import emailIcon from "../assets/icons/email.svg";
import ForgotPasswordLink from "../components/signin/ForgotPasswordLink";
import SecondaryButton from "../components/form/SecondaryButton";

interface SignInData {
  email: string;
  password: string;
  remember: boolean;
}

function SignInPage() {
  const navigate = useNavigate();

  const onFinish = async (values: SignInData) => {
    // try {
    //   const response = await fetch("/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(values),
    //   });
    //   if (!response.ok) {
    //     throw new Error("Login failed");
    //   }
    //   const result = await response.json();
    //   console.log("Login successful:", result);
    //   navigate("/");
    // } catch (error: any) {
    //   console.error("Error during login:", error.message);
    // }
  };

  const handleForgotPasswordClick = () => {
    navigate("/authentication");
  };

  const handleButtonClick = () => {
    navigate("/register");
  };

  return (
    <>
      <AuthForm
        title="Welcome!"
        description="Sign in to your account to continue "
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
          <FormInput
            label="Password"
            icon={passwordIcon}
            name="password"
            type="password"
            placeholder="******"
            required
          />
          <SecondaryButton text="Sign in" />
          <ForgotPasswordLink
            textButton="Forgot password?"
            onClick={handleForgotPasswordClick}
          />
          <PrimaryButton text="Create an account" onClick={handleButtonClick} />
        </>
      </AuthForm>
    </>
  );
}

export default SignInPage;
