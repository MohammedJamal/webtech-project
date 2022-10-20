import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { HiChevronDown, HiOutlineSearch, HiMenu } from "react-icons/hi";

const NavContext = React.createContext();

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const open = () => setToggle(true);
  const close = () => setToggle(false);
  const toggler = () => setToggle(!toggle);

  useEffect(() => {
    console.log(toggle);
  }, [toggle]);

  return (
    <NavContext.Provider value={{ open, close, toggler, isOpen: toggle }}>
      <div className=" flex justify-between px-3 py-2 lg:px-6 lg:py-4 bg-white shadow">
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

const Navigator = () => {
  const { open, close, toggler, isOpen } = useContext(NavContext);

  return (
    <ul className="text-[#546E7A] text-sm lg:text-base flex items-center">
      <li className="block lg:hidden">
        <HiMenu className="text-lg" onClick={open} />
      </li>
      <li>
        <ul
          className={`${
            isOpen ? "left-0 " : "-left-full"
          } fixed z-20 top-0 w-full sm:w-2/3 lg:w-auto bg-white bottom-0 lg:static flex flex-col lg:flex-row lg:bg-transparent items-stretch lg:items-center lg:space-x-4 transition-all duration-300 ease-in-out divide-y lg:divide-y-0`}
        >
          {/* Turn to be a drawer */}
          <li className="flex">
            <Link onClick={close} className="w-full p-3 lg:p-0  text-center" to="/">
              หน้าหลัก
            </Link>
          </li>
          <li className="flex items-center p-3 justify-center">
            <span>หมวดหมู่รถยนต์</span>
            <HiChevronDown className="" />
          </li>
          <li className="flex items-center">
            <Link onClick={close} className="w-full p-3 lg:p-0  text-center" to="/contact">
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
              className="outline-none bg-red-500 w-full h-full p-4 text-white"
              onClick={close}
            >
              Close
            </button>
          </li>
        </ul>
      </li>
    </ul>
  );
};

const Search = () => {
  const { close } = useContext(NavContext);

  return (
    <div className="relative" onClick={close}>
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
  const { close, isOpen } = useContext(NavContext);

  return (
    <div
      onClick={close}
      className={`${
        isOpen ? "fixed" : "hidden"
      } lg:hidden bg-black/40 top-0 left-0 right-0 bottom-0 z-10`}
    />
  );
};

export default Navbar;
