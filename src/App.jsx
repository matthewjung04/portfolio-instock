
import InventoryPage from './pages/InventoryPage/InventoryPage';
import Footer from './components/Footer/Footer'
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import AddWarehouse from "./components/AddWarehouse/AddWarehouse";
// import WarehouseDetails from './components/WarehouseDetails/WarehouseDetails';
import EditWarehouse from "./components/EditWarehouse/EditWarehouse";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
// import AddInventory from './components/AddInventory/AddInventory';
// import InventoryDetails from './components/InventoryDetails/InventoryDetails';
// import EditInventory from './components/EditInventory/EditInventory';

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<WarehousePage />} />
        <Route path="/warehouses/:id" element={<WarehousePage />} />
        <Route path="/warehouses/add" element={<AddWarehouse />} />
        <Route path="/warehouses/:id" element={<WarehousePage />} />
        <Route path="/warehouses/:id/edit" element={<EditWarehouse />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/inventory/:id" element={<InventoryPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
