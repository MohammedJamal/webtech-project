import { useNavigate } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Badge from "@mui/material/Badge";
import IconButton from '@mui/material/IconButton';

const BasketIcon = () => {
  const navigate = useNavigate();
  return (
    <>
      <IconButton onClick={() => navigate("/cart")} size="medium">
        <Badge variant="dot" overlap="circular" color="primary">
          <HiOutlineShoppingBag className="text-lg lg:text-2xl text-[#546E7A]" />
        </Badge>
      </IconButton>
    </>
  );
};

export default BasketIcon;
