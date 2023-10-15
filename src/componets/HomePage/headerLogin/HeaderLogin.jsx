import React from "react";
import scss from "./HeaderLogin.module.scss";

function HeaderLogin() {
  return (
    <div className={scss.headerLogin}>
      <img src="/assets/images/Logo.svg" alt="" />
    </div>
  );
}

export default HeaderLogin;
