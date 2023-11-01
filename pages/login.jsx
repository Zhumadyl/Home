import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../src/componets/firebase/firebase";
import DefaultLogin from "@/componets/LoginPage/DefaultLogin/DefaultLogin";
import DefaultRegistration from "@/componets/LoginPage/DefaultRegistration/DefaultRegistration";
import GoogleAutorization from "@/componets/LoginPage/googleAutorization/GoogleAutorization";
import PasswordAutorization from "@/componets/LoginPage/passwordAutorization/PasswordAutorization";
import TelephoneAutorization from "@/componets/LoginPage/TelephoneAutorization/TelephoneAutorization";

function Login(props) {
  const [currentStep, setCurrentStep] = useState("login");
  const handleStepChange = (step) => {
    setCurrentStep(step);
  };

  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        router.push("/");
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleAuthComplete = (authData) => {
    // Handle the authentication data here
    console.log("Authentication data:", authData);
    // You can also save the data to Local Storage here
    // localStorage.setItem("authData", JSON.stringify(authData));
    // Then, you can redirect or perform other actions as needed
    router.push("/");
  };

  const handleRegistrationLinkClick = () => {
    handleStepChange("registration");
  };
  const handleLoginLinkClick = () => {
    handleStepChange("login");
  };
  const handleGoogleLinkClick = () => {
    handleStepChange("google");
  };


  if (user) {
    return <div>You are already logged in as {user.email}</div>;
  }

  return (
    <div>
      {currentStep === "login" && (
        <DefaultLogin
          onNextStep={(authData) => handleStepChange("registration")}
          onRegistrationLinkClick={handleRegistrationLinkClick}
          onGoogleLinkClick={handleGoogleLinkClick} // Pass the function here
        />
      )}
      {currentStep === "registration" && (
        <DefaultRegistration
          onNextStep={(authData) => handleStepChange("telephone")}
          onLoginLinkClick={handleLoginLinkClick}
          onGoogleLinkClick={handleGoogleLinkClick} // Pass the function here
          props={props}
        />

      )}
      {currentStep === "google" && (
        <GoogleAutorization
          onNextStep={(authData) => handleStepChange("password")}
          onGoogleLinkClick={handleGoogleLinkClick} // Pass the function here
          props={props}
        />

      )}
      {currentStep === "telephone" && (
        <TelephoneAutorization
          onNextStep={(authData) => handleStepChange("password")}
        />

      )}
      {currentStep === "password" && (
        <PasswordAutorization
          onNextStep={(authData) => handleAuthComplete(authData)}
        />
      )}
    </div>
  );
}

export default Login;