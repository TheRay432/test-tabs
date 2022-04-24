import React from "react";
import TrainIcon from "../icons/icon3.svg";
import CruiseIcon from "../icons/icon2.svg";
import BusIcon from "../icons/icon1.svg";
const Transport = () => {
  return (
    <div className="transportDiv">
      <h3>遊玩交通</h3>
      <div className="tripBtnContainer">
        <button className="tripBtn ">
          <img className="activeIcon" src={TrainIcon} alt="" />
          <p className="tt">鐵道旅遊</p>
        </button>
        <button className="tripBtn ">
          <img className="activeIcon" src={BusIcon} alt="" />
          <p>巴士旅遊</p>
        </button>
        <button className="tripBtn ">
          <img className="activeIcon" src={CruiseIcon} alt="" />
          <p>郵輪旅遊</p>
        </button>
      </div>
    </div>
  );
};

export default Transport;
