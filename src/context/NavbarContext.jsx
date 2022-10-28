import React from "react";
import { useNavBar, useSubNavBar } from "../hooks/index";

export const NavbarContext = React.createContext();

const NavbarProvider = ({ children }) => {
  const { 
    openNav, 
    closeNav, 
    toggleNav, 
    isNavOpen 
  } = useNavBar(false);
  const { 
    openSubNav, 
    closeSubNav, 
    toggleSubNav, 
    isSubNavOpen 
  } = useSubNavBar(false);

  return (
    <NavbarContext.Provider
      value={{
        openNav,
        closeNav,
        toggleNav,
        isNavOpen,
        openSubNav,
        closeSubNav,
        toggleSubNav,
        isSubNavOpen,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarProvider;
