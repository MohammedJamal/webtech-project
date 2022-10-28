import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Portal from "@mui/material/Portal";

const SnackAlert = ({ open, autoHideDuration, message = "no message" }) => {
  return (
    <Portal container={document.getElementById("portal-modal")}>
      <Snackbar
        open={open}
        autoHideDuration={autoHideDuration}
        message={message}
      />
    </Portal>
  );
};

export default SnackAlert;
