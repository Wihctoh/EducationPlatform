import React from "react";
import style from "./style.module.css";

const Icons = ({ data }) => {
  return (
    <>
      {data.map((el, index) => (
        <div key={index} className={style[el]}></div>
      ))}
    </>
  );
};

export default Icons;
