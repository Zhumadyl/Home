import React from "react";
import scss from "./CardSevices.module.scss";
import Link from "next/link";
import { useTranslation } from "react-i18next";

function CardServices(props) {
  const { t } = useTranslation();
  return (
    <div className={scss.cardServices}>
      <div className={scss.card}>
        <img src={props.img} alt="" />
        <h2>{props.title}</h2>
        <p>{t("text")}</p>
        <Link href={props.link}>
          <button className={scss.btn}>{props.btn}</button>
        </Link>
      </div>
    </div>
  );
}

export default CardServices;
