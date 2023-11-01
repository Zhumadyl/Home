import React, { useState } from "react";
import scss from "./DefaultLogin.module.scss";
import Google from "../google/Google";
import Title from "../title/Title";

function DefaultLogin({ onRegistrationLinkClick, onGoogleLinkClick ,onNextStep}) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistrationLinkClick = () => {
    onRegistrationLinkClick();
  };

  const submit = (e) => {
    e.preventDefault();
    onNextStep("telephoneAuthorization");

  };

  const handleGoogleLinkClick = () => {
    onGoogleLinkClick(); 
  }
  return (
    <div className={scss.defaultRegistration}>
      <Title title="Войти" />
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
        </div>
        <div className={scss.btns}>
          <button className={scss.btn1} onClick={submit}>Войти</button>
          <div onClick={handleGoogleLinkClick}>
            <Google />
          </div>
          <div>
            <p onClick={handleRegistrationLinkClick}>Еще нет учетной записи? Зарегистрируйся прямо сейчас!</p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default DefaultLogin;
