import "./Header.scss";
import { Link } from "react-router-dom";
import InStockLogo from "../../assets/logos/InStock-Logo.svg";

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <a to="/" className="header__container__logo__link">
                    <img className="header__container__logo" src={InStockLogo}/>
                </a>
                <nav>
                    <ul className="header__container__nav">
                        <li className="header__container__nav--warehouse">
                            <a className="header__container__nav__link--warehouse">
                                Warehouse
                            </a>
                        </li>
                        <li className="header__container__nav--inventory">
                            <a className="header__container__nav__link--inventory">
                                Inventory
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;