import React from "react";
import scss from "./DefaultRegistration.module.scss";
import Link from "next/link";

function DefaultRegistration() {
  return (
    <div className={scss.defaultRegistration}>
      <h1>Регистрация</h1>
      <form>
        <div className={scss.form}>
          <div>
            <label>Имя</label>
          </div>
          <input type="text" placeholder="Иван " name="" id="" />{" "}
          <div>
            <label>Фамилия</label>
          </div>
          <input type="text" placeholder="Иванов " name="" id="" />{" "}
          <div>
            <label>Номер телефона </label>
          </div>
          <input type="number" placeholder="Номер телефона " name="" id="" />{" "}
          <div>
            <label>E-mail</label>
          </div>
          <input
            type="email"
            placeholder="ivanivanov@gmail.com"
            name=""
            id=""
          />
        </div>
        <div className={scss.btns}>
          <Link href="/">
            <button className={scss.btn1}>Далее</button>
          </Link>
          <div>
            <Link href="/">
              <button className={scss.btn2}>
                {" "}
                <img src="/assets/images/logos_google-icon.png" alt="" />
                Войти с Google
              </button>
            </Link>
          </div>
          <Link href="/">
            <p>У вас уже есть учетная запись? Войти</p>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default DefaultRegistration;
