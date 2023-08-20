import React from "react";
import { Alert } from "@mui/material";

const SuccessAlert = ({ sendMess }) => {
  return (
    <Alert variant="outlined" severity="success">
      {sendMess}
    </Alert>
  );
};

export default SuccessAlert;
