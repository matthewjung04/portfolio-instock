import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import './WarehousePage.scss'
import WarehouseList from '../../components/WarehouseList/WarehouseList'
import WarehouseDetails from '../../components/WarehouseDetails/WarehouseDetails';
import WarehouseInventoryList from '../../components/WarehouseInventoryList/WarehouseInventoryList';

const WarehousePage = () => {

    const { id } = useParams();
    const [warehouseDetails, setWarehouseDetails] = useState(null);
    const [warehouseInventoryList, setWarehouseInventoryList] = useState(null);

    const baseUrl = import.meta.env.VITE_API_URL;

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
                    <WarehouseList />
            )}
        </>
    )
}

export default WarehousePage;