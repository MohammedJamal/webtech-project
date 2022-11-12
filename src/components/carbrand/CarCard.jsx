import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
/* ============= utils ============= */
import commafy from "../../utils/commafy";
import { getEachCarDetail } from "../../utils/getModelsFromBrand";

const CarCard = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const { brand, modelName, name } = props;

  const imageURL = `car-images/${brand}/${modelName}/${name}`.replaceAll(" ", "_");
  const imgFileType = getEachCarDetail(brand, name).srcImg[0]

  // We need t combined imageURL with imageFielType

  const navigateToCar = () => {
    navigate(`${location.pathname}/${props.name}`);
  };

  return (
    <div onClick={navigateToCar} className="cursor-pointer group">
      <div className="w-full aspect-square bg-lighten-3 rounded overflow-hidden">
        <img src={imageURL + "/" + imgFileType} alt={name} className="group-hover:scale-[1.1] w-full h-full object-cover transition-all duration-150 ease-out"/>
      </div>
      <div className="py-2">
        <h4 className="text-lg text-dark-4">{props.name}</h4>
        <p className="text-dark-1 text-sm">
          จำนวนร้านที่จำหน่ายอยู่ : {props.stores.length}
        </p>
        <p className="text-dark-4 flex justify-between">
          เริ่มต้น :{" "}
          {commafy(Math.min(...props.stores.map((store) => store.price)))}
        </p>
      </div>
    </div>
  );
};

export default React.memo(CarCard);
