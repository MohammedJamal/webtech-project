import React, { useContext } from "react";
/* ============ context ============ */
import { CarDetailContext } from "../../../context/CarDetailContext";
/* ============ utils ============ */
import {getCarImage , getModelFromCarName} from "../../../utils/carMethods"

const Detail = () => {
  const carDetail = useContext(CarDetailContext);
  
  const {carbrand, name} = carDetail;
  const modelName = getModelFromCarName(carbrand, name)

  const listDisplay = [
    {
      name: "Acceleration",
      value: carDetail.Acceleration,
    },
    {
      name: "Wheelbase",
      value: carDetail.Wheelbase,
    },
    {
      name: "Combined",
      value: carDetail.combined,
    },
    {
      name: "powerKW",
      value: carDetail.powerKW,
    },
    {
      name: "powerPS",
      value: carDetail.powerPS,
    },
    {
      name: "topspeed",
      value: carDetail.topspeed,
    },
  ];
  return (
    <>
      <div className="">
        <img src={getCarImage(carbrand, modelName,name, 0)} alt={name} className="w-full rounded-xl"/> 
        <div className="mt-8 ">
          <h2>
            <span className="py-0 px-2 bg-blue-50 rounded-lg text-blue-500">
              {carDetail.carbrand[0].toUpperCase() + carDetail.carbrand.slice(1).toLowerCase()}
            </span>
            <span className="text-bluegrey-dark-2"> {carDetail.name}</span>
          </h2>
          <ul className="mt-4 bg-lighten-3/20 p-2 rounded divide-y">
            {listDisplay.map((detail) => {
              return (
                <li key={detail.name} className="flex justify-between py-2">
                  <p className="text-bluegrey-dark-2 font-medium">
                    {detail.name}
                  </p>
                  <p className="text-blue-500">{detail.value}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Detail;
