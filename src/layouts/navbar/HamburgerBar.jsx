import { useContext } from "react";
import { HiMenu } from "react-icons/hi";
import { NavbarContext } from "../../context/NavbarContext"; // Custom context
import IconButton from "@mui/material/IconButton";

const HamburgerBar = () => {
  const { openNav } = useContext(NavbarContext);
  return (
    <div onClick={openNav} className="md:hidden">
      <IconButton size="medium">
        <HiMenu />
      </IconButton>
    </div>
  );
};

export default HamburgerBar;
