import React from "react";

const InputComp = ({ data }) => {
  return (
    <>
      {data.map((el, index) => {
        return (
          <div key={index}>
            <input type={el.type} placeholder={el.text}></input>
          </div>
        );
      })}
    </>
  );
};

export default InputComp;
