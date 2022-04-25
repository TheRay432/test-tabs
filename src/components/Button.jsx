import React from "react";

const Button = ({ item, setActive, active }) => {
  const handleBtnClick = (pName) => {
    if (active.tName === pName) {
      setActive({ tName: "", state: false });
    } else {
      setActive({ tName: pName, state: true });
    }
  };
  return (
    <>
      <button
        className={
          active?.tName === item.TagName ? "tripBtn active" : "tripBtn"
        }
        onClick={() => handleBtnClick(item.TagName)}
      >
        <p>{item.TagName}</p>
      </button>
    </>
  );
};

export default Button;
