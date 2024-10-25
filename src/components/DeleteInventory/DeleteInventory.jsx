import axios from "axios";
import { useEffect, useState } from "react";
import closeIcon from "../../assets/icons/close-24px.svg"
import "./DeleteInventory.scss"

const DeleteInventory = ({ itemName, id }) => {
    const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080';

    const [hasDelete, setHasDelete] = useState(null);

    const deleteInventoryItem = async () => {
        try {
            const { data } = await axios.delete(baseUrl + "/api/inventories" + id);
            const itemDelete = document.getElementById(id);
            window.location.reload();
            return itemDelete.remove();
        }
        catch(error) {
            console.error(error);
        }
    }

    const returnInventoryPage = () => {

    };

    return (
        <div id="deleteInventoryModal" className="inventory-modal">
            <div className="inventory-modal__container">
                <div className="inventory-modal__container__top">
                    <img className="inventory-modal__container__top--close-icon" src={closeIcon} onClick={() => returnInventoryPage}/>
                    <h1 className="inventory-modal__container__top--title">{`Delete ${itemName} inventory item?`}</h1>
                    <p className="inventory-modal__container__top--text">{`Please confirm that you'd like to delete ${itemName} from the inventory list. You won't be able to undo this action.`}</p>
                </div>
                <div className="inventory-modal__container__actions">
                    <button  className='inventory-modal__container__actions--cancel' onClick={() => returnInventoryPage}>Cancel</button>
                    <button className='inventory-modal__container__actions--delete' onClick={() => deleteInventoryItem}>Delete</button>
                </div>
            </div>
                
        </div>
    )
}

export default DeleteInventory;