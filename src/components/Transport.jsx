import React from "react";
import TrainIcon from "../icons/icon3.svg";
import CruiseIcon from "../icons/icon2.svg";
import BusIcon from "../icons/icon1.svg";
const Transport = ({ transportActive, setTransportActive }) => {
  const handleBtnClick = (state) => {
    switch (state) {
      case "state1":
        setTransportActive({
          ...transportActive,
          state1: !transportActive.state1,
        });
        break;
      case "state2":
        setTransportActive({
          ...transportActive,
          state2: !transportActive.state2,
        });
        break;
      case "state3":
        setTransportActive({
          ...transportActive,
          state3: !transportActive.state3,
        });
        break;
      default:
        break;
    }
  };
  return (
    <div className="transportDiv">
      <h3>遊玩交通</h3>
      <div className="tripBtnContainer">
        <button
          className={transportActive.state1 ? "tripBtn active" : "tripBtn"}
          onClick={() => handleBtnClick("state1")}
        >
          <img className="activeIcon" src={TrainIcon} alt="" />
          <p className="tt">鐵道旅遊</p>
        </button>
        <button
          className={transportActive.state2 ? "tripBtn active" : "tripBtn"}
          onClick={() => handleBtnClick("state2")}
        >
          <img className="activeIcon" src={BusIcon} alt="" />
          <p>巴士旅遊</p>
        </button>
        <button
          className={transportActive.state3 ? "tripBtn active" : "tripBtn"}
          onClick={() => handleBtnClick("state3")}
        >
          <img className="activeIcon" src={CruiseIcon} alt="" />
          <p>郵輪旅遊</p>
        </button>
      </div>
    </div>
  );
};

export default Transport;
