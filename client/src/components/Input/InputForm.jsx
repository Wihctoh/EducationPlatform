import { TextField } from "@mui/material";
import React from "react";

const InputForm = ({ data, setReqValue, reqValue }) => {
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
