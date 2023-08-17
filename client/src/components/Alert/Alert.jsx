import React from "react";
import { Alert, AlertTitle } from "@mui/material";

function close() {}

const Alerts = () => {
  return (
    <Alert severity="error" onClick={close}>
      <AlertTitle>Error</AlertTitle>
      This is an error alert — <strong>check it out!</strong>
    </Alert>
  );
};

export default Alerts;
