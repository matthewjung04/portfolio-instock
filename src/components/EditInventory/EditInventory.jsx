import { useParams } from 'react-router-dom';

function EditInventory() {
  const { id } = useParams();
  return (
    <div>
      <h1>Edit Inventory Item</h1>
      <p>Form to edit inventory item {id} will go here.</p>
    </div>
  );
}

export default EditInventory;