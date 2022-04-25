import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
const DivContainer = ({ TrainLable, trainList, setActive, active }) => {
  const ref = useRef(null);
  const [moreShow, setMoreShow] = useState(false);
  const [moreState, setmoreState] = useState({ showName: "", state: false });
  useEffect(() => {
    console.log(ref.current.offsetWidth);
    if (ref.current.offsetWidth > 800) {
      setMoreShow(true);
    } else {
      setMoreShow(false);
    }
  }, []);
  const handleShow = () => {
    if (moreState.state) {
      setmoreState({ showName: "", state: false });
    } else {
      setmoreState({ showName: "show", state: true });
    }
  };
  return (
    <div className={`productDiv ty ${moreState.showName}`}>
      <h3>{TrainLable}</h3>
      <div className="productBtnContainer">
        <ul className="productBtnContainer test" ref={ref}>
          {trainList.length > 0 &&
            trainList.map((item) => (
              <Button
                key={item.TagName}
                item={item}
                active={active}
                setActive={setActive}
              />
            ))}
        </ul>
      </div>

      <div className="more" onClick={handleShow}>
        {moreShow && (
          <>
            <p className="blue">更多</p>
            <FontAwesomeIcon icon={faAngleDown} />
          </>
        )}
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
