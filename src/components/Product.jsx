import React, { useState } from "react";
import DivContainer from "./DivContainer";
const Product = ({ productList }) => {
  const [productActive, setProductActive] = useState({
    tName: "",
    state: false,
  });
  return (
    <>
      {productList.length > 0 && (
        <DivContainer
          TrainLable="產品規格"
          trainList={productList}
          setActive={setProductActive}
          active={productActive}
        />
      )}
    </>
  );
};

export default Product;
