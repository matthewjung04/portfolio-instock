import { useParams } from 'react-router-dom';
import arrowBack from "../../assets/icons/arrow_back-24px.svg";

const WarehouseDetails = () => {
  const { id } = useParams();
  return (
    <section className="warehouse-details">
        <div className="warehouse-details__container">
            <div className="warehouse-details__container--top">
                <img src={arrowBack}/>
            </div>
      </div>

    </section>
  );
}

export default WarehouseDetails;