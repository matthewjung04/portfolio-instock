import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";
import './WarehousePage.scss'
import WarehouseList from '../../components/WarehouseList/WarehouseList'
import WarehouseDetails from '../../components/WarehouseDetails/WarehouseDetails';
import WarehouseInventoryList from '../../components/WarehouseInventoryList/WarehouseInventoryList';
import AddWarehouse from '../../components/AddWarehouse/AddWarehouse';
import EditWarehouse from '../../components/EditWarehouse/EditWarehouse';

const WarehousePage = () => {

    const { id } = useParams();
    const [warehouseDetails, setWarehouseDetails] = useState(null);
    const [warehouseInventoryList, setWarehouseInventoryList] = useState(null);
    const [ascSort, setAscSort] = useState(false);
    const [descSort, setDescSort] = useState(false);
    const [column, setColumn] = useState('');

    const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080';

    const navigate = useNavigate();

    //Function to sort the columns
    const sortList = (e) => {
        if (column != e.target.id) {
            setColumn(e.target.id);
            setAscSort(true)
        } else if (column === e.target.id) {
            if(!descSort) {
                setAscSort(false);
                setDescSort(true);
            } else if (descSort) {
                setAscSort(false);
                setDescSort(false);
            }

        }
    };

    //Sorts warehouses inventory list function
    const sortWarehousesInventoryList = async () => {
        if (descSort) {
            try {
            const { data } = await axios.get(`${baseUrl}/api/warehouses/${id}/inventories?sort_by=${column}&order_by=desc`);
            setWarehouseInventoryList(data);
            return setWarehouseInventoryList;
          }
          catch(error) {
            console.log(error);
          }
    
        } else {
          try {
            const { data } = await axios.get(`${baseUrl}/api/warehouses/${id}/inventories?sort_by=${column}&order_by=asc`);
            setWarehouseInventoryList(data);
            return setWarehouseInventoryList;
          }
          catch(error) {
            console.log(error);
          }
        }
    };
    
      useEffect(() => {
        sortWarehousesInventoryList();
      },[ascSort, descSort]);


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

    const addHandler = () => {
        navigate("/warehouses/add")
    }

    const editHandler = (e) => {
        const editID = e.target.parentElement.id;
        navigate(`/warehouses/${editID}/edit`);
    }
    
    return (
        <main className="warehouse-page">
            {warehouseDetails && warehouseInventoryList ? (
                <>
                    <WarehouseDetails
                        warehouseID = {warehouseDetails.id}
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
                        sorted = {sortList}
                    /> 
                </>
            ) : (
                    <WarehouseList
                        add = {addHandler}
                        edit = {editHandler}
                        sorted = {sortList}
                    />
            )}
        </main>
    )
}

export default WarehousePage;