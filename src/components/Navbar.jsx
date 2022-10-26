import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  HiChevronDown,
  HiChevronRight,
  HiOutlineSearch,
  HiMenu,
  HiOutlineShoppingBag,
} from "react-icons/hi";
import carType from "../assets/carType.json"; // ประเภทรถ
import { useScroll, useNavBar } from "../hooks/"; // Custom hooks
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { navbarAnimation } from "../utils/animation";

const NavContext = React.createContext();

const Navbar = () => {
  const { openNav, closeNav, toggleNav, isNavOpen } = useNavBar(false);
  const scrollAmount = useScroll();
  useEffect(() => navbarAnimation(), []);

  return (
    <NavContext.Provider value={{ openNav, closeNav, toggleNav, isNavOpen }}>
      <div
        className={`p-4 bg-white shadow flex justify-between sticky z-30 w-full top-0 duration-100`}
      >
        <div className="flex flex-row-reverse lg:flex-row items-center gap-x-2 lg:gap-x-6">
          <Icon />
          <Divider />
          <Navigator />
        </div>
        <div className="ml-auto flex items-center space-x-2">
          {/* Right search and shopping*/}
          <Search />
          <Basket />
        </div>
        <SubNavigator />
      </div>
    </NavContext.Provider>
  );
};

const Navigator = () => {
  const { openNav, closeNav, toggleNav, isNavOpen } = useContext(NavContext);

  return (
    <ul className="text-[#546E7A] text-sm lg:text-base flex items-center">
      {/* Turn to be a drawer */}
      <li className="flex">
        <Link className="block w-full lg:p-0 text-center" to="/">
          หน้าหลัก
        </Link>
      </li>
      <li
        id="car-category"
        className="cursor-pointer px-4 relative flex items-center justify-center"
      >
        <span>หมวดหมู่รถยนต์</span>
      </li>
      <li className="flex items-center">
        <Link className="w-full text-center" to="/contact">
          ติดต่อบริการ
        </Link>
      </li>
    </ul>
  );
};

const SubNavigator = () => {
  return (
    <div
      id="sub-navigator"
      className="hidden opacity-0 bg-white justify-center space-x-8 shadow-realistic-1 absolute left-0 right-0 top-full py-4"
    >
      {carType.map((item) => {
        return (
          <div key={item}>
            <h4>{item}</h4>
            <ul>
              <li>xxxx</li>
              <li>xxxx</li>
              <li>xxxx</li>
              <li>xxxx</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

const Icon = () => (
  <div>
    <Link to="/" className="text-lg lg:text-2xl font-medium text-[#0D47A1]">
      Nikar<span className="text-[#263238]">.com</span>
    </Link>
  </div>
);

const Divider = () => (
  <div className="hidden lg:block w-[2px] self-stretch bg-[#B0BEC5] rounded" />
);

const Search = () => {
  const { closeNav } = useContext(NavContext);
  const scrollAmount = useScroll();

  return (
    <div className="relative" onClick={closeNav}>
      <input
        type="text"
        name="search"
        placeholder="ค้นหา"
        className={`bg-[#ECEFF1]  text-sm lg:text-base rounded-full pl-8 p-1 lg:pr-4 lg:py-2 outline-none w-24 lg:w-44 text-[#546E7A] transition-all duration-100`}
      />
      <HiOutlineSearch className="absolute text-sm top-1/2 left-3 transform -translate-y-1/2 pointer-events-none text-[#546E7A]" />
    </div>
  );
};

const Basket = () => {
  const navigate = useNavigate();
  return (
    <>
      <IconButton onClick={() => navigate("/cart")} size="medium">
        <Badge variant="dot" overlap="circular" color="primary">
          <HiOutlineShoppingBag className="text-lg lg:text-2xl text-[#546E7A]" />
        </Badge>
      </IconButton>
    </>
  );
};

const BackdropCloseNav = () => {
  const { closeNav, isNavOpen } = useContext(NavContext);

  return (
    <div
      onClick={closeNav}
      className={`${
        isNavOpen ? "fixed" : "hidden"
      } lg:hidden bg-black/40 top-0 left-0 right-0 bottom-0 z-10`}
    />
  );
};

export default Navbar;
