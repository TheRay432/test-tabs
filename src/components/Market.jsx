import React, { useState } from "react";
import DivContainer from "./DivContainer";

const Market = ({ marketList }) => {
  const [marketActive, setMarketActive] = useState({ tName: "", state: false });
  return (
    <>
      {marketList.length > 0 && (
        <DivContainer
          TrainLable="行銷活動"
          trainList={marketList}
          setActive={setMarketActive}
          active={marketActive}
        />
      )}
    </>
  );
};

export default Market;
