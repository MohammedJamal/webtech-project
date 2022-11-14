import React, { useState } from "react";

export const ShopContext = React.createContext();

const ShopProvider = ({ children }) => {
  const [shop, setShop] = useState({
    shop: {},
    setShop: (shop) => setShop(shop),
    isModalOpen: false,
    setIsModalOpen: (state) => setShop({ ...shop, isModalOpen: state }),
  });

  console.log(shop)

  return (
    <ShopContext.Provider value={[shop, setShop]}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;
