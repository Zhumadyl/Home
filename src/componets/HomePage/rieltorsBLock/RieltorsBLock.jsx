import React from "react";
import CardRieltors from "../cardRieltors/CardRieltors";
import scss from "./RieltorsBlock.module.scss";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Title from "../title/Title";

function RieltorsBLock() {
  const { t } = useTranslation();

  const card = () => {
    return (
      <CardRieltors
        img="./assets/images/avatar.png"
        title={t("header.name")}
        text={t("header.experience")}
      />
    );
  };
  return (
    <div className={scss.block}>
      <div className={scss.rieltorsBLock}>
        <div className={scss.title}>
          <Title title={t("header.Realtors")} />
          <Link href="/asd">
            <div>
              <p>{t("header.see")}</p>
              <img src="./assets/images/Union.png" alt="" />
            </div>
          </Link>
        </div>
        <div className={scss.rieltor}>
          <div>
            {card()}
            {card()}
            {card()}
            {card()}
          </div>
          <div>
            {card()}
            {card()}
            {card()}
            {card()}
          </div>
          <div>
            {card()}
            {card()}
            {card()}
            {card()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RieltorsBLock;
