import { useEffect, useState } from "react";
import axios from "axios";
import "./styles/all.css";
import Transport from "./components/Transport";
import Train from "./components/Train";
import Cruise from "./components/Cruise";
import Product from "./components/Product";
import Market from "./components/Market";
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
  /* const getProductInfoData = async () => {
    const res = await axios.get("data.json");
    const productTypeList = res.data[0].TypeList;
    productTypeList.forEach((item) => {
      const productGroupList = item.GroupList;
      productGroupList.forEach((item2) => {
        setProductList((prevData) => [...prevData, ...item2.TagList]);
      });
    });
  };
  const getMarketInfoData = async () => {
    const res = await axios.get("data.json");
    const marketTypeList = res.data[1].TypeList;
    marketTypeList.forEach((item) => {
      const marketGroupList = item.GroupList;
      marketGroupList.forEach((item2) => {
        setMarketList((prevData) => [...prevData, ...item2.TagList]);
      });
    });
  };
  const getTrainInfoData = async () => {
    const res = await axios.get("data.json");
    const transportTypeList = res.data[2].TypeList;
    transportTypeList.forEach((item) => {
      if (item.TypeCode === "07") {
        const cruiseGroupList = item.GroupList;
        cruiseGroupList.forEach((item2) => {
          setCruiseList((prevData) => [...prevData, ...item2.TagList]);
        });
      } else if (item.TypeCode === "08") {
        const transportGroupList = item.GroupList;
        transportGroupList.forEach((item2) => {
          setTrainList((prevData) => [...prevData, ...item2.TagList]);
        });
      }
    });
  }; */
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
    /*  getProductInfoData();
    getMarketInfoData();
    getTrainInfoData(); */
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
          <Train trainList={trainList} />
        )}
        {cruiseList.length > 0 && transportActive.state3 && (
          <Cruise cruiseList={cruiseList} />
        )}
        {productList.length > 0 && <Product productList={productList} />}
        {marketList.length > 0 && <Market marketList={marketList} />}
      </div>
    </div>
  );
}

export default App;
