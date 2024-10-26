import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './InventoryPage.scss'
import InventoryList from '../../components/InventoryList/InventoryList';
import InventoryDetails from "../../components/InventoryDetails/InventoryDetails";


const InventoryPage = () => {

    const { id } = useParams();

    const [inventoryList, setInventoryList] = useState(null);
    const [ascSort, setAscSort] = useState(false);
    const [descSort, setDescSort] = useState(false);
    const [column, setColumn] = useState('');

    const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080';

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
    }

    useEffect(() => {
        const sortInventory = async () => {
            if (descSort) {
                await axios
                    .get(`http://localhost:8080/api/inventories?sort_by=${column}&order_by=desc`)
                    .then((res) => {
                        setInventoryList(res.data);
                        return setInventoryList;
                    })
            } else {
                await axios
                    .get(`${baseUrl}/api/inventories?sort_by=${column}&order_by=asc`)
                    .then((res) => {
                        setInventoryList(res.data);
                        return setInventoryList;
                    })

            }
        }
        sortInventory();
    },[ascSort, descSort])

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
            { inventoryList && !id ? <InventoryList 
                inventoryDetails = {inventoryList}
                sorting = {sortList}
            />: <InventoryDetails />
            }
        </main>
    )
}

export default InventoryPage;