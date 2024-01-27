import React from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/form/FormInput";
import PrimaryButton from "../components/form/PrimaryButton";
import AuthForm from "../components/form/AuthForm";
import LinkButton from "../components/form/LinkButton";
import passwordIcon from "../assets/icons/password.svg";
import emailIcon from "../assets/icons/email.svg";
import nameIcon from "../assets/icons/name.svg";
import { Space } from "antd";
import SideCover from "../components/form/SideCover";
import SideImage from "../assets/images/SideImage.png";

interface SignUpData {
  username: string;
  email: string;
  password1: string;
  password2: string;
}

function SignUpPage() {
  const navigate = useNavigate();

  const onFinish = async (values: SignUpData) => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/rest-auth/registration/",
        {
          method: "POST",
          headers: {
            "Content-Type": "*/*",
            // Accept: "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      if (!response.ok) {
        throw new Error("Registration failed");
      }
      const result = await response.json();
      console.log("Registration successful:", result);
      navigate("/home");
    } catch (error: any) {
      console.error("Error during registration:", error.message);
    }
  };

  const handleSignInClick = () => {
    navigate("/login");
    console.log("Sign In clicked!");
  };

  return (
    <>
      <AuthForm
        title="Create an account"
        description="Plese create an account to continue using our service"
        cover={SideImage}
        onFinish={onFinish}
      >
        <>
          <FormInput
            label="Username"
            icon={nameIcon}
            name="username"
            type="text"
            placeholder="Mark_Clarke"
            required
          />
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
            name="password1"
            type="password"
            placeholder="******"
            required
          />
          <FormInput
            label="Confirm Password"
            icon={passwordIcon}
            name="password2"
            type="password"
            placeholder="******"
            required
          />
          <PrimaryButton text="Create an account" />
          <LinkButton onClick={handleSignInClick} textButton="Sign In" />
        </>
      </AuthForm>
    </>
  );
}

export default SignUpPage;
