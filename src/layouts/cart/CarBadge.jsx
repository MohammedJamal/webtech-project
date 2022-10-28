import React from "react";
import Rating from "@mui/material/Rating";

const CarBadge = ({ logoURL }) => {
    const CarIcon = () => (
      <div className="aspect-square flex items-center justify-center bg-gradient-to-t from-gray-50 to-gray-200 rounded-full">
        <img src={logoURL} alt={logoURL} className="w-12 md:w-18" />
      </div>
    );
  
    return (
      <div className="sticky top-14 py-2 pt-4 flex items-center space-x-4 mt-10 z-10 bg-white rounded">
        <CarIcon />
        <div className="flex flex-col leading-[1em] md:leading-[1.6em]">
          <h2 className="text-dark-3 ">BMW I8</h2>
          <div className="flex items-center space-x-4 divide-x-2">
            <p className="text-dark-1 text-sm md:text-base">บริษัทเอกะมาชิโดะ มอเตอร์</p>
            <Rating
              name="read-only"
              value={4}
              readOnly
              sx={{ fontSize: "1.2em", padding: "0 0 0 0.5em" }}
            />
          </div>
        </div>
      </div>
    );
  };

export default CarBadge