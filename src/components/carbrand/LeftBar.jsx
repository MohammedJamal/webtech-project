import React, { useEffect , useContext } from "react";
import { useParams } from "react-router-dom";
import { CarBrandContext } from "../../context/CarBrandContext";
/* ================ utils ================ */
import { getEveryCarAndModelInBrand , getModelsFromBrand } from "../../utils/carMethods";
/* ================ MUI ================ */
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const LeftBar = () => {
  const { carbrand } = useParams();
  const [{ isToggleLeftBar, setModelsFilter, removeModelInFilter,addModelInFilter }, setCarBrandState] = useContext(CarBrandContext);

  const toggleFilter = (checked, modelName) => {
    checked ?  addModelInFilter(modelName)  : removeModelInFilter(modelName)
  }

  return (
    <div
      className={`${isToggleLeftBar ? "block" : "hidden"} custom-scrollbar bg-white pl-0 p-4 sticky top-28 min-w-[10em] sm:min-w-[15em] max-w-[15em] h-[85vh] overflow-y-auto `}
    >
      <hr className="mb-4" />
      <ul>
        {getEveryCarAndModelInBrand(carbrand).map((model) => (
          <li key={model.modelName} className="mt-4">
            <h4 className="text-left w-full text-dark-2 text-sm">
              <FormControlLabel
                onChange={(e) => toggleFilter(e.target.checked, model.modelName)}
                control={<Checkbox defaultChecked />}
                label={model.modelName}
              />
            </h4>
            <ul className="">
              {model.carsOnEachModel.map((car) => (
                <li
                  key={car.name}
                  className="text-sm text-lighten-1 truncate"
                >
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
