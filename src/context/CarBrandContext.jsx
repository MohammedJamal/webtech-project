import React, { useState } from "react";

export const CarBrandContext = React.createContext();

const CarBrandProvider = ({ children }) => {
  const [carBrandState, setCarBrandState] = useState({
    isToggleSideBar: true,
    toggleSideBar: () => {
      setCarBrandState((prevCarBrandState) => ({
        ...prevCarBrandState,
        isToggleSideBar: !prevCarBrandState.isToggleSideBar,
      }));
    },
  });

  return (
    <CarBrandContext.Provider value={[carBrandState, setCarBrandState]}>
      {children}
    </CarBrandContext.Provider>
  );
};

export default CarBrandProvider;
