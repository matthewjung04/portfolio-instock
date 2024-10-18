import chevron from "../../assets/icons/chevron_right-24px.svg";
import editBlue from "../../assets/icons/edit-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import sortDefault from "../../assets/icons/sort-24px.svg";
import './WarehouseInventoryList.scss'


const WarehouseInventoryList = ({ warehouseInventory }) => {
    console.log(warehouseInventory)
    return (
        <div className="warehouse-details__wrapper-inventory">
            {warehouseInventory.map((inventory) => (
                <li className="warehouse-details__wrapper-inventory--main-box" key={inventory.id}>
                    <div className="warehouse-details__wrapper-inventory__labels-tablet">
                        <div className="warehouse-details__wrapper-inventory__labels-tablet__container-one">
                            <div className="warehouse-details__wrapper-inventory__labels-tablet__container-one__box--inventory">
                                <h4 className="warehouse-details__wrapper-inventory__labels-tablet__container-one__box--header">INVENTORY ITEM</h4>
                                <img className="warehouse-details__wrapper-inventory__labels-tablet__container-one__box--icon" src={sortDefault}/>
                            </div>     
                            <div className="warehouse-details__wrapper-inventory__labels-tablet__container-one__box">
                                <h4 className="warehouse-details__wrapper-inventory__labels-tablet__container-one__box--header">CATEGORY</h4>
                                <img className="warehouse-details__wrapper-inventory__labels-tablet__container-one__box--icon" src={sortDefault}/>
                            </div>   
                            <div className="warehouse-details__wrapper-inventory__labels-tablet__container-one__box">
                                <h4 className="warehouse-details__wrapper-inventory__labels-tablet__container-one__box--header">STATUS</h4>
                                <img className="warehouse-details__wrapper-inventory__labels-tablet__container-one__box--icon" src={sortDefault}/>
                            </div> 
                        </div>
                        <div className="warehouse-details__wrapper-inventory__labels-tablet__container-two">
                            <div className="warehouse-details__wrapper-inventory__labels-tablet__container-two__box--quantity">
                                <h4 className="warehouse-details__wrapper-inventory__labels-tablet__container-two__box--header">QUANTITY</h4>
                                <img className="warehouse-details__wrapper-inventory__labels-tablet__container-one__box--icon" src={sortDefault}/>
                            </div>   
                            <div className="warehouse-details__wrapper-inventory__labels-tablet__container-two__box--actions">
                                <h4 className="warehouse-details__wrapper-inventory__labels-tablet__container-two__box--header">ACTIONS</h4>
                            </div>
                        </div>
                    </div>
                    <div className="warehouse-details__wrapper-inventory__container">
                        <div className="warehouse-details__wrapper-inventory__container__top">
                            <div className="warehouse-details__wrapper-inventory__container__top--one">
                                <div className="warehouse-details__wrapper-inventory__container__top--one--item">
                                    <h4 className="warehouse-details__wrapper-inventory__container__top--one--item--header">INVENTORY ITEM</h4>
                                    <div className="warehouse-details__wrapper-inventory__container__top--one--item--box">
                                        <h3 className="warehouse-details__wrapper-inventory__container__top--one--item--box--name">{inventory.item_name}</h3>
                                        <img className="warehouse-details__wrapper-inventory__container__top--one--item--box--icon" src={chevron}/>
                                    </div>     
                                </div>
                                <div className="warehouse-details__wrapper-inventory__container__top--one--category">
                                    <h4 className="warehouse-details__wrapper-inventory__container__top--one--category--header">CATEGORY</h4>
                                    <p className="warehouse-details__wrapper-inventory__container__top--one--category--text p2">{inventory.category}</p>
                                </div>
                                <div className="warehouse-details__wrapper-inventory__container__top--one--status-box--tablet">
                                    <h4 className="warehouse-details__wrapper-inventory__container__top--one--status-box--tablet--text">{inventory.status}</h4>
                                </div>
                            </div>
                            <div className="warehouse-details__wrapper-inventory__container__top--two">
                                <div className="warehouse-details__wrapper-inventory__container__top--two--status">
                                    <h4 className="warehouse-details__wrapper-inventory__container__top--two--status--header">STATUS</h4>
                                    <div className="warehouse-details__wrapper-inventory__container__top--two--status--box">
                                        <h4 className="warehouse-details__wrapper-inventory__container__top--two--status--box--text">{inventory.status}</h4>
                                    </div>
                                        
                                </div>
                                <div className="warehouse-details__wrapper-inventory__container__top--two--quantity">
                                    <h4 className="warehouse-details__wrapper-inventory__container__top--two--quantity--header">QTY</h4>
                                    <p className="warehouse-details__wrapper-inventory__container__top--two--quantity--number p2">{inventory.quantity}</p>
                                </div>
                                <div className="warehouse-details__wrapper-inventory__container__top--two--actions-tablet"> 
                                    <img className="warehouse-details__wrapper-inventory__container__top--two--actions-tablet--icon" src={deleteIcon}/>
                                    <img className="warehouse-details__wrapper-inventory__container__top--two--actions-tablet--icon" src={editBlue}/>
                                </div>
                            </div>
                        </div>
                        <div className="warehouse-details__wrapper-inventory__container__bottom">
                            <img src={deleteIcon}/>
                            <img src={editBlue}/>
                        </div>
                    </div>
                </li>
            ))}
        </div>
    )
}

export default WarehouseInventoryList;