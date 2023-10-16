import DefaultLogin from "@/componets/LoginPage/DefaultLogin/DefaultLogin";
import DefaultRegistration from "@/componets/LoginPage/DefaultRegistration/DefaultRegistration";
import TelephoneAutorization from "@/componets/LoginPage/TelephoneAutorization/TelephoneAutorization";
import React, { useState } from "react";

function LoginForm() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmationCode, setConfirmationCode] = useState("");

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    // Обработка отправки данных на сервер, валидация и переход на следующий этап
    handleNextStep();
  };

  return (
    <div>
      {step === 1 && (
        <div>
          <DefaultLogin />
          {/* <h2>Этап 1: Введите email и пароль</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /> */}
          <button onClick={handleSubmit}>Далее</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <TelephoneAutorization />
          {/* <h2>Этап 2: Подтвердите телефон</h2>
          <input
            type="text"
            placeholder="Телефон"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          /> */}
          <button onClick={handleSubmit}>Далее</button>
          <button onClick={handlePreviousStep}>Назад</button>
        </div>
      )}
      {step === 3 && (
        <div>
          <h2>Этап 3: Введите код подтверждения</h2>
          <input
            type="text"
            placeholder="Код подтверждения"
            value={confirmationCode}
            onChange={(e) => setConfirmationCode(e.target.value)}
          />
          <button onClick={handleSubmit}>Завершить</button>
          <button onClick={handlePreviousStep}>Назад</button>
        </div>
      )}
    </div>
  );
}

export default LoginForm;
