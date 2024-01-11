import React from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/form/FormInput";
import PrimaryButton from "../components/form/PrimaryButton";
import AuthForm from "../components/form/AuthForm";
import WebBreadcrumb from "../components/header/breadcrump/WebBreadCrumb";
import LinkButton from "../components/form/LinkButton";
import passwordIcon from "../assets/icons/password.svg";
import emailIcon from "../assets/icons/email.svg";
import nameIcon from "../assets/icons/name.svg";
import { Space } from "antd";
import SideCover from "../components/form/SideCover";
import SideImage from "../assets/images/SideImage.png";

interface SignUpData {
  name: string;
  email: string;
  password: string;
}

function SignUpPage() {
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Register", path: "/register" },
  ];

  const navigate = useNavigate();

  const onFinish = async (values: SignUpData) => {
    // try {
    //   const response = await fetch("http://localhost:5199/register", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(values),
    //   });
    //   if (!response.ok) {
    //     throw new Error("Registration failed");
    //   }
    //   const result = await response.json();
    //   console.log("Registration successful:", result);
    //   navigate("/");
    // } catch (error: any) {
    //   console.error("Error during registration:", error.message);
    // }
  };

  const handleSignInClick = () => {
    navigate("/login");
    console.log("Sign In clicked!");
  };

  return (
    <>
      {/* <WebBreadcrumb items={breadcrumbItems} /> */}

      <AuthForm
        title="Create an account"
        description="Plese create an account to continue using our service"
        cover={SideImage}
        onFinish={onFinish}
      >
        <>
          <FormInput
            label="Full Name"
            icon={nameIcon}
            name="Name"
            type="text"
            placeholder="Mark Clarke"
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
            name="password"
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
