import React, {  useContext } from "react";
/* ============== Components & Layouts ============== */
import Header from "../components/car/Header";
import CarTabs from "../layouts/car/CarTabs";
/* ============== Context ============== */
import { CarDetailContext } from "../context/CarDetailContext";

const Car = () => {
  const carDetail = useContext(CarDetailContext);

  return (
    <div className="p-6 pt-12 lg:max-w-[50em] mx-auto pb-24">
      <Header  />
      <hr className="mb-4" />
      <CarTabs />
    </div>
  );
};

export default Car;
