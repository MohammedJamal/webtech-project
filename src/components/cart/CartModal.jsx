import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import StepOne from "./StepOne";

const CartModal = () => {
  const [cartState, setCartState] = useContext(CartContext);
  const { paymentStep, isModalOpen, setIsModalOpen } = cartState; // destructuring cartState

  const handleClose = () => setIsModalOpen(false);

  return (
    <Modal
      open={isModalOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Paper
        elevation={2}
        className="outline-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded w-11/12 max-w-[60em] h-[80vh] overflow-y-auto p-4"
      >
        {paymentStep === 1 && <StepOne />}
      </Paper>
    </Modal>
  );
};

export default React.memo(CartModal);
