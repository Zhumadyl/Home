import React, { useState } from "react";
import scss from "./PasswordAutorization.module.scss";
import Title from "../title/Title";
import Link from "next/link";

function PasswordAutorization() {
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [isPasswordStrong, setIsPasswordStrong] = useState(null);
  const [passwordsMatch, setPasswordsMatch] = useState(null);

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    checkPasswordStrength(newPassword);
  };

  const handleConfirmedPasswordChange = (event) => {
    const newConfirmedPassword = event.target.value;
    setConfirmedPassword(newConfirmedPassword);
    checkPasswordMatch(password, newConfirmedPassword);
  };

  const checkPasswordStrength = (password) => {
    const isStrong = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(password);
    setIsPasswordStrong(isStrong);
  };

  const checkPasswordMatch = (password, confirmedPassword) => {
    const match = password === confirmedPassword;
    setPasswordsMatch(match);
  };

  const scssPassword = (img, text) => {
    return (
      <div className={scss.inputPassword}>
        <img src={img} alt="" />
        <p>{text}</p>
      </div>
    );
  };

  return (
    <div className={scss.passwordAutorization}>
      <Title title="Создайте пароль " />
      <p>
        Пароль должен содержать не менее 8 символов, а также как минимум одну
        букву и одну цифру.
      </p>
      <form>
        <div className={scss.password}>
          <input
            type="password"
            placeholder="Пароль"
            onInput={handlePasswordChange}
          />
          {isPasswordStrong !== null && (
            <p
              className={
                isPasswordStrong ? scss.strongPassword : scss.weakPassword
              }
            >
              {isPasswordStrong
                ? scssPassword(
                    "/assets/images/LoginPage/material-symbols_done-rounded.png",
                    "Это надежный пароль"
                  )
                : scssPassword(
                    "/assets/images/LoginPage/material-symbols_done-rounded2.png",
                    "Это не надежный пароль"
                  )}
            </p>
          )}
          <input
            type="password"
            placeholder="Подтвердите пароль"
            onInput={handleConfirmedPasswordChange}
          />
          {passwordsMatch !== null && (
            <p
              className={
                passwordsMatch ? scss.matchPassword : scss.mismatchPassword
              }
            >
              {passwordsMatch
                ? scssPassword(
                    "/assets/images/LoginPage/material-symbols_done-rounded.png",
                    "Пароли совпадают"
                  )
                : scssPassword(
                    "/assets/images/LoginPage/material-symbols_done-rounded2.png",
                    "Пароли не совпадают"
                  )}
            </p>
          )}
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

export default PasswordAutorization;
