import React from "react";
import Button from "@mui/material/Button";
import style from "../Header/Header.module.css";

const Btn = ({ data }) => {
  return (
    <>
      {data.map((el) => (
        <Button variant="contained" className={style.singInBtn}>
          {el}
        </Button>
      ))}
    </>
  );
};

export default Btn;
