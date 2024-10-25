import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './InventoryPage.scss'
import InventoryList from '../../components/InventoryList/InventoryList';
import InventoryDetails from "../../components/InventoryDetails/InventoryDetails";


const InventoryPage = () => {

    const { id } = useParams();

    const [inventoryList, setInventoryList] = useState(null);
    const [inventoryData, setInventoryData] = useState(null);

    const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080';

    const fetchInventoryList = async() => {
        try {
            const { data } = await axios.get(baseUrl + "/api/inventories/");
            setInventoryList(data);
            return setInventoryList;
        }
        catch(error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchInventoryList();
    }, []);

    useEffect(() => {
        const fetchInventoryDetails = async() => {
            try {
                const { data } = await axios.get(baseUrl + "/api/inventories/" + id);
                setInventoryData(data);
                return setInventoryData;
            }
            catch(error) {
                console.error(error);
            }
        }
        fetchInventoryDetails();
    },[id])

    return (
        <main className="inventory-page">
            { inventoryList  && !id ? <InventoryList 
                inventoryDetails = {inventoryList}
            />: <InventoryDetails inventory = {inventoryData}/>
            }
        </main>
    )
}

export default InventoryPage;