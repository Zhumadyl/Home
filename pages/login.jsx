// pages/login.js
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import HeaderLogin from "@/componets/HomePage/headerLogin/HeaderLogin";
import DefaultLogin from "@/componets/LoginPage/DefaultLogin/DefaultLogin";
import DefaultRegistration from "@/componets/LoginPage/DefaultRegistration/DefaultRegistration";
import TelephoneAutorization from "@/componets/LoginPage/TelephoneAutorization/TelephoneAutorization";
import GoogleAutorization from "@/componets/LoginPage/googleAutorization/GoogleAutorization";
import PasswordAutorization from "@/componets/LoginPage/passwordAutorization/PasswordAutorization";
import LoginForm from "./loginForm";

function Login() {
  const [currentStep, setCurrentStep] = useState("login");

  const router = useRouter();
  const isAuthenticated = false;

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/"); // Replace with your desired URL
    }
  }, [isAuthenticated, router]);

  // If the user is authenticated, you can render a message or redirect them immediately
  if (isAuthenticated) {
    return <div>You are already logged in.</div>;
  }

  // Render the login form for unauthenticated users
  const renderStep = () => {
    switch (currentStep) {
      case "login":
        return (
          <DefaultLogin onRegisterClick={() => setCurrentStep("register")} />
        );
      case "register":
        return (
          <DefaultRegistration onBackClick={() => setCurrentStep("login")} />
        );
      // Добавьте другие этапы входа по мере необходимости
      default:
        return (
          <DefaultLogin onRegisterClick={() => setCurrentStep("register")} />
        );
    }
  };
  return (
    <div>
      <HeaderLogin />
      <LoginForm/>
      {/* <DefaultLogin /> */}
      {/* <DefaultRegistration /> */}
      {/* <GoogleAutorization /> */}
      {/* <TelephoneAutorization /> */}
      {/* <PasswordAutorization /> */}
      {/* {renderStep()} */}
    </div>
  );
}

export default Login;
