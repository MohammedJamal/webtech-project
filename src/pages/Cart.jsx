import React from "react";
import Banner from "../components/Banner";
import CartModal from "../components/cart/CartModal";
/* ================== Import layouts ================== */
import CarBadge from "../layouts/cart/CarBadge";
import Wrapper from "../layouts/cart/Wrapper";
import BackToLanding from "../layouts/cart/BackToLanding";
import PageDescribe from "../layouts/cart/PageDescribe";
import EntireDetail from "../layouts/cart/EntireDetail ";
/* ================== utils ================== */
import { getFromLocalStorage  } from "../utils/localstorage";
import { getCarBrandLogo , getCarImage,getModelFromCarName} from "../utils/carMethods";

const Cart = () => {
  const booking = getFromLocalStorage("booking") || {};
  const { shop, carDetail, bookingDate } = booking;

  if (Object.keys(booking).length === 0) {
    return (
      <>
        <Banner />
        <Wrapper>
          <h2 className="text-bluegrey-dark-2 text-center">
            ไม่มีรายการคิวที่ได้จองเอาไว้ 
          </h2>
          <p className="text-bluegrey-light-1 text-center">
            ไม่ต้องห่วง! สั่งจองคิวเพื่อเข้าดูรถยนต์ที่ต้องการสิ
          </p>
          <img src="empty-cart.png" alt="empty-cart" className="mx-auto mt-10 my-24 translate-x-2"/>
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
        <CarBadge
          carName={carDetail.name}
          shopName={shop.name}
          shopStars={shop.stars}
          logoURL={"carbrand-icon/" + getCarBrandLogo(carDetail.carbrand)}
        />
        <hr className="my-4"/>
        {/* Car reserve section */}
        <div className="relative">
          <div className="bg-[#FAFAFA] rounded-md">
            <img src={getCarImage(carDetail.carbrand, getModelFromCarName(carDetail.carbrand,carDetail.name), carDetail.name, 0)} alt={carDetail.name} className="p-4 " />
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
