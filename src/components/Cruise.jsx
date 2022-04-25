import { useState } from "react";
import DivContainer from "./DivContainer";
const Cruise = ({ cruiseList }) => {
  /*   const ref = useRef(null);
  const [moreShow, setMoreShow] = useState(false);
  useEffect(() => {
    console.log(ref.current.offsetWidth);
    if (ref.current.offsetWidth > 800) {
      setMoreShow(true);
    } else {
      setMoreShow(false);
    }
  }, []); */
  const [cruiseActive, setCruiseActive] = useState({ tName: "", state: false });
  return (
    <>
      {cruiseList.length > 0 && (
        <DivContainer
          TrainLable="郵輪規格"
          trainList={cruiseList}
          setActive={setCruiseActive}
          active={cruiseActive}
        />
      )}
      {/*  <div className="productDiv ty">
      <h3>郵輪規格</h3>
      <div className="productBtnContainer">
        <ul className="productBtnContainer test" ref={ref}>
          {cruiseList.length > 0 &&
            cruiseList.map((item) => <Button key={item.TagName} item={item} />)}
        </ul>
      </div>

      <div className="more">
        {moreShow && (
          <>
            <p className="blue">更多</p>
            <FontAwesomeIcon icon={faAngleDown} />
          </>
        )}
      </div>
    </div> */}
    </>
  );
};

export default Cruise;
