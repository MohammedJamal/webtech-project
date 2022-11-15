import React, { useState, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import Portal from "@mui/material/Portal";
import Alert from "@mui/material/Alert";
const SnackAlert = ({ open, message = "no message" }) => {
  return (
    <Portal container={document.getElementById("portal-modal")}>
      <Snackbar open={open}>
        <Alert severity="success" sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </Portal>
  );
};

export default SnackAlert;
