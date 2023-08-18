import React from "react";
import { Alert } from "@mui/material";

const ErrorAlert = ({ sendMess }) => {
  return (
    <Alert variant="outlined" severity="error">
      {sendMess}
    </Alert>
  );
};

export default ErrorAlert;
