import React, { useState } from "react";
import scss from "./DefaultLogin.module.scss";
import Link from "next/link";
import Google from "../google/Google";
import { useRouter } from "next/router";

function DefaultLogin() {
  const router = useRouter();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (login === "Admin" && password === "Admin") {
      router.push("/");
    } else {
      alert("Неверный логин или пароль");
    }
  };

  return (
    <div className={scss.defaultRegistration}>
      <h1>Войти</h1>
      <form onSubmit={submit}>
        <div className={scss.form}>
          <div>
            <label>Номер телефона или e-mail:</label>
          </div>
          <input
            type="text"
            placeholder="Номер телефона или e-mail"
            onChange={(e) => setLogin(e.target.value)}
          />{" "}
          <div>
            <label>Пароль:</label>
          </div>
          <input
            type="password"
            placeholder=".  .  .  .  .  .  .  ."
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
          <Link href="/TelephoneAutorization">
            <h4>Я не помню свой пароль</h4>
          </Link>
        </div>
        <div className={scss.btns}>
          <button className={scss.btn1}>Войти</button>
          <div>
            <Google />
          </div>
          <Link href="/DefaultRegistration">
            <p>Еще нет учетной записи? Зарегистрируйся прямо сейчас!</p>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default DefaultLogin;
