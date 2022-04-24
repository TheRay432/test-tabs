import React, { useEffect, useRef, useState } from "react";

const DivContainer = ({ TrainLable, trainList }) => {
  const ref = useRef(null);
  const [moreShow, setMoreShow] = useState(false);
  useEffect(() => {
    console.log(ref.current.offsetWidth);
    if (ref.current.offsetWidth > 700) {
      setMoreShow(true);
    } else {
      setMoreShow(false);
    }
  }, []);
  return (
    <div className="productDiv ty">
      <h3>{TrainLable}</h3>
      <div className="productBtnContainer">
        <ul className="productBtnContainer test" ref={ref}>
          {trainList.length > 0 &&
            trainList.map((item) => (
              <button className="tripBtn " key={item.TagName}>
                <p className="tt">{item.TagName}</p>
              </button>
            ))}
        </ul>
      </div>

      <div className="more">
        {moreShow && <p className="blue">更多</p>}
        {/*  {showMoreProductsState.state && (
        <>
          <p className="blue">收起</p>
          <FontAwesomeIcon icon={faAngleUp} />
        </>
      )} */}
      </div>
    </div>
  );
};

export default DivContainer;
