import { url } from '../../utils/utils.jsx'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import editSVG from '../../assets/icons/edit-24px.svg'
import deleteSVG from '../../assets/icons/delete_outline-24px.svg'
import chevron from '../../assets/icons/chevron_right-24px.svg'
import './WarehousePage.scss'

function WarehousePage() {
  let [warehouses, setWarehouses] = useState([]);

  useEffect(() => {
    const fetchWarehouses = async () => {
      await axios
        .get(`${url}/api/warehouses`)
        .then((res) => {
          console.log(res)
          setWarehouses(warehouses=res.data)
        })
    }
    fetchWarehouses();
  },[])
  console.log(warehouses)
  return(
    <section className='warehouses'>
      <article>
        <h1>Warehouses</h1>
        <div>
          <input type='text' name='search' placeholder='Search...'/>
          <button type='button'>+ Add New Warehouse</button>
        </div>
      </article>
      
      <table >
        {
          warehouses.map((warehouse) => (
            <>
              <tr>
                <td className='warehouses__rows'>
                  <article className='warehouses__rows__sub--top'>
                    <div>
                      <h4>WAREHOUSE</h4>
                      <Link className='warehouses__rows__sub--top__links'>
                        <h3>{warehouse.warehouse_name}</h3>
                        <img src={chevron}/>
                      </Link>
                    </div>
                    <div>
                      <h4>CONTACT NAME</h4>
                      <p2>{warehouse.contact_name}</p2>
                    </div>
                  </article>
                  <article className='warehouses__rows__sub--bottom'>
                    <div>
                      <h4>ADDRESS</h4>
                      <p2>{`${warehouse.address},${warehouse.city},${warehouse.country}`}</p2>
                    </div>
                    <div>
                      <h4>CONTACT INFORMATION</h4>
                      <p2>{warehouse.contact_phone}</p2>
                      <p2>{warehouse.contact_email}</p2>
                    </div>
                  </article>
                  <article className='warehouses__rows__sub--buttons'>
                    <Link><img src={editSVG}/></Link>
                    <Link><img src={deleteSVG}/></Link>
                  </article>
                </td>
              </tr>
            </>
          ))
        }
      </table>
    </section>
  )
}

export default WarehousePage;