import { useState } from "react";
import { Link } from "react-router-dom";
import chevron from "../../assets/icons/chevron_right-24px.svg";
import editBlue from "../../assets/icons/edit-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import sortDefault from "../../assets/icons/sort-24px.svg";
import './WarehouseInventoryList.scss'
import DeleteInventory from "../DeleteInventory/DeleteInventory";
import EditInventory from "../EditInventory/EditInventory";

const WarehouseInventoryList = ({ warehouseInventory, sorted, editItem }) => {

    const [itemName, setItemName] = useState(null);
    const [deleteId, setDeleteId] = useState(null);


    const deleteItemWarehouse = (event) => {
        setItemName(event.target.parentElement.id);
        setDeleteId(event.target.id);
        console.log(event.target)
        var deletePopup = document.getElementById("deleteInventoryModal");
        deletePopup.style.display = "block";
    }

    return (
        <>
            <DeleteInventory
                itemName = {itemName}
                id = {deleteId}
            />
            <section className="warehouse-details">
                <div className="warehouse-details__wrapper-inventory__labels-tablet">   {/*Div container exclusively for tablet and desktop only*/}
                    <div className="warehouse-details__wrapper-inventory__labels-tablet__container-one">
                        <div className="warehouse-details__wrapper-inventory__labels-tablet__container-one__box--inventory">
                            <h4 className="warehouse-details__wrapper-inventory__labels-tablet__container-one__box--header">INVENTORY ITEM</h4>
                            <img id="item_name" className="warehouse-details__wrapper-inventory__labels-tablet__container-one__box--icon" src={sortDefault} onClick={sorted}/>
                        </div>
                        <div className="warehouse-details__wrapper-inventory__labels-tablet__container-one__box">
                            <h4 className="warehouse-details__wrapper-inventory__labels-tablet__container-one__box--header">CATEGORY</h4>
                            <img id="category" className="warehouse-details__wrapper-inventory__labels-tablet__container-one__box--icon" src={sortDefault} onClick={sorted}/>
                        </div>
                        <div className="warehouse-details__wrapper-inventory__labels-tablet__container-one__box">
                            <h4 className="warehouse-details__wrapper-inventory__labels-tablet__container-one__box--header">STATUS</h4>
                            <img id="status" className="warehouse-details__wrapper-inventory__labels-tablet__container-one__box--icon" src={sortDefault} onClick={sorted}/>
                        </div>
                    </div>
                    <div className="warehouse-details__wrapper-inventory__labels-tablet__container-two">
                        <div className="warehouse-details__wrapper-inventory__labels-tablet__container-two__box--quantity">
                            <h4 className="warehouse-details__wrapper-inventory__labels-tablet__container-two__box--header">QUANTITY</h4>
                            <img id="quantity" className="warehouse-details__wrapper-inventory__labels-tablet__container-one__box--icon" src={sortDefault} onClick={sorted}/>
                        </div>
                        <div className="warehouse-details__wrapper-inventory__labels-tablet__container-two__box--actions">
                            <h4 className="warehouse-details__wrapper-inventory__labels-tablet__container-two__box--header">ACTIONS</h4>
                        </div>
                    </div>
                </div>
                {warehouseInventory.map((inventory, index) => (
                    <li className={`warehouse-details__wrapper-inventory--${index === 0 ? 'first-container' : 'containers'}`} key={inventory.id}>
                        <div className="warehouse-details__wrapper-inventory__container">
                            <div className="warehouse-details__wrapper-inventory__container__top">
                                <div className="warehouse-details__wrapper-inventory__container__top--one">
                                    <div className="warehouse-details__wrapper-inventory__container__top--one--item">
                                        <h4 className="warehouse-details__wrapper-inventory__container__top--one--item--header">INVENTORY ITEM</h4>
                                        <Link className="warehouse-details__wrapper-inventory__container__top--one--item--box" to={`/inventory/${inventory.id}`}>
                                            <h3 className="warehouse-details__wrapper-inventory__container__top--one--item--box--name">{inventory.item_name}</h3>
                                            <img className="warehouse-details__wrapper-inventory__container__top--one--item--box--icon, chevron" src={chevron}/>
                                        </Link>
                                    </div>
                                    <div className="warehouse-details__wrapper-inventory__container__top--one--category">
                                        <h4 className="warehouse-details__wrapper-inventory__container__top--one--category--header">CATEGORY</h4>
                                        <p className="warehouse-details__wrapper-inventory__container__top--one--category--text p2">{inventory.category}</p>
                                    </div>
                                    <div className="warehouse-details__wrapper-inventory__container__top--one--status-box--tablet"> {/*Div container exclusively for tablet and desktop only*/}
                                        <h4 className={`warehouse-details__wrapper-inventory__container__top--one--status-box--tablet--text${
                                            inventory.status === "IN STOCK" ? "--instock" : "--outstock"
                                        }`}>{inventory.status}</h4>
                                    </div>
                                </div>
                                <div className="warehouse-details__wrapper-inventory__container__top--two">
                                    <div className="warehouse-details__wrapper-inventory__container__top--two--status">
                                        <h4 className="warehouse-details__wrapper-inventory__container__top--two--status--header">STATUS</h4>
                                        <div className="warehouse-details__wrapper-inventory__container__top--two--status--box">
                                            <h4 className={`warehouse-details__wrapper-inventory__container__top--two--status--box--text${
                                                inventory.status === "IN STOCK" ? "--instock" : "--outstock"
                                            }`}>
                                                {inventory.status}
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="warehouse-details__wrapper-inventory__container__top--two--quantity">
                                        <h4 className="warehouse-details__wrapper-inventory__container__top--two--quantity--header">QTY</h4>
                                        <p className="warehouse-details__wrapper-inventory__container__top--two--quantity--number p2">{inventory.quantity}</p>
                                    </div>
                                    <div className="warehouse-details__wrapper-inventory__container__top--two--actions-tablet"> {/*Div container exclusively for tablet and desktop only*/}
                                    <button id={inventory.itemName} type='button' onClick={deleteItemWarehouse}>
                                         <img id={inventory.id} src={deleteIcon}/>
                                    </button>
                                        <img 
                                            className="warehouse-details__wrapper-inventory__container__top--two--actions-tablet--icon" 
                                            src={editBlue}
                                            id={inventory.id}
                                            onClick={editItem}/>
                                    </div>
                                </div>
                            </div>
                            <div className="warehouse-details__wrapper-inventory__container__bottom">
                                <button id={inventory.itemName} type='button' onClick={deleteItemWarehouse}>
                                         <img id={inventory.id} src={deleteIcon}/>
                                </button>
                                <img src={editBlue} id={inventory.id} onClick={editItem}/>
                            </div>
                        </div>
                    </li>
                ))}
            </section>
        </>
    )
}
export default WarehouseInventoryList;