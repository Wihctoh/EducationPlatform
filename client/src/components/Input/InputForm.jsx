import { TextField } from "@mui/material";
import React from "react";

const InputForm = ({ data, setReqValue, reqValue }) => {
  return (
    <>
      {data.map((el, index) => {
        return (
          <div key={index}>
            <TextField
              variant="outlined"
              color="secondary"
              fullWidth
              id={el.text}
              label={el.text}
              type={el.type}
              onChange={(e) => {
                setReqValue({ ...reqValue, [e.target.id]: e.target.value });
              }}
            />
          </div>
        );
      })}
    </>
  );
};

export default InputForm;
