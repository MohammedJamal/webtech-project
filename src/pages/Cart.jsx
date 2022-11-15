import React from "react";
import {Link} from "react-router-dom";
import Banner from "../components/Banner";
import CartModal from "../components/cart/CartModal";
/* ================== Import layouts ================== */
import CarBadge from "../layouts/cart/CarBadge";
import Wrapper from "../layouts/cart/Wrapper";
import BackToLanding from "../layouts/cart/BackToLanding";
import PageDescribe from "../layouts/cart/PageDescribe";
import EntireDetail from "../layouts/cart/EntireDetail ";
/* ================== utils ================== */
import { getFromLocalStorage } from "../utils/localstorage";

const Cart = () => {
  if (!Boolean(getFromLocalStorage("booking"))) {
    return (
      <>
        <Banner />
        <Wrapper>
          <h2 className="text-bluegrey-dark-2">ไม่มีรายการคิวที่ได้จองเอาไว้ 😶‍🌫️</h2>
          <p className="text-bluegrey-light-1">โปรดสั่งจองคิวเพื่อเข้าดูรถยนต์ จากนั้นจึงมายืนยันที่นี่อีกครั้ง</p>
        </Wrapper>
      </>
    );
  }

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
      <CartModal /> {/* Modal */}
    </>
  );
};

export default Cart;
