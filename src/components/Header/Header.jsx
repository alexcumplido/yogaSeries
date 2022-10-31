import { Link } from "react-router-dom";
export function Header() {
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
    </header>
  );
}
