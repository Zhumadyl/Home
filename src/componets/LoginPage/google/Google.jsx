import React from "react";
import scss from "./Google.module.scss";
import Link from "next/link";

function Google() {
  return (
      <button className={scss.btn2}>
        {" "}
        <img src="/assets/images/logos_google-icon.png" alt="" />
        Войти с Google
      </button>
  );
}

export default Google;
