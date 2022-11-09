import React, { useEffect, useState, useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
/* ============== Components & Layouts ============== */
import Header from "../components/car/Header";
import CarTabs from "../layouts/car/CarTabs";
/* ============== Context ============== */
import { CarDetailContext } from "../context/CarDetailContext";

const Car = () => {
  const [carDetail, setCarDetail] = useContext(CarDetailContext);
  

  return (
    <div className="p-6 pt-12 lg:max-w-[60em] mx-auto">
      <Header  />
      <hr className="mb-4" />
      <CarTabs />
    </div>
  );
};

export default Car;
