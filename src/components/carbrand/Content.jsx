import React from "react";
import {   getEveryCarAndModelInBrand } from "../../utils/getModelsFromBrand";
/* =============== Compontents & Layouts =============== */
import CarCard from "./CarCard";

const Content = ({ brand, models }) => {
  
  return (
    <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-4 content-start">
      {getEveryCarAndModelInBrand(brand).map(
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
