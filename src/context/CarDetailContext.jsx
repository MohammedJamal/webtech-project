import React from "react";
import { useParams } from "react-router-dom";
/* ============== utils ============== */
import { getEachCarDetail } from "../utils/getModelsFromBrand";

export const CarDetailContext = React.createContext();

const CarDetailProvider = ({ children }) => {
  const { carbrand, car } = useParams();

  return (
    <CarDetailContext.Provider value={{ ...getEachCarDetail(carbrand, car), carbrand:carbrand}}>
      {children}
    </CarDetailContext.Provider>
  );
};

export default CarDetailProvider;
