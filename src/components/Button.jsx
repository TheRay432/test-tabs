import React from "react";

const Button = ({ item }) => {
  return (
    <>
      <button className="tripBtn ">
        <p>{item.TagName}</p>
      </button>
    </>
  );
};

export default Button;
