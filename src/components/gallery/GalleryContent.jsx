import React from "react";
import { useSwiper } from "swiper/react";

const Content = ({ imageURL, description, carName, price }) => {
  return (
    <div className="rounded-md overflow-hidden group hover:bg-gray-50 duration-100 cursor-pointer">
      <img
        src={imageURL}
        alt={carName}
        className="w-[calc(100%-1em)] m-[0.5em] h-[10em] md:h-[12em] 2xl:h-[24em] object-center object-cover rounded-md shadow"
      />
      <div className="p-3 leading-[22px] px-4">
        <p className="text-sm lg:text-base text-dark-2 font-medium">
          {carName}
        </p>
        <p className="text-sm lg:text-base text-lighten-1">{description}</p>
        <p className="text-sm lg:text-base text-dark-2 mt-4">{price}</p>
      </div>
    </div>
  );
};

export default Content;
