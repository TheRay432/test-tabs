import React from "react";
import DivContainer from "./DivContainer";

const Train = ({ trainList }) => {
  return (
    <>
      {trainList.length > 0 && (
        <DivContainer TrainLable="鐵道規格" trainList={trainList} />
      )}
    </>
  );
};

export default Train;
