import { useParams } from 'react-router-dom';
import axios from 'axios';
import backArrow from '../../assets/icons/arrow_back-24px.svg'
import './InventoryDetails.scss'

function InventoryDetails() {
  const { id } = useParams();
  return (
    <section>
      <div>
        <button><img src={backArrow}/></button>
        <h1></h1>
      </div>
    </section>
  )
}

export default InventoryDetails;