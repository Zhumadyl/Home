import React from "react";
import scss from "./Main.module.scss";
import Link from "next/link";
function Main() {
  return (
    <div className={scss.main}>
      <h1>Лучшая недвижимость для вас</h1>
      <div className={scss.bottomCont}>
        <div className={scss.inputContainer}>
          <img
            src="/assets/images/search.png"
            alt=""
            width="30px"
            height="30px"
          />
          <input type="text" placeholder="Адрес,район,город или ЖК" />
        </div>
        <button>
            <Link href="/">Найти</Link>
          </button>
      </div>
    </div>
  );
}

export default Main;
