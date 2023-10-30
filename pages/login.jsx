import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth"; 
import { auth } from "../src/componets/firebase/firebase";
import DefaultLogin from "@/componets/LoginPage/DefaultLogin/DefaultLogin";
import DefaultRegistration from "@/componets/LoginPage/DefaultRegistration/DefaultRegistration";
import GoogleAutorization from "@/componets/LoginPage/googleAutorization/GoogleAutorization";
import PasswordAutorization from "@/componets/LoginPage/passwordAutorization/PasswordAutorization";
import TelephoneAutorization from "@/componets/LoginPage/TelephoneAutorization/TelephoneAutorization";

function Login() {

  const [currentStep, setCurrentStep] = useState("registration");
  const handleStepChange = (step) => {
    setCurrentStep(step);
  };

  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Listen for changes in the user's sign-in state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setUser(user);
        // You can also redirect the user to another page
        router.push("/");
      } else {
        // User is signed out
        setUser(null);
      }
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, [router]);

  if (user) {
    return <div>You are already logged in as {user.email}</div>;
  }

  return (
    <div>
      {currentStep === "login" && (
        <DefaultLogin onNextStep={() => handleStepChange("registration")} />
      )}
      {currentStep === "registration" && (
        <DefaultRegistration onNextStep={() => handleStepChange("password")} />
      )}
      {currentStep === "google" && (
        <GoogleAutorization onNextStep={() => handleStepChange("password")} />
      )}
      {currentStep === "password" && (
        <PasswordAutorization onNextStep={() => handleStepChange("telephone")} />
      )}
      {currentStep === "telephone" && <TelephoneAutorization />}
    </div>
  );
}

export default Login;



