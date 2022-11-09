import React , { useContext } from "react";
/* ============== utils ============== */
import { getCarBrandLogo } from "../../utils/getModelsFromBrand";
/* ============== Context ============== */
import { CarDetailContext } from "../../context/CarDetailContext";

const Header = () => {
  const [carDetail, setCarDetail] = useContext(CarDetailContext);
  const {detail} = carDetail;
    
  return (
    <div className="flex items-center mb-4">
      <img
        src={`carbrand-icon/${getCarBrandLogo(detail.carbrand)}`}
        alt={detail.carbrand}
        className="w-16 bg-white border-2 border-lighten-1 rounded-full p-1"
      />
      <div className="ml-2 leading-[1em] md:leading-[1.6em]">
        <h2 className="text-dark-3  ">{detail.name}</h2>
        <p className="text-dark-1 text-sm md:text-base">
          Brand : {detail.carbrand[0].toUpperCase() + detail.carbrand.slice(1).toLowerCase()}
        </p>
      </div>
    </div>
  );
};

export default Header;
