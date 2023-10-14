import React from "react";
import scss from "./TelephoneAutorization.module.scss";
import Link from "next/link";

function TelephoneAutorization() {
  return (
    <div className={scss.telephoneAutorization}>
      <h1>Введите 4-значный код </h1>
      <p>Код</p>
      <div className={scss.cod}>
        <input type="number" maxLength="1" />
        <input type="number" maxLength="1" />
        <input type="number" maxLength="1" />
        <input type="number" maxLength="1" />
      </div>
      <div className={scss.btns}>
        <Link href="/">
          <button className={scss.btn1}>Далее</button>
        </Link>
        <Link href="/">
          <button className={scss.btn2}>Отправить повторно</button>
        </Link>
        <Link href="/">
          <p>Вернуться назад</p>
        </Link>
      </div>
    </div>
  );
}

export default TelephoneAutorization;
