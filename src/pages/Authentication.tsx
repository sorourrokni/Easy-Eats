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

interface AuthenticationData {
  email: string;
}

function AuthenticationPage() {
  const navigate = useNavigate();

  const onFinish = async (values: AuthenticationData) => {
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
