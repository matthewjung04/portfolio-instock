import chevron from "../../assets/icons/chevron_right-24px.svg";
import editBlue from "../../assets/icons/edit-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import sortDefault from "../../assets/icons/sort-24px.svg";
import searchIcon from "../../assets/icons/search-24px.svg";
import './InventoryList.scss'


const InventoryList = () => {
    return (
        <section className="inventory-list">        
            <div className="inventory-list__container">
                <div className="inventory-list__container__top">
                    <div className="inventory-list__container__top__box">
                        <h1 className="inventory-list__container__top__box--title">Inventory</h1>
                    </div>
                    <div className="inventory-list__container__top__box-functionality">
                        <div className="inventory-list__container__top__box-functionality--search-bar">
                            <input className="inventory-list__container__top__box-functionality--search-bar--input" type="text" name="search" placeholder="Search..."/>
                            <img className="inventory-list__container__top__box-functionality--search-bar--icon" src={searchIcon}/>
                        </div>
                        <div className="inventory-list__container__top__box-functionality--bottom">
                            <button>+ Add New Item</button>
                        </div>
                    </div>
                </div> 
            </div>
        </section>
    )
};

export default InventoryList;