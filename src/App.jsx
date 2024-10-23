import { BrowserRouter, Routes, Route } from "react-router-dom";
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import WarehouseAddPage from "./pages/WarehouseAddPage/WarehouseAddPage";
import WarehouseEditPage from "./pages/WarehouseEditPage/WarehouseEditPage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import InventoryAddPage from "./pages/InventoryAddPage/InventoryAddPage"
import InventoryEditPage from "./pages/InventoryEditPage/InventoryEditPage"
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
        <Route path="/warehouses/add" element={<WarehouseAddPage />}/>
        <Route path="/warehouses/:id/edit" element={<WarehouseEditPage />}/>
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/inventory/:id" element={<InventoryPage />} />
        <Route path="/inventory/add" element={<InventoryAddPage />}/>
        <Route path="/inventory/:id/edit" element={<InventoryEditPage />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
