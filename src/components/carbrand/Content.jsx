import React , { useEffect, useContext } from "react";
import { getEveryCarAndModelInBrand } from "../../utils/carMethods";
/* =============== Compontents & Layouts =============== */
import CarCard from "./CarCard";
/* =============== utils =============== */
import {getModelsFromBrand} from "../../utils/carMethods"
/* =============== context =============== */
import { CarBrandContext } from "../../context/CarBrandContext";

const Content = ({ brand, models }) => {
  const [{ modelsFilter, setModelsFilter }, setCarBrandState] = useContext(CarBrandContext);

  useEffect(() => {
    setModelsFilter(getModelsFromBrand(brand))
  }, [brand])

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-4 content-start">
      {getEveryCarAndModelInBrand(brand).filter(model => {
        if(modelsFilter.includes(model.modelName)){
          return true
        }else{
          return false
        }
      }).map(
        ({ modelName, carsOnEachModel }) => {
          return carsOnEachModel.map((car) => {
            return <CarCard key={car.name} {...car} modelName={modelName} brand={brand}/>;
          });
        }
      )}
    </div>
  );
};


export default React.memo(Content);
