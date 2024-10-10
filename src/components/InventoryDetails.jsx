import { useParams } from 'react-router-dom';

function InventoryDetails() {
  const { id } = useParams();
  return (
    <div>
      <h1>Inventory Item Details</h1>
      <p>Details for inventory item {id} will be displayed here.</p>
    </div>
  );
}

export default InventoryDetails;