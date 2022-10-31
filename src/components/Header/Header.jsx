import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../../context/AuthContext.jsx";

export function Header({ showSignup, showLogin, logout }) {
  // const { userAuth } = useContext(AuthContext);

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link className="header__link" to="/">
              {" "}
              Home{" "}
            </Link>
          </li>
          <li>
            <Link className="header__link" to="/categories">
              {" "}
              Categories{" "}
            </Link>
          </li>
          <li>
            <Link className="header__link" to="/customSerie">
              {" "}
              My Series
            </Link>
          </li>
        </ul>
      </nav>
      {/* <div className="logingsignup__nav">
        {!userAuth ? (
          <div className="header__wrapper__btn">
            <button className="header__btn" onClick={() => showLogin()}>
              Login
            </button>
            <button className="header__btn" onClick={() => showSignup()}>
              Sign
            </button>
          </div>
        ) : (
          <div className="header__wrapper__btn">
            <button className="header__btn" onClick={() => logout()}>
              Logout{" "}
            </button>
          </div>
        )}
      </div> */}
    </header>
  );
}
