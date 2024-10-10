import { useParams } from 'react-router-dom';

function EditWarehouse() {
  const { id } = useParams();
  return (
    <div>
      <h1>Edit Warehouse</h1>
      <p>Form to edit warehouse {id} will go here.</p>
    </div>
  );
}

export default EditWarehouse;