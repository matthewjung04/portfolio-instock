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
            </div>
        </header>
    );
};

export default Header;