import React, { useEffect } from "react";
import { useScroll } from "../hooks/"; // Custom hooks
import { navbarAnimation } from "../utils/animation";

/* ================== Import layouts ================== */
import BasketIcon from "../layouts/navbar/BasketIcon";
import HamburgerBar from "../layouts/navbar/HamburgerBar";
import BrandIcon from "../layouts/navbar/BrandIcon";
import Navigator from "../layouts/navbar/Navigator";
import Search from "../layouts/navbar/Search";

const Navbar = () => {
  const scrollAmount = useScroll();
  useEffect(() => navbarAnimation(), []);

  return (
    <div
      className={`${
        scrollAmount > 50 ? "p-1 md:p-0 md:px-4 " : "p-2"
      } bg-white shadow flex justify-between sticky z-30 w-full top-0 duration-100 px-4 `}
    >
      <div className="flex flex-row items-center gap-x-2 lg:gap-x-6">
        <BrandIcon />
        <Divider />
        <Navigator />
      </div>
      <div className="ml-auto flex items-center ">
        {/* Right search and shopping*/}
        <Search />
        <BasketIcon />
        <HamburgerBar />
      </div>
    </div>
  );
};

const Divider = () => (
  <div className="hidden md:block w-[2px] h-3/4 my-auto self-stretch bg-[#B0BEC5] rounded" />
);

export default React.memo(Navbar);
