// pages/login.js
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

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

  return <div></div>;
}

export default Login;
