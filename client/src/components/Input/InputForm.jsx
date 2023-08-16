import { TextField } from "@mui/material";
import React from "react";

const InputForm = ({ data }) => {
  return (
    <>
      {data.map((el, index) => {
        return (
          <div key={index}>
            <TextField
              id={el.text}
              label={el.text}
              variant="outlined"
              type={el.type}
              color="secondary"
              fullWidth
            />
          </div>
        );
      })}
    </>
  );
};

export default InputForm;
