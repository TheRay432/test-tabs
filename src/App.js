import { useEffect, useState } from "react";
import axios from "axios";
import "./styles/all.css";
import Transport from "./components/Transport";
import Train from "./components/Train";

function App() {
  const [productList, setProductList] = useState([]);
  const [marketList, setMarketList] = useState([]);
  const [trainList, setTrainList] = useState([]);
  const [cruiseList, setCruiseList] = useState([]);
  const [transportActive, setTransportActive] = useState({
    state1: false,
    state2: false,
    state3: false,
  });

  const test = (item, code) => {
    const typeList = item.TypeList;
    typeList.forEach((item2) => {
      if (item2.TypeCode === "07") {
        const cruiseGroupList = item2.GroupList;
        cruiseGroupList.forEach((item3) => {
          setCruiseList((prevData) => [...prevData, ...item3.TagList]);
        });
      } else if (item2.TypeCode === "08") {
        const transportGroupList = item2.GroupList;
        transportGroupList.forEach((item3) => {
          setTrainList((prevData) => [...prevData, ...item3.TagList]);
        });
      } else {
        const groupList = item2.GroupList;
        groupList.forEach((item3) => {
          switch (code) {
            case "01":
              setProductList((prevData) => [...prevData, ...item3.TagList]);
              break;
            case "02":
              setMarketList((prevData) => [...prevData, ...item3.TagList]);
              break;
            default:
              break;
          }
        });
      }
    });
  };
  const getInfoData = async () => {
    const res = await axios.get("data.json");
    const data = res.data;
    data.forEach((item) => {
      test(item, item.CategoryCode);
    });
  };

  useEffect(() => {
    getInfoData();
  }, []);
  return (
    <div className="tab_container">
      <div className="tab_innerContainer">
        <Transport
          setTransportActive={setTransportActive}
          transportActive={transportActive}
        />
        {trainList.length > 0 && transportActive.state1 && (
          <Train trainList={trainList} Label="鐵道規格" />
        )}
        {cruiseList.length > 0 && transportActive.state3 && (
          <Train trainList={cruiseList} Label="郵輪規格" />
        )}
        {productList.length > 0 && (
          <Train trainList={productList} Label="產品規格" />
        )}
        {marketList.length > 0 && (
          <Train trainList={marketList} Label="行銷活動" />
        )}
      </div>
    </div>
  );
}

export default App;
