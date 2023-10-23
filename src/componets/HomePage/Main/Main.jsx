import React from "react";
import scss from "./Main.module.scss";
import Link from "next/link";
import { useTranslation } from "react-i18next";

function Main() {
  const { t } = useTranslation(); // Specify the "main" namespace

  return (
    <div className={scss.main}>
      <h1>{t("main.room")}</h1>
      <div className={scss.bottomCont}>
        <div className={scss.inputContainer}>
          <img
            src="/assets/images/search.png"
            alt=""
            width="30px"
            height="30px"
          />
          <input type="text" placeholder={t("main.placeholder")} />
        </div>
        <button>
          <Link href="/">{t("main.find")}</Link>
        </button>
      </div>
    </div>
  );

}

export default Main;
