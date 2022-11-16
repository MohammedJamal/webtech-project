import React , { useContext } from "react";
/* ============== utils ============== */
import { getCarBrandLogo } from "../../utils/carMethods";
/* ============== Context ============== */
import { CarDetailContext } from "../../context/CarDetailContext";

const Header = () => {
  const carDetail = useContext(CarDetailContext);
  
  return (
    <div className="flex items-center mb-4">
      <img
        src={`carbrand-icon/${getCarBrandLogo(carDetail.carbrand)}`}
        alt={carDetail.carbrand}
        className="w-16 bg-white border-2 border-lighten-1 rounded-full p-1"
      />
      <div className="ml-2 leading-[1em] md:leading-[1.6em]">
        <h2 className="text-dark-3  ">{carDetail.name}</h2>
        <p className="text-dark-1 text-sm md:text-base">
          Brand : {carDetail.carbrand[0].toUpperCase() + carDetail.carbrand.slice(1).toLowerCase()}
        </p>
      </div>
    </div>
  );
};

export default Header;
