import { useContext } from "react";
import { HiOutlineX, HiChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import SubNavigator from "./SubNavigator";
import { NavbarContext } from "../../context/NavbarContext";

const Navigator = () => {
  const { closeNav, isNavOpen } = useContext(NavbarContext);

  return (
    <div
      className={`${
        isNavOpen && "h-screen"
      } md:h-auto select-none w-screen md:w-auto absolute md:static overflow-hidden top-0 left-0`}
    >
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

const BackdropCloseNav = () => {
  const { closeNav, isNavOpen } = useContext(NavbarContext);

  return (
    <div
      onClick={closeNav}
      className={`${
        isNavOpen ? "fixed" : "hidden"
      } md:hidden bg-black/40 top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm`}
    />
  );
};

export default Navigator;
