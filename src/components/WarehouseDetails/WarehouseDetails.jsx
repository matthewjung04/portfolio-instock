import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import editWhite from "../../assets/icons/edit-white-24px.svg";
import chevron from "../../assets/icons/chevron_right-24px.svg";
import editBlue from "../../assets/icons/edit-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg"
import './WarehouseDetails.scss'

const WarehouseDetails = ({ warehouseName, warehouseAddress, warehouseCity, warehouseCountry, warehouseContactName, warehouseContactPosition, warehouseContactPhone, warehouseContactEmail }) => {
    
    return (
        <section className="warehouse-details">
            <div className="warehouse-details__container">
                <div className="warehouse-details__container__top">
                    <div className="warehouse-details__container__top__box">
                        <img className="warehouse-details__container__top__box--arrow" src={arrowBack}/>
                        <h1 className="warehouse-details__container__top__box--title">{warehouseName}</h1>
                    </div>
                        <img className="warehouse-details__container__top--edit" src={editWhite}/>
                </div> 
            </div>
            <div className="warehouse-details__wrapper">
                <div className="warehouse-details__wrapper__container">
                    <div className="warehouse-details__wrapper__container__address">
                        <h4>WAREHOUSE ADDRESS:</h4>
                        <div className="warehouse-details__wrapper__container__address__text">
                        <p className="warehouse-details__wrapper__container__address--text--one p2">
                                {warehouseAddress}, 
                            </p>
                            <p className="warehouse-details__wrapper__container__address--text--two p2"> 
                                {warehouseCity}, {warehouseCountry}
                            </p>
                        </div>        
                    </div>                  
                    <div className="warehouse-details__wrapper__container__bottom">
                        <div className="warehouse-details__wrapper__container__bottom--name">
                            <h4>CONTACT NAME:</h4>
                            <p className="warehouse-details__wrapper__container__bottom--name--text p2">
                                {warehouseContactName} 
                                <br/>{warehouseContactPosition}
                            </p>
                        </div>
                        <div className="warehouse-details__wrapper__container__bottom--information">
                            <h4>CONTACT INFORMATION:</h4>
                            <p className="warehouse-details__wrapper__container__bottom--information--text p2">
                                {warehouseContactPhone}
                                <br/>{warehouseContactEmail}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="warehouse-details__wrapper-inventory">
                <div className="warehouse-details__wrapper-inventory__container">
                    <div className="warehouse-details__wrapper-inventory__container__top">
                        <div className="warehouse-details__wrapper-inventory__container__top--one">
                            <div className="warehouse-details__wrapper-inventory__container__top--one--item">
                                <h4>INVENTORY ITEM</h4>
                                <div className="warehouse-details__wrapper-inventory__container__top--one--item--box">
                                    <h3 className="warehouse-details__wrapper-inventory__container__top--one--item--box--name">Television</h3>
                                    <img src={chevron}/>
                                </div>     
                            </div>
                            <div className="warehouse-details__wrapper-inventory__container__top--one--category">
                                <h4>CATEGORY</h4>
                                <p className="warehouse-details__wrapper-inventory__container__top--one--category--text p2">Electronics</p>
                            </div>
                        </div>
                        <div className="warehouse-details__wrapper-inventory__container__top--two">
                            <div className="warehouse-details__wrapper-inventory__container__top--two--status">
                                <h4>STATUS</h4>
                                <div className="warehouse-details__wrapper-inventory__container__top--two--status--box">
                                    <h4 className="warehouse-details__wrapper-inventory__container__top--two--status--box--text">IN STOCK</h4>
                                </div>
                                    
                            </div>
                            <div className="warehouse-details__wrapper-inventory__container__top--two--quantity">
                                <h4>QTY</h4>
                                <p className="warehouse-details__wrapper-inventory__container__top--two--quantity--number p2">500</p>
                            </div>
                        </div>
                    </div>
                    <div className="warehouse-details__wrapper-inventory__container__bottom">
                        <img src={deleteIcon}/>
                        <img src={editBlue}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WarehouseDetails;