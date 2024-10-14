import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import './WarehousePage.scss'
import WarehouseDetails from '../../components/WarehouseDetails/WarehouseDetails';

const WarehousePage = () => {

    const { id } = useParams();
    const [warehouseDetails, setWarehouseDetails] = useState(null);

    const baseUrl = import.meta.env.VITE_API_URL;

    const fetchWarehouseDetails = async (warehouseSelectedId) => {
        try {
            const { data } = await axios.get(baseUrl + "/warehouses/" + warehouseSelectedId);
            setWarehouseDetails(data);
            console.log(data);
            return setWarehouseDetails;
        }
        catch(error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchWarehouseDetails(id);
    }, [id]);


    return (
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
            /> : "loading"
            }
        </>
    )
}

export default WarehousePage;