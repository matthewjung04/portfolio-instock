import { Link } from 'react-router-dom'
import './DeleteWarehouse.scss'

function DeleteWarehouse({name}) {

  const returnHome = () => {
    var popup = document.getElementById("deleteModal");
    popup.style.display = "none";
  }

  return (
    <div id='deleteModal' className='modal'>
      <article className='delete'>
        <h1>{`Delete ${name} warehouse?`}</h1>
        <p>
          {`Please confirm that you’d like to delete ${name} from the list of warehouses.
          You won’t be able to undo this action.`}
        </p>
        <div>
            <button type="button" onClick={returnHome}>Cancel</button>
          <Link>
            <button type="button">Delete</button>
          </Link>
        </div>
      </article>
    </div>
  )
}

export default DeleteWarehouse;