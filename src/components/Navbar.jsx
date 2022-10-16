import React from "react";
import { Link } from "react-router-dom";
import { HiChevronDown, HiOutlineSearch } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className=" flex justify-between px-6 py-4 bg-white shadow">
      <div className="flex items-center gap-x-6">
        <Icon />
        <Divider />
        <Navigator />
      </div>
      <div className="ml-auto">
        <Search />
      </div>
    </div>
  );
};

const Icon = () => (
  <div>
    <Link to="/" className="text-2xl font-medium text-[#0D47A1]">
      Nikar<span className="text-[#263238]">.com</span>
    </Link>
  </div>
);

const Divider = () => <div className="w-[2px] self-stretch bg-[#B0BEC5] rounded" />;

const Navigator = () => (
  <ul className="text-[#546E7A] flex items-center space-x-4">
    <li>
      <Link to="/">หน้าหลัก</Link>
    </li>
    <li className="flex items-center">
      <span>หมวดหมู่รถยนต์</span>
      <div>
        <HiChevronDown className="" />
      </div>
    </li>
    <li>
      <Link to="/contact">ติดต่อบริการ</Link>
    </li>
  </ul>
);

const Search = () => (
  <div className="relative">
    <input
      type="text"
      name="search"
      placeholder="ค้นหา"
      className="bg-[#ECEFF1] rounded-full pl-8 pr-4 py-2 outline-none w-44 text-[#546E7A]"
    />
    <HiOutlineSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 pointer-events-none text-[#546E7A]" />
  </div>
);

export default Navbar;
