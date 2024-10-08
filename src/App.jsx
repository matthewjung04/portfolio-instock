import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Warehouses from './components/Warehouses';
import AddWarehouse from './components/AddWarehouse';
import EditWarehouse from './components/EditWarehouse';
import WarehouseDetails from './components/WarehouseDetails';
import Inventory from './components/Inventory';
import AddInventory from './components/AddInventory';
import EditInventory from './components/EditInventory';
import InventoryDetails from './components/InventoryDetails';
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/warehouses">Warehouses</Link></li>
            <li><Link to="/inventory">Inventory</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/warehouses" element={<Warehouses />} />
          <Route path="/warehouses/add" element={<AddWarehouse />} />
          <Route path="/warehouses/:id" element={<WarehouseDetails />} />
          <Route path="/warehouses/:id/edit" element={<EditWarehouse />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/inventory/add" element={<AddInventory />} />
          <Route path="/inventory/:id" element={<InventoryDetails />} />
          <Route path="/inventory/:id/edit" element={<EditInventory />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;