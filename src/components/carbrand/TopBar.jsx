import React, { useContext, useState, useEffect } from "react";
import { CarBrandContext } from "../../context/CarBrandContext";
import { HiOutlineAdjustments } from "react-icons/hi";
/* =============== MUI =============== */
import ButtonBase from "@mui/material/ButtonBase";

const TopBar = ({brand, models }) => {
  const [{ toggleSideBar }, setCarBrandState] = useContext(CarBrandContext);

  const toggleLeftBar = () => toggleSideBar();

  return (
    <div className="sticky z-10 top-12 left-0 flex justify-between p-6 pb-2 bg-white">
      <h3 className="text-dark-3">{brand || "-"} ({models.length})</h3>
      <ButtonBase
        onClick={toggleLeftBar}
        sx={{ p: "0.5em", display: "flex", gap: "0.25em", color: "#546E7A" }}
      >
        <span>ซ่อนตัวกรอง</span>
        <HiOutlineAdjustments className="text-lg" />
      </ButtonBase>
    </div>
  );
};

export default TopBar;
