import React from "react";
import { useParams } from "react-router-dom";
/* ============== utils ============== */
import { getEachCarDetail } from "../utils/getModelsFromBrand";

export const CarDetailContext = React.createContext();

const CarDetailProvider = ({ children }) => {
  const { carbrand, car } = useParams();

  const [carDetail, setCarDetail] = React.useState({
    detail:{ ...getEachCarDetail(carbrand, car), carbrand},
    
  });

  return (
    <CarDetailContext.Provider value={[carDetail, setCarDetail]}>
      {children}
    </CarDetailContext.Provider>
  );
};

export default CarDetailProvider;
