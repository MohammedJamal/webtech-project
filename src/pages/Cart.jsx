import React, { useContext } from "react";
import Banner from "../components/Banner";
import CartModal from "../components/cart/CartModal";
/* ================== Import context ================== */
import { CartContext } from "../context/CartContext";
/* ================== Import layouts ================== */
import EntireDetail from "../layouts/cart/EntireDetail ";
import CarBadge from "../layouts/cart/CarBadge";
import Wrapper from "../layouts/cart/Wrapper";
import BackToLanding from "../layouts/cart/BackToLanding";
import PageDescribe from "../layouts/cart/PageDescribe";

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
      <CartModal /> {/* Modal */}
    </>
  );
};

export default Cart;
