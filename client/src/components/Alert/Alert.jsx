import React from "react";
import { Alert } from "@mui/material";

const Alerts = () => {
  return (
    <div>
      <Alert variant="filled" severity="error">
        Login Error!
      </Alert>
    </div>
  );
};

export default Alerts;
