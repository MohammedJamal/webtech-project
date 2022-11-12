import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
/* ============= utils ============= */
import commafy from "../../utils/commafy";
import { getCarImage } from "../../utils/getModelsFromBrand";

const CarCard = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { brand, modelName, name } = props;

  const navigateToCar = () => {
    navigate(`${location.pathname}/${props.name}`);
  };

  return (
    <div onClick={navigateToCar} className="cursor-pointer group">
      <div className="w-full aspect-square bg-lighten-3 rounded overflow-hidden">
        <img src={getCarImage(brand, modelName, name, 0)} alt={name} className="group-hover:scale-[1.1] w-full h-full object-cover transition-all duration-150 ease-out"/>
      </div>
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
