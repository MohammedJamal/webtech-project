import React, { useState } from "react";
import dayjs from "dayjs";

export const ShopContext = React.createContext();

const ShopProvider = ({ children }) => {
  const [shop, setShop] = useState({
    shop: {},
    setShop: (shop) => {
      setShop((prevShop) => {
        return {
          ...prevShop,
          shop: shop,
          isModalOpen: true,
        };
      });
    },
    isModalOpen: false,
    setIsModalOpen: (state) =>
      setShop((prevShop) => ({
        ...prevShop,
        isModalOpen: state,
      })),
    bookingDate: dayjs(new Date()).add(1, "day")["$d"],
    setBookingDate: (date) =>
      setShop((prevShop) => ({
        ...prevShop,
        bookingDate: date,
      })),
  });

  return (
    <ShopContext.Provider value={[shop, setShop]}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;
