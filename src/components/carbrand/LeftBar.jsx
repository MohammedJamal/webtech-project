import React , {useContext} from "react";
import { useParams } from "react-router-dom";
import { CarBrandContext } from "../../context/CarBrandContext";
/* ================ utils ================ */
import getModelsFromBrand from "../../utils/getModelsFromBrand";

const LeftBar = () => {
  const {carbrand} = useParams()
  const [carBrandState, setCarBrandState] = useContext(CarBrandContext);
  
  return (
    <div className={`custom-scrollbar bg-white pl-0 p-4 sticky top-28 max-w-[15em] h-[85vh] overflow-y-auto`}>
      <h3>LeftBar</h3>
    </div>
  );
};

export default React.memo(LeftBar);
