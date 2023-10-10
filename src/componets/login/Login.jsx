import React from "react";
import scss from "./Login.module.scss";
import HeaderLogin from "../headerLogin/HeaderLogin";

function Login() {
  return (
    <div className={scss.login}>
      <HeaderLogin />
    </div>
  );
}

export default Login;
