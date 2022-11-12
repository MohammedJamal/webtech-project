import React, { useEffect, useContext } from "react";
import { useLoaderData } from "react-router-dom";

/* ============== Components & Layouts ============== */
import Content from "../components/carbrand/Content";
import TopBar from "../components/carbrand/TopBar";
import LeftBar from "../components/carbrand/LeftBar";
/* ============== Context ============== */
import { CarBrandContext } from "../context/CarBrandContext";

const CarBrand = () => {
  const car = useLoaderData();
  const [carBrandState, setCarBrandState] = useContext(CarBrandContext);
  const { isToggleSideBar } = carBrandState;

  return (
    <>
      <TopBar {...car} />
      <div className="flex px-6 max-w-[screen] ">
        {isToggleSideBar && <LeftBar {...car} />}
        <Content {...car} />
      </div>
    </>
  );
};

export default CarBrand;
