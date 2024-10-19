import { url } from '../../utils/utils.jsx'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import WarehouseDetails from '../../components/WarehouseDetails/WarehouseDetails';
import WarehouseList from '../../components/WarehouseList/WarehouseList.jsx';
import WarehouseInventoryList from '../../components/WarehouseInventoryList/WarehouseInventoryList';

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
    const { id } = useParams();
    const [warehouseDetails, setWarehouseDetails] = useState(null);
    const [warehouseInventoryList, setWarehouseInventoryList] = useState(null);

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
    const fetchWarehouseDetails = async (warehouseSelectedId) => {
        try {
            const { data } = await axios.get(baseUrl + "/api/warehouses/" + warehouseSelectedId);
            setWarehouseDetails(data);
            return setWarehouseDetails;
        }
        catch(error) {
            console.error(error);
        }
    };

    const fetchWarehouseInventoryList = async (warehouseSelectedId) => {
        try {
            const { data } = await axios.get(baseUrl + "/api/warehouses/" + warehouseSelectedId + "/inventories");
            setWarehouseInventoryList(data);
            console.log(data);
            return setWarehouseInventoryList;
        }
        catch(error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if(id) {
            fetchWarehouseDetails(id);
            fetchWarehouseInventoryList(id);
        } else {
            setWarehouseDetails(null);
            setWarehouseInventoryList(null);
        }
    }, [id]);

    console.log(warehouseInventoryList)

    return (
        <>
            {warehouseDetails && warehouseInventoryList ? (
                <>
                    <WarehouseDetails 
                        warehouseName = {warehouseDetails.warehouse_name}
                        warehouseAddress = {warehouseDetails.address}
                        warehouseCity = {warehouseDetails.city}
                        warehouseCountry = {warehouseDetails.country}
                        warehouseContactName = {warehouseDetails.contact_name}
                        warehouseContactPosition = {warehouseDetails.contact_position}
                        warehouseContactPhone = {warehouseDetails.contact_phone}
                        warehouseContactEmail = {warehouseDetails.contact_email}
                    />
                    <WarehouseInventoryList
                        warehouseInventory = {warehouseInventoryList}
                    /> 
                </>
            ) : (
                    "loading..."
            )}
        </>
    )
}

export default WarehousePage;