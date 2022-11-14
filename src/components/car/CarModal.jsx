import React, { useContext } from "react";
/* ============ MUI ============ */
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
/* ============ Context ============ */
import { ShopContext } from "../../context/ShopContext";

const CarModal = () => {
  const [shop, setShop] = useContext(ShopContext);
  const { isModalOpen , setIsModalOpen } = shop;

  const handleClose = () => {
    setIsModalOpen(false);
  }

  return (
    <Modal
      open={isModalOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Paper
        elevation={2}
        className="overflow-x-hidden flex flex-col outline-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded w-11/12 max-w-[60em] h-[80vh] overflow-y-auto"
      >
        <div className="p-6">
            <p>Hello! 👋</p>
        </div>
      </Paper>
    </Modal>
  );
};

export default CarModal;
