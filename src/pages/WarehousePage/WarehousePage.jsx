import { url } from '../../utils/utils.jsx'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import WarehouseDetails from '../../components/WarehouseDetails/WarehouseDetails';
import WarehouseList from '../../components/WarehouseList/WarehouseList.jsx';

function WarehousePage() {
  
  const { id } = useParams();
  const [warehouseDetails, setWarehouseDetails] = useState(null);

  const fetchWarehouseDetails = async (warehouseSelectedId) => {
    try {
        const { data } = await axios.get(`${url}/api/warehouses/${warehouseSelectedId}`);
        setWarehouseDetails(data);
        console.log(data);
        return setWarehouseDetails;
    }
    catch(error) {
        console.error(error);
    }
  };

  useEffect(() => {
    if(id) {
        fetchWarehouseDetails(id);
    } else {
        setWarehouseDetails(null);
    }
  }, [id]);


 
  return(
    <>
      { warehouseDetails ? <WarehouseDetails 
          warehouseName = {warehouseDetails.warehouse_name}
          warehouseAddress = {warehouseDetails.address}
          warehouseCity = {warehouseDetails.city}
          warehouseCountry = {warehouseDetails.country}
          warehouseContactName = {warehouseDetails.contact_name}
          warehouseContactPosition = {warehouseDetails.contact_position}
          warehouseContactPhone = {warehouseDetails.contact_phone}
          warehouseContactEmail = {warehouseDetails.contact_email}
      /> : <WarehouseList />
      }
    </>
  )
}

export default WarehousePage;