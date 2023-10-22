import React from "react";
import scss from "./CardDiscout.module.scss";
import Link from "next/link";
import { useTranslation } from "react-i18next";

function CardDiscout(props) {
  const { t } = useTranslation();
  return (
    <div className={scss.cardDiscout}>
      <Link href="/link1">
        <div className={scss.cars_info}>
          <div className={scss.card_title}>
            <p>{props.text}</p>
            <h1>{t("title")}</h1>
            <h3>{t("date")}</h3>
            <p>{t("location")}</p>
          </div>
          <div className={scss.card_about}>
            <div className={scss.logo}>
              <div>
                <img src={props.logo} alt="" />
              </div>
            </div>
            <p>{t("label")}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CardDiscout;
