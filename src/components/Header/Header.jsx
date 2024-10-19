import "./Header.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import InStockLogo from "../../assets/logos/InStock-Logo.svg";

const Header = () => {
  const [activeNav, setActiveNav] = useState("warehouses"); //State created to store active Nav option

  const handleNavClick = (navOption) => {
    setActiveNav(navOption);
  };

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__container__logo__link" reloadDocument>
          <img className="header__container__logo" src={InStockLogo} />
        </Link>
        <nav>
          <ul className="header__container__nav">
            <li
              className={`header__container__nav--box${
                activeNav === "warehouses" ? "--active" : ""
              }`}
            >
              <Link
                to="/"
                onClick={() => handleNavClick("warehouses")}
                className={`header__container__nav--box--link${
                  activeNav === "warehouses" ? "--active" : ""
                }`}
              >
                Warehouses
              </Link>
            </li>
            <li
              className={`header__container__nav--box${
                activeNav === "inventory" ? "--active" : ""
              }`}
            >
              <Link
                to="/inventory"
                onClick={() => handleNavClick("inventory")}
                className={`header__container__nav--box--link${
                  activeNav === "inventory" ? "--active" : ""
                }`}
              >
                Inventory
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
