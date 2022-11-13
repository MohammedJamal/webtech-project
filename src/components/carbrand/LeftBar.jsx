import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CarBrandContext } from "../../context/CarBrandContext";
/* ================ utils ================ */
import { getEveryCarAndModelInBrand } from "../../utils/getModelsFromBrand";

const LeftBar = () => {
  const { carbrand } = useParams();
  const [carBrandState, setCarBrandState] = useContext(CarBrandContext);

  console.log(getEveryCarAndModelInBrand(carbrand));
  return (
    <div
      className={`custom-scrollbar bg-white pl-0 p-4 sticky top-28 max-w-[15em] h-[85vh] overflow-y-auto`}
    >
      <hr className="mb-4" />
      <ul>
        {getEveryCarAndModelInBrand(carbrand).map((model) => (
          <li key={model.modelName} className="mt-4">
            <h4 className="text-left w-full text-dark-2 text-sm">
              {model.modelName}
            </h4>
            <ul className="mt-1">
              {model.carsOnEachModel.map((car) => (
                <li key={car.id} className="text-xs text-lighten-1">
                  {car.name}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(LeftBar);
