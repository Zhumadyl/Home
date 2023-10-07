import React from "react";
import scss from "./CardDiscout.module.scss";
import Link from "next/link";

function CardDiscout(props) {
  return (
    <div className={scss.cardDiscout}>
      <Link href="/link1">
        <div className={scss.cars_info}>
          <div className={scss.card_title}>
            <p>{props.text}</p>
            <h1>Ипотека от 1,5% на весь срок</h1>
            <h3>До 30.03.2023</h3>
            <p>В 2 ЖК</p>
          </div>
          <div className={scss.card_about}>
            <div className={scss.logo}>
              <div>
                <img src={props.logo} alt="" />
              </div>
            </div>
            <p>Ипотека</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CardDiscout;
