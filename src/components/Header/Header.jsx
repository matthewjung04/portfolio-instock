import "./Header.scss";
import { Link, useLocation } from "react-router-dom";
import InStockLogo from "../../assets/logos/InStock-Logo.svg";

const Header = () => {

  const location = useLocation();
  const isWarehouses = location.pathname === "/" || location.pathname.startsWith("/warehouses");
  const isInventory = location.pathname.startsWith("/inventory");

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
                isWarehouses ? "--active" : ""
              }`}
            >
              <Link
                to="/"
                className={`header__container__nav--box--link${
                  isWarehouses ? "--active" : ""
                }`}
              >
                Warehouses
              </Link>
            </li>
            <li
              className={`header__container__nav--box${
                isInventory ? "--active" : ""
              }`}
            >
              <Link
                to="/inventory"
                className={`header__container__nav--box--link${
                  isInventory ? "--active" : ""
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
