import { useState, useEffect } from "react";
import axios from "axios";
import './InventoryPage.scss'
import InventoryList from '../../components/InventoryList/InventoryList';


const InventoryPage = () => {

    const [inventoryList, setInventoryList] = useState(null);

    const baseUrl = import.meta.env.VITE_API_URL;

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

    return (
        <main className="inventory-page">
            { inventoryList  ? <InventoryList 
                inventoryDetails = {inventoryList}
            />: "loading"
            }
        </main>
    )
}

export default InventoryPage;