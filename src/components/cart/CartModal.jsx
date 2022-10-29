import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import StepOne from "./modalsteps/StepOne";
import StepTwo from "./modalsteps/StepTwo";
import StepThree from "./modalsteps/StepThree";
import ModalPage from "./ModalPage";

const pages = [<StepOne />, <StepTwo />, <StepThree />];

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
        className="flex flex-col outline-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded w-11/12 max-w-[60em] h-[80vh] overflow-y-auto"
      >
        <ModalPage>{pages[paymentStep - 1]}</ModalPage>
      </Paper>
    </Modal>
  );
};

export default React.memo(CartModal);
