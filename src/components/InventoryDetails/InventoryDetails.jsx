import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { url } from '../../utils/utils.jsx'
import backArrow from '../../assets/icons/arrow_back-24px.svg'
import editIcon from '../../assets/icons/edit-white-24px.svg'
import './InventoryDetails.scss'

function InventoryDetails() {
  const { id } = useParams();
  let [inventoryData, setInventoryData] = useState({})
  
  useEffect(() => {
    const fetchInventory = async () => {  
      await axios
      .get(`${url}/api/inventories/${id}`)
      .then((res) => {
        setInventoryData(res.data);
      })
    }
    fetchInventory();
  },[])

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

        </div>
        <h4>WAREHOUSE</h4>
      </div>
    </section>
  )
}

export default InventoryDetails;