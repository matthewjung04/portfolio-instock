import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import './InventoryPage.scss'
import InventoryList from '../../components/InventoryList/InventoryList';
import InventoryDetails from "../../components/InventoryDetails/InventoryDetails";


const InventoryPage = () => {

    const { id } = useParams();

    const [inventoryList, setInventoryList] = useState(null);
    const [ascSort, setAscSort] = useState(false);
    const [descSort, setDescSort] = useState(false);
    const [column, setColumn] = useState('');
    const [searchKey, setSearchKey] = useState('');

    const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080';

    const searchResults = (e) => {
        setSearchKey(e.target.value);
    }

    const searchResultsClick = () => {
        var searchInput = document.getElementsByTagName("input")[0].value;
        setSearchKey(searchInput);
    }

    useEffect(() => {
        const fetchSearch = async () => {
            if(searchKey) {
                await axios
                    .get(`${baseUrl}/api/inventories?s=${searchKey}`)
                    .then((res) => {
                        setInventoryList(res.data);
                    })
                    .then(() => {
                        setSearchKey('');
                    })
            }
        }
        fetchSearch();
    },[searchKey])

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
                    .get(`${baseUrl}/api/inventories?sort_by=${column}&order_by=desc`)
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

    const navigate = useNavigate();

    const addHandler = () => {
        navigate('/inventory/add')
    }

    const editHandler = (e) => {
        const editID = e.target.id;
        navigate(`/inventory/${editID}/edit`);
    }

    return (
        <main className="inventory-page">
            { inventoryList && !id ? <InventoryList 
                inventoryDetails = {inventoryList}
                sorting = {sortList}
                searching = {searchResults}
                searchingIcon={searchResultsClick}
                add={addHandler}
                edit={editHandler}
            />: <InventoryDetails />
            }
        </main>
    )
}

export default InventoryPage;