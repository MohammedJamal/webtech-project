import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  HiOutlineX,
  HiChevronLeft,
  HiChevronRight,
  HiOutlineSearch,
  HiMenu,
  HiOutlineShoppingBag,
} from "react-icons/hi";
import carType from "../assets/carType.json"; // ประเภทรถ
import { useScroll, useNavBar, useSubNavBar, useSearch } from "../hooks/"; // Custom hooks
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Backdrop from "@mui/material/Backdrop";
import { navbarAnimation, searchAnimation } from "../utils/animation";

const NavContext = React.createContext();

const Navbar = () => {
  const { openNav, closeNav, toggleNav, isNavOpen } = useNavBar(false);
  const { openSubNav, closeSubNav, toggleSubNav, isSubNavOpen } =
    useSubNavBar(false);
  const scrollAmount = useScroll();

  useEffect(() => navbarAnimation(), []);

  return (
    <NavContext.Provider
      value={{
        openNav,
        closeNav,
        toggleNav,
        isNavOpen,
        openSubNav,
        closeSubNav,
        toggleSubNav,
        isSubNavOpen,
      }}
    >
      <div
        className={`${
          scrollAmount > 50 ? "p-1 md:p-0 md:px-4 " : "p-2"
        } bg-white shadow flex justify-between sticky z-30 w-full top-0 duration-100 px-4 `}
      >
        <div className="flex flex-row items-center gap-x-2 lg:gap-x-6">
          <Icon />
          <Divider />
          <Navigator />
        </div>
        <div className="ml-auto flex items-center ">
          {/* Right search and shopping*/}
          <Search />
          <Basket />
          <HamburgerBar />
        </div>
      </div>
    </NavContext.Provider>
  );
};

const Navigator = () => {
  const { openNav, closeNav, toggleNav, isNavOpen } = useContext(NavContext);

  return (
    <div className="select-none w-screen md:w-auto h-screen md:h-full absolute md:static overflow-hidden top-0 left-0">
      <ul
        className={`${
          isNavOpen ? "right-0 " : "-right-full"
        } absolute z-20 md:static top-0 
     bg-white w-screen max-w-[25em] h-screen md:w-auto md:h-full md:bg-transparent
      flex flex-col md:flex-row  text-[#546E7A]
       p-4 md:p-0 ease-out duration-500`}
      >
        <SubNavigator />
        {/* Turn to be a drawer */}
        <li className="md:hidden">
          <HiOutlineX
            onClick={closeNav}
            className="text-2xl block ml-auto p-4 box-content"
          />
        </li>
        <li className="flex w-full ">
          <Link
            onClick={closeNav}
            className="w-full flex justify-between p-4 border-transparent border-b-2 hover:border-bluegrey-dark-2 duration-150"
            to="/"
          >
            <span className="whitespace-nowrap text-xl md:text-base">
              หน้าหลัก
            </span>
            <HiChevronRight className="md:hidden text-2xl translate-y-0.5" />
          </Link>
        </li>
        <li
          id="car-category"
          className="border-transparent border-b-2 hover:border-bluegrey-dark-2 duration-150 w-full flex justify-between cursor-pointer p-4"
        >
          <span className="whitespace-nowrap text-xl md:text-base">
            หมวดหมู่รถยนต์
          </span>
          <HiChevronRight className="md:hidden text-2xl translate-y-0.5" />
        </li>
        <li className="flex">
          <Link
            onClick={closeNav}
            className="w-full flex justify-between p-4 border-transparent border-b-2 hover:border-bluegrey-dark-2 duration-150"
            to="/contact"
          >
            <span className="whitespace-nowrap text-xl md:text-base">
              ติดต่อบริการ
            </span>
            <HiChevronRight className="md:hidden text-2xl translate-y-0.5" />
          </Link>
        </li>
      </ul>
      <BackdropCloseNav />
    </div>
  );
};

const SubNavigator = () => {
  return (
    <li
      id="sub-navigator"
      className="hidden md:overflow-x-scroll opacity-0 bg-white z-30
       w-full md:max-w-none flex-col items-center
       md:shadow-realistic-1 absolute
       overflow-y-scroll md:overflow-y-auto
        md:left-0 right-0 top-0 bottom-0 md:bottom-auto md:top-full p-6 pt-0 md:pt-4"
    >
      <div className="sticky top-0  z-10 w-full md:hidden bg-white pt-4">
        <div id="back-main-nav" className="text-xl flex items-center">
          <HiChevronLeft className="text-2xl mr-4" />
          <span>ย้อนกลับ</span>
        </div>
        <hr className="my-4" />
      </div>
      <div className="flex w-full max-w-[70em] justify-center flex-col md:flex-row flex-wrap">
        {carType.map((item) => {
          return (
            <div key={item} className="p-2 w-full md:w-[20%]">
              <h4 className="carlist-animation font-medium">{item}</h4>
              <ul className="text-sm text-bluegrey-light-2">
                <li className="carlist-animation">xxxx-yyyy</li>
                <li className="carlist-animation">xxxx-yyyy</li>
                <li className="carlist-animation">xxxx-yyyy</li>
                <li className="carlist-animation">xxxx-yyyy</li>
                <li className="carlist-animation">xxxx-yyyy</li>
                <li className="carlist-animation">xxxx-yyyy</li>
                <li className="carlist-animation">xxxx-yyyy</li>
              </ul>
            </div>
          );
        })}
      </div>
    </li>
  );
};

const Icon = () => (
  
    <Link to="/" className="text-lg lg:text-2xl font-medium text-[#0D47A1]">
      Nikar
      <span className="text-[#263238]">.com</span>
    </Link>
  
);

const Divider = () => (
  <div className="hidden md:block w-[2px] h-3/4 my-auto self-stretch bg-[#B0BEC5] rounded" />
);

const Search = () => {
  const { openSearch, closeSearch, toggleSearch, isSearchOpen } =
    useSearch(false);

  useEffect(() => {
    if (isSearchOpen) {
      searchAnimation();
    }
  }, [isSearchOpen]);

  const SearchModal = () => {
    return (
      <div>
        <div className="fixed top-1/2 left-1/2 flex flex-col -translate-x-1/2 -translate-y-1/2 z-30">
          <div id="search" className=" relative">
            <input
              type="text"
              name="search"
              placeholder="ค้นหา"
              className={`bg-[#ECEFF1] focus:bg-white/60 text-xl rounded-full pl-12 p-4 outline-none w-[75vw] max-w-[40em] text-[#546E7A] focus:text-bluegrey-dark-4 transition-all focus:shadow-realistic-1 focus:ring-2 ring-offset-4 duration-100 ring-offset-white `}
            />
            <HiOutlineSearch className="absolute text-2xl top-1/2 left-3 transform -translate-y-1/2 pointer-events-none " />
          </div>
          {/* <div className="w-[75vw] max-w-[40em] bg-white mt-6 rounded-lg p-4">
            <p>Smth</p>
          </div> */}
        </div>
        <Backdrop
          sx={{ color: "#fff", zIndex: "20", backdropFilter: "blur(10px)" }}
          open={isSearchOpen}
          onClick={closeSearch}
        />
      </div>
    );
  };

  return (
    <>
      <IconButton
        onClick={() => {
          toggleSearch();
        }}
        id="search-modal"
        size="medium"
      >
        <HiOutlineSearch className="text-lg lg:text-2xl text-[#546E7A]" />
      </IconButton>

      {isSearchOpen && <SearchModal />}
    </>
  );
};

const HamburgerBar = () => {
  const { openNav } = useContext(NavContext);
  return (
    <div onClick={openNav} className="md:hidden">
      <IconButton size="medium">
        <HiMenu />
      </IconButton>
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
  const { openNav, closeNav, toggleNav, isNavOpen } = useContext(NavContext);

  return (
    <div
      onClick={closeNav}
      className={`${
        isNavOpen ? "fixed" : "hidden"
      } md:hidden bg-black/40 top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm`}
    />
  );
};

export default Navbar;
