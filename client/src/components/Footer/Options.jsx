import React from "react";

const Options = ({ data }) => {
  return (
    <>
      {data.map((el, index) => (
        <p key={index}>{el}</p>
      ))}
    </>
  );
};

export default Options;
