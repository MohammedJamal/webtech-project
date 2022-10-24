import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import {
  HiChevronDown,
  HiChevronRight,
  HiOutlineSearch,
  HiMenu,
} from "react-icons/hi";
import carType from "../assets/carType.json"; // ประเภทรถ
import { useScroll } from "../hooks/"; // Custom hooks

const NavContext = React.createContext();

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const openNav = () => setToggle(true);
  const closeNav = () => setToggle(false);
  const togglerNav = () => setToggle(!toggle);
  const scrollAmount = useScroll();

  return (
    <NavContext.Provider
      value={{ openNav, closeNav, togglerNav, isOpen: toggle }}
    >
      <div
        className={`${
          scrollAmount > 40
            ? "px-3 py-2 lg:px-6 lg:py-3"
            : "px-3 py-2 lg:px-6 lg:py-5"
        } flex justify-between  bg-white shadow sticky z-30 w-full top-0 duration-100`}
      >
        <div className="flex flex-row-reverse lg:flex-row items-center gap-x-2 lg:gap-x-6">
          <Icon />
          <Divider />
          <Navigator />
        </div>
        <div className="ml-auto">
          <Search />
        </div>
      </div>
      <BackdropCloseNav />
    </NavContext.Provider>
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

const SubnavContext = React.createContext();

const Navigator = () => {
  const { openNav, closeNav, isOpen } = useContext(NavContext);
  const [isToggleSubNav, setIsToggleSubNav] = useState(false);
  const togglerSubNav = () => setIsToggleSubNav(!isToggleSubNav);
  const closeSubNav = () => setIsToggleSubNav(false);

  return (
    <ul className="text-[#546E7A] text-sm lg:text-base flex items-center">
      <li className="block lg:hidden">
        <HiMenu className="text-lg" onClick={openNav} />
      </li>
      <li>
        <ul
          className={`${
            isOpen ? "left-0 " : "-left-full"
          } fixed z-20 top-0 w-full sm:w-2/3 lg:w-auto bg-white bottom-0 lg:static flex flex-col lg:flex-row lg:bg-transparent items-stretch lg:items-center lg:space-x-6 transition-all duration-300 ease-in-out divide-y lg:divide-y-0 sm:border-r lg:border-none border-gray-300`}
        >
          {/* Turn to be a drawer */}
          <li className="flex">
            <Link
              onClick={closeNav}
              className="w-full p-3 lg:p-0 text-center"
              to="/"
            >
              หน้าหลัก
            </Link>
          </li>
          <li className="relative flex items-center justify-center">
            <SubnavContext.Provider
              value={{ isToggleSubNav, setIsToggleSubNav, togglerSubNav }}
            >
              <button
                onClick={togglerSubNav}
                className="p-3 lg:p-0 flex  justify-center items-center w-full"
              >
                <span>หมวดหมู่รถยนต์</span>
                <HiChevronDown
                  className={`${
                    isToggleSubNav ? "rotate-180" : "rotate-0"
                  } text-lg duration-100`}
                />
              </button>
              <SubCategory />
            </SubnavContext.Provider>
          </li>
          <li className="flex items-center">
            <Link
              onClick={close}
              className="w-full p-3 lg:p-0 text-center"
              to="/contact"
            >
              ติดต่อบริการ
            </Link>
          </li>
          <li
            className={`${
              isOpen
                ? "visible opacity-100 bottom-0 "
                : "invisible opacity-0 -bottom-full "
            } lg:hidden absolute left-0 right-0 transition-all duration-300`}
          >
            <button
              className="outline-none bg-slate-500 w-full h-full p-2 text-white"
              onClick={() => {
                closeSubNav();
                closeNav();
              }}
            >
              ปิด
            </button>
          </li>
        </ul>
      </li>
    </ul>
  );
};

const SubCategory = () => {
  const { isToggleSubNav, togglerSubNav } = useContext(SubnavContext);
  return (
    <>
      <ul
        className={`${
          isToggleSubNav
            ? "visible opacity-100 translate-y-0"
            : "invisible opacity-0 -translate-y-4"
        } max-h-[20em] overflow-y-auto lg:max-h-screen lg:overflow-y-visible absolute top-10 lg:top-8 w-full lg:w-auto left-1/2 -translate-x-1/2 bg-gray-50 lg:rounded-md shadow-md border border-gray-200 transition-all duration-200 overflow-hidden`}
      >
        {carType.map((carType, i) => {
          return (
            <li
              onClick={togglerSubNav}
              key={carType}
              className="hover:bg-slate-200 cursor-pointer odd:bg-white even:bg-gray-50 px-4 py-2 text-sm lg:min-w-[20em] flex justify-between items-center duration-100"
            >
              <span>{carType}</span>
              <HiChevronRight className="text-slate-400" />
            </li>
          );
        })}
      </ul>
    </>
  );
};

const Search = () => {
  const { closeNav } = useContext(NavContext);

  return (
    <div className="relative" onClick={closeNav}>
      <input
        type="text"
        name="search"
        placeholder="ค้นหา"
        className="bg-[#ECEFF1] text-sm lg:text-base rounded-full pl-8 p-2 lg:pr-4 lg:py-2 outline-none w-32 lg:w-44 text-[#546E7A]"
      />
      <HiOutlineSearch className="absolute text-sm top-1/2 left-3 transform -translate-y-1/2 pointer-events-none text-[#546E7A]" />
    </div>
  );
};

const BackdropCloseNav = () => {
  const { closeNav, isOpen } = useContext(NavContext);

  return (
    <div
      onClick={closeNav}
      className={`${
        isOpen ? "fixed" : "hidden"
      } lg:hidden bg-black/40 top-0 left-0 right-0 bottom-0 z-10`}
    />
  );
};

export default Navbar;
