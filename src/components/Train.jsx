import { useState } from "react";
import DivContainer from "./DivContainer";
const Train = ({ trainList }) => {
  /* const ref = useRef(null);
  const [moreShow, setMoreShow] = useState(false);
  useEffect(() => {
    if (ref.current.offsetWidth > 800) {
      setMoreShow(true);
    } else {
      setMoreShow(false);
    }
  }, []); */
  const [trainActive, settrainActive] = useState({ tName: "", state: false });
  return (
    <>
      {trainList.length > 0 && (
        <DivContainer
          TrainLable="鐵道規格"
          trainList={trainList}
          setActive={settrainActive}
          active={trainActive}
        />
      )}
      {/*  <div className="productDiv ty">
      <h3>鐵道規格</h3>
      <div className="productBtnContainer">
        <ul className="productBtnContainer test" ref={ref}>
          {trainList.length > 0 &&
            trainList.map((item) => <Button key={item.TagName} item={item} />)}
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
    </div>  */}
    </>
  );
};

export default Train;
