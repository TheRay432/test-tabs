import React from "react";
import DivContainer from "./DivContainer";
const Product = ({ productList }) => {
  return (
    <>
      {productList.length > 0 && (
        <DivContainer TrainLable="產品規格" trainList={productList} />
      )}
    </>
  );
};

export default Product;
