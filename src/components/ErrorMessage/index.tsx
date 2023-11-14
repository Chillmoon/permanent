import React from "react";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

const ErrorSnackbar: React.FC<{
  open: boolean;
  onClose: () => void;
  message: string;
}> = ({ open, onClose, message }) => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
      <MuiAlert
        elevation={6}
        variant="filled"
        onClose={onClose}
        severity="error"
      >
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

export default ErrorSnackbar;
