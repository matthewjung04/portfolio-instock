import Header from './components/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Warehouses from './components/Warehouses/Warehouses';
import AddWarehouse from './components/AddWarehouse/AddWarehouse';
import WarehouseDetails from './components/WarehouseDetails/WarehouseDetails';
import EditWarehouse from './components/EditWarehouse/EditWarehouse';
import Inventory from './components/Inventory/Inventory';
import AddInventory from './components/AddInventory/AddInventory';
import InventoryDetails from './components/InventoryDetails/InventoryDetails';
import EditInventory from './components/EditInventory/EditInventory';
import Footer from './components/Footer/Footer'
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Warehouses />} />
        <Route path="/warehouses/add" element={<AddWarehouse />} />
        <Route path="/warehouses/:id" element={<WarehouseDetails />} />
        <Route path="/warehouses/:id/edit" element={<EditWarehouse />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/inventory/add" element={<AddInventory />} />
        <Route path="/inventory/:id" element={<InventoryDetails />} />
        <Route path="/inventory/:id/edit" element={<EditInventory />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
