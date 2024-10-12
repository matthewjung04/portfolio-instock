import { useParams } from 'react-router-dom';
import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import editWhite from "../../assets/icons/edit-white-24px.svg";
import './WarehouseDetails.scss'

const WarehouseDetails = () => {
  const { id } = useParams();
  return (
    <section className="warehouse-details">
        <div className="warehouse-details__container">
            <div className="warehouse-details__container__top">
                <div className="warehouse-details__container__top__box">
                    <img className="warehouse-details__container__top__box--arrow" src={arrowBack}/>
                    <h1 className="warehouse-details__container__top__box--title" >Washington</h1>
                </div>
                    <img className="warehouse-details__container__top--edit" src={editWhite}/>
            </div>
      </div>

    </section>
  );
}

export default WarehouseDetails;