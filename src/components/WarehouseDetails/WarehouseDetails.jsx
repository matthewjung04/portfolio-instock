import { useParams } from 'react-router-dom';

function WarehouseDetails() {
  const { id } = useParams();
  return (
    <div>
      <h1>Warehouse Details</h1>
      <p>Details for warehouse {id} will be displayed here.</p>
    </div>
  );
}

export default WarehouseDetails;