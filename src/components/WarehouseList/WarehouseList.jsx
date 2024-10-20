import { url } from '../../utils/utils.jsx'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import editSVG from '../../assets/icons/edit-24px.svg'
import deleteSVG from '../../assets/icons/delete_outline-24px.svg'
import chevron from '../../assets/icons/chevron_right-24px.svg'
import DeleteWarehouse from '../DeleteWarehouse/DeleteWarehouse.jsx'
import './WarehouseList.scss'

function WarehouseList({ add, edit}) {
  let [warehouses, setWarehouses] = useState([]);
  let [warehouseName, setWarehouseName] = useState("");

  const deleteHandler = (e) => {
    console.log(e.target.parentElement.id)
    setWarehouseName(e.target.parentElement.id)
    var popup = document.getElementById("deleteModal");
    popup.style.display = "block";
  }

  useEffect(() => {
    const fetchWarehouses = async () => {
      await axios
        .get(`${url}/api/warehouses`)
        .then((res) => {
          setWarehouses(warehouses=res.data)
        })
    }
    fetchWarehouses();
  },[])

  return (
    <>
      <DeleteWarehouse
        name={warehouseName}
      />
      <section className='warehouses'>
        <article className='warehouses__header'>
          <h1>Warehouses</h1>
          <div className='warehouses__header__nav'>
            <input
              className='warehouses__header__nav__search'
              type='text'
              name='search' 
              placeholder='Search...'
            />
            <button className='warehouses__header__nav__add' type='button' onClick={add}>
              + Add New Warehouse
            </button>
          </div>
        </article>
      
        <table className='warehouses__list'>
          {
            warehouses.map((warehouse) => (
              <tbody key={warehouse.id}>
                <tr id={warehouse.id}>
                  <td className='warehouses__list__rows'>
                    <article className='warehouses__list__rows__top'>
                      <div>
                        <h4>WAREHOUSE</h4>
                        <Link to={`/warehouses/${warehouse.id}`} id='link'>
                        {warehouse.warehouse_name}
                          <img src={chevron}/>
                        </Link>
                      </div>
                      <div className='warehouses__list__rows__top__item'>
                        <h4>CONTACT NAME</h4>
                        <p id='text'>{warehouse.contact_name}</p>
                      </div>
                    </article>
                    <article className='warehouses__list__rows__bottom'>
                      <div className='warehouses__list__rows__bottom__address'>
                        <h4>ADDRESS</h4>
                        <p id='text'>{`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}</p>
                      </div>
                      <div className='warehouses__list__rows__bottom__contact'>
                        <h4>CONTACT INFORMATION</h4>
                        <p id='text'>{warehouse.contact_phone}</p>
                        <p id='text'>{warehouse.contact_email}</p>
                      </div>
                    </article>
                    <article className='warehouses__list__rows__buttons'>
                      <button id={warehouse.warehouse_name} type='button' onClick={deleteHandler}><img src={deleteSVG}/></button>
                      <button id={warehouse.id} type='button' onClick={edit}><img src={editSVG}/></button>
                    </article>
                  </td>
                </tr>
              </tbody>
            ))
          }
        </table>
      </section>
    </>
  )
}

export default WarehouseList;