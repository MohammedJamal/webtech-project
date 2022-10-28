import React from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { HiChevronLeft } from "react-icons/hi";

/* ================== Import layouts ================== */
import EntireDetail from "../layouts/cart/EntireDetail ";
import CarBadge from "../layouts/cart/CarBadge";

const Cart = () => {
  return (
    <>
      <Banner />
      <Wrapper>
        <BackToLanding />
        <PageDescribe />
        <CarBadge logoURL="/bugati-icon.png" />
        <hr className="my-4" />
        {/* Car reserve section */}
        <div className="relative">
          <div className="bg-[#FAFAFA] rounded-md">
            <img src={"/bmwi8.png"} alt={"BMWi8"} className="p-4 " />
          </div>
          <div className="bg-gradient-to-t from-[#E1E4E7] to-[#FAFAFA] min-h-[20vh]" />
          <EntireDetail />
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = ({ children }) => (
  <div className="max-w-[60em] mt-10 px-3 md:px-6 mx-auto w-full">{children}</div>
);

const BackToLanding = () => (
  <Link to="/" className="mb-12 inline-block">
    <div className="flex items-center text-dark-1">
      <HiChevronLeft className="text-xl" />
      <span>กลับไปหน้าแรก</span>
    </div>
  </Link>
);

const PageDescribe = () => {
  return (
    <>
      <h2 className="text-dark-4">
        ใบยืนยันการสั่งจองและ รายละเอียดเพื่อเข้าดูรถยนต์
      </h2>
      <p className="text-dark-1">
        โปรดยืนยันจ้อมูลการสั่งจองรถยนต์และ ตรวจสอบวันนัดหมายอย่างละเอียด
      </p>
    </>
  );
};

export default Cart;
