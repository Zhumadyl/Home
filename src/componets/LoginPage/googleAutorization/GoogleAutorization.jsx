import React from "react";
import scss from "./GoogleAutorization.module.scss";
import Link from "next/link";
import Title from "../title/Title";

function GoogleAutorization() {
  return (
    <div className={scss.googleAutorization}>
      <img src="/assets/images/LoginPage/image 1.svg" alt="" />
      <Title title="Подтвердите свои данные" />
      <form>
        <div className={scss.form}>
          <div>
            <label>Имя</label>
          </div>
          <input type="text" placeholder="Иван " />
          <div>
            <label>Фамилия</label>
          </div>
          <input type="text" placeholder="Иванов " />
          <div>
            <label>E-mail</label>
          </div>
          <input type="email" placeholder="ivanivanov@gmail.com " />
        </div>
        <div className={scss.link}>
          <Link href="/">
            <button className={scss.btn}>Далее</button>
          </Link>
          <Link href="/">
            <p>Вернуться назад</p>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default GoogleAutorization;
