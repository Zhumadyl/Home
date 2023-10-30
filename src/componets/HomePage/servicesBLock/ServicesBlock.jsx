import React from "react";
import scss from "./ServicesBLock.module.scss";
import CardServices from "../cardServices/CardServices";
import { useTranslation } from "react-i18next";
import Title from "@/componets/HomePage/title/Title";

function ServicesBlock() {
  const { t } = useTranslation();
  return (
    <div className={scss.servicesBlock}>
      <Title title={t("header.Our Services")} />
      <div className={scss.cards}>
        <CardServices
          img="./assets/images/Picteure house search.png"
          title={t("header.Rent a House")}
          btn={t("header.Find Rental")}
          link="/link1"
        />{" "}
        <CardServices
          img="./assets/images/зеленая картинка.png"
          title={t("header.Sell a House")}
          btn={t("header.Place an Ad")}
          link="/link2"
        />{" "}
        <CardServices
          img="./assets/images/поиск дома.png"
          title={t("header.Buy a House")}
          btn={t("header.View options")}
          link="/link3"
        />
      </div>
    </div>
  );
}

export default ServicesBlock;
