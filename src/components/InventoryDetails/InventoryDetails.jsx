import { useParams,useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { url } from '../../utils/utils.jsx'
import backArrow from '../../assets/icons/arrow_back-24px.svg'
import editIcon from '../../assets/icons/edit-white-24px.svg'
import './InventoryDetails.scss'

function InventoryDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  let [inventoryData, setInventoryData] = useState({});
  let [warehouseID, setWarehouseID] = useState(0);
  let [warehouseName, setWarehouseName] = useState('');
  
  useEffect(() => {
    const fetchInventory = async () => {
      if(id) {
        await axios
          .get(`${url}/api/inventories/${id}`)
          .then((res) => {
            setInventoryData(res.data);
            setWarehouseID(res.data.warehouse_id)
          })
      }
    }
    fetchInventory();
  },[id])

  useEffect(() => {
    const fetchWarehouseName = async () => {
      if(warehouseID) {
        await axios
        .get(`${url}/api/warehouses/${warehouseID}`)
        .then((res) => {
          setWarehouseName(res.data.warehouse_name)
        })
      }
    }
    fetchWarehouseName();
  },[warehouseID])

  const returnToInventory = () => {return(navigate('/inventory'))}

  const editInventoryID = () => {return(navigate(`/inventory/${inventoryData.id}/edit`))}

  return (
    <section className="inventory-details">
      <div className="inventory-details__container">
        <div className="inventory-details__container__top">
          <div className="inventory-details__container__top__box">
            <img className="inventory-details__container__box--arrow" src={backArrow} onClick={returnToInventory}/>
            <h1 className="inventory-details__container__box--title">{inventoryData.item_name}</h1>
          </div>
          <button className="inventory-details__container__top__box-edit">
            <img className="inventory-details__container__top__box-edit--icon" src={editIcon} onClick={editInventoryID}/>
            <h3 className="inventory-details__container__top__box-edit--text">Edit</h3>
          </button>
        </div>
      </div>
      <div className="inventory-details__wrapper">
        <div className="inventory-details__wrapper__container">
          <div className="inventory-details__wrapper__container__top">
            <div>
              <h4>ITEM DESCRIPTION:</h4>
              <p className="inventory-details__wrapper__container__top--description p2">{inventoryData.description}</p>
            </div>
            <div>
              <h4>CATEGORY:</h4>
              <p className="p2">{inventoryData.category}</p>
            </div>  
          </div>
          <div className="inventory-details__wrapper__container__info">
            <div className="inventory-details__wrapper__container__info__one">
              <div>
              <h4 className="inventory-details__wrapper__container__info__one--header">STATUS:</h4>
                <h4 className={`inventory-details__wrapper__container__info__one--text${
                    inventoryData.status === "IN STOCK" ? "--instock" : "--outstock"
                }`}>{inventoryData.status}</h4>
              </div>
              <div>
                <h4>WAREHOUSE:</h4>
                <p className="p2">{warehouseName}</p>
              </div>
            </div>
            <div className="inventory-details__wrapper__container__info__two">
              <h4>QUANTITY:</h4>
              <p className="p2">{inventoryData.quantity}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InventoryDetails;