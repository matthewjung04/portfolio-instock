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
        <div className="warehouse-details__wrapper">
            <div className="warehouse-details__wrapper__container">
                <div className="warehouse-details__wrapper__container__address">
                    <h4>WAREHOUSE ADDRESS:</h4>
                    <div className="warehouse-details__wrapper__container__address__text">
                    <p className="warehouse-details__wrapper__container__address--text--one p2">
                            33 Pearl Street SW, 
                        </p>
                        <p className="warehouse-details__wrapper__container__address--text--two p2"> 
                            Washington, USA
                        </p>
                    </div>        
                </div>                  
                <div className="warehouse-details__wrapper__container__bottom">
                    <div className="warehouse-details__wrapper__container__bottom--name">
                        <h4>CONTACT NAME:</h4>
                        <p className="warehouse-details__wrapper__container__bottom--name--text p2">
                            Graeme Lyon 
                            <br/>Warehouse Manager
                        </p>
                    </div>
                    <div className="warehouse-details__wrapper__container__bottom--information">
                        <h4>CONTACT INFORMATION:</h4>
                        <p className="warehouse-details__wrapper__container__bottom--information--text p2">
                            +1 (647) 504-0911
                            <br/>gylon@instock.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default WarehouseDetails;