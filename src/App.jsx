import { BrowserRouter, Routes, Route } from "react-router-dom";
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import AddWarehouse from "./components/AddWarehouse/AddWarehouse";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse";
import Footer from './components/Footer/Footer'
import Header from "./components/Header/Header";
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
