import React from "react";
import { useNavigate , useLocation} from "react-router-dom";
/* ============= utils ============= */
import commafy from "../../utils/commafy";
const CarCard = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToCar = () => {
    navigate(`${location.pathname}/${props.name}`);
  }
  
  return (
    <div onClick={navigateToCar} className="cursour">
      <div className="w-full aspect-square bg-lighten-3 rounded"></div>
      <div className="py-2">
        <h4 className="text-lg text-dark-4">{props.name}</h4>
        <p className="text-dark-1 text-sm">
          จำนวนร้านที่จำหน่ายอยู่ : {props.stores.length}
        </p>
        <p className="text-dark-4 flex justify-between">
          เริ่มต้น : {commafy(Math.min(...props.stores.map((store) => store.price)))}
        </p>
      </div>
    </div>
  );
};

export default React.memo(CarCard);
