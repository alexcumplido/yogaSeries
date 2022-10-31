import { useRef, useState, useEffect } from "react";

export function Signup({
  idUserName,
  idUserPass,
  value,
  setSignup,
  onChange,
  registerNewUser,
}) {
  const [errorName, setErrorName] = useState();
  const [errorPassword, setErrorPassword] = useState();
  const name = useRef(null);
  const password = useRef(null);

  const patterns = {
    regexName: /^[a-z]{4,}$/i, // >4 letters
    regexPass: /^[A-Za-z0-9]\w{8,}$/, // >8 characters
  };

  const { regexName, regexPass } = patterns;

  function handleSignup(event) {
    event.preventDefault();
    if (
      regexName.test(name.current.value) &&
      regexPass.test(password.current.value)
    ) {
      registerNewUser();
      setSignup(false);
    }
  }

  useEffect(() => {
    name.current.addEventListener("keyup", (evt) => {
      regexName.test(name.current.value)
        ? setErrorName(false)
        : setErrorName(true);
    });
    password.current.addEventListener("keyup", (evt) => {
      regexPass.test(password.current.value)
        ? setErrorPassword(false)
        : setErrorPassword(true);
    });
  }, []);

  return (
    <div className="modal__form">
      <button className="modal__btn__close" onClick={() => setSignup(false)}>
        X
      </button>
      <form onSubmit={handleSignup} className="inputs__wrapper">
        <h2>SIGN UP</h2>
        <input
          className="input"
          type="text"
          ref={name}
          id={idUserName}
          name={idUserName}
          value={value.signupName}
          onChange={onChange}
          placeholder="Username"
          required
          minLength="4"
        />

        {errorName && <p className="error"> At least 4 letters long. </p>}

        <input
          className="input"
          type="text"
          ref={password}
          id={idUserPass}
          name={idUserPass}
          value={value.signupPass}
          onChange={onChange}
          placeholder="Password"
          required
          minLength="9"
        />

        {errorPassword && (
          <p className="error"> At least 9 valid characters long. </p>
        )}

        <div className="checkbox__policy">
          <input type="checkbox" />
          <label>
            I would like to receive by email special offers and updates about
            Lucasfilm Ltd. The Walt Disney Companies.
          </label>
        </div>
        <button
          onClick={() => handleSignup()}
          type="submit"
          className="modal__form__cta"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}
