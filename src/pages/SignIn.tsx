import React from "react";
import FormInput from "../components/form/FormInput";
import PrimaryButton from "../components/form/PrimaryButton";
import AuthForm from "../components/form/AuthForm";
import { useNavigate } from "react-router-dom";
import WebBreadcrumb from "../components/header/breadcrump/WebBreadCrumb";
import SideImage from "../assets/images/SideImage.png";
import passwordIcon from "../assets/icons/password.svg";
import emailIcon from "../assets/icons/email.svg";

interface SignInData {
  email: string;
  password: string;
  remember: boolean;
}

function SignInPage() {
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Login", path: "/login" },
  ];

  //   const navigate = useNavigate();

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

  return (
    <>
      {/* <WebBreadcrumb items={breadcrumbItems}/> */}

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
          <PrimaryButton text="Sign in" />
          <PrimaryButton text="Create an account" />
        </>
      </AuthForm>
    </>
  );
}

export default SignInPage;
