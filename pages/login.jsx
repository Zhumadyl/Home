// pages/login.js
import { useEffect } from "react";
import { useRouter } from "next/router";
import HeaderLogin from "@/componets/HomePage/headerLogin/HeaderLogin";
import DefaultRegistration from "@/componets/LoginPage/DefaultRegistration/DefaultRegistration";

function Login() {
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
  return (
    <div>
      <HeaderLogin />
      <DefaultRegistration/>
    </div>
  );
}

export default Login;
