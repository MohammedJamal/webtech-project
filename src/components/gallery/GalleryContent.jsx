import React from "react";
import { useSwiper } from "swiper/react";

const Content = ({ imageURL, description, carName, price }) => {
  return (
    <div className="bg-slate-50 rounded-md overflow-hidden group hover:bg-slate-100 duration-100 cursor-pointer">
      <img
        src={imageURL}
        alt={carName}
        className="w-[calc(100%-1em)] m-[0.5em] h-[8em] lg:h-[12em] object-center object-cover rounded-md shadow"
      />
      <div className="p-3 leading-[22px] px-4">
        <p className="text-sm lg:text-base text-dark-2 font-semibold">
          {carName}
        </p>
        <p className="text-sm lg:text-base text-lighten-1">{description}</p>
        <p className="text-sm lg:text-base text-dark-2">{price}</p>
      </div>
    </div>
  );
};

export default Content;
