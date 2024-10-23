import closeIcon from '../../assets/icons/close-24px.svg'
import './DeleteWarehouse.scss'

function DeleteWarehouse({name}) {

  const returnHome = () => {
    var popup = document.getElementById("deleteModal");
    popup.style.display = "none";
  }

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
          <button className='delete__buttons__confirm' type="button">Delete</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteWarehouse;