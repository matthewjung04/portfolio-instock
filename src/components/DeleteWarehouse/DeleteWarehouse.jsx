import { url } from '../../utils/utils'
import axios from 'axios'
import { useEffect, useState } from 'react'
import closeIcon from '../../assets/icons/close-24px.svg'
import './DeleteWarehouse.scss'

function DeleteWarehouse({name, id}) {
  
  let [hasDelete, setHasDelete] = useState(false);
  
  const returnHome = () => {
    var popup = document.getElementById("deleteModal");
    popup.style.display = "none";
    
    
  }

  const deleteData = () => {
    setHasDelete(hasDelete=true)
  }

  useEffect(() => {
    const deleteWarehouseData = async () => {
      if(hasDelete) {
        await axios
          .delete(`${url}api/warehouses/${id}`)
          .then(() => {
            window.location.reload();
            returnHome();
          })
      }
    }
    deleteWarehouseData();
  },[hasDelete])

  return (
    <div id='deleteModal' className='modal'>
      <div className='delete'>
        <button  className='delete__close' type="button" onClick={returnHome}>
          <img src={closeIcon}/>
        </button>
        <h1 className='delete__title'>{`Delete ${name} warehouse?`}</h1>
        <p id='delete-message'>
          {`Please confirm that you’d like to delete ${name} from the list of warehouses.
          You won’t be able to undo this action.`}
        </p>
        <div className='delete__buttons'>
          <button  className='delete__buttons__cancel' type="button" onClick={returnHome}>Cancel</button>
          <button className='delete__buttons__confirm' type="button" onClick={deleteData}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteWarehouse;