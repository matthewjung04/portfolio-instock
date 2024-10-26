import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { url } from '../../utils/utils.jsx'
import backArrow from '../../assets/icons/arrow_back-24px.svg'
import editIcon from '../../assets/icons/edit-white-24px.svg'
import './InventoryDetails.scss'

function InventoryDetails() {
  const { id } = useParams();
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

  return (
    <section>
      <div>
        <button><img src={backArrow}/></button>
        <h1>{inventoryData.item_name}</h1>
        <button><img src={editIcon}/></button>
      </div>
      <div>
        <h4>ITEM DESCRIPTION:</h4>
        <p>{inventoryData.description}</p>
        <h4>CATEGORY:</h4>
        <p>{inventoryData.category}</p>
      </div>
      <div>
        <div>
          <h4></h4>
          
        </div>
        <h4>WAREHOUSE</h4>
        <p>{warehouseName}</p>
      </div>
    </section>
  )
}

export default InventoryDetails;