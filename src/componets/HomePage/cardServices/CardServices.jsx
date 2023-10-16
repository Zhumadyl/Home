import React from "react";
import scss from "./CardSevices.module.scss";
import Link from "next/link";

function CardServices(props) {
  return (
    <div className={scss.cardServices}>
      <div className={scss.card}>
        <img src={props.img} alt="" />
        <h2>{props.title}</h2>
        <p>
          Мы создаем безупречный онлайн-опыт от покупок в крупнейшей сети
          проката до подачи заявки и оплаты аренды.
        </p>
        <Link href={props.link}>
          <button className={scss.btn}>{props.btn}</button>
        </Link>
      </div>
    </div>
  );
}

export default CardServices;
