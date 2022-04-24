import { useEffect, useState } from "react";
import axios from "axios";
import "./styles/all.css";
import Transport from "./components/Transport";
import Train from "./components/Train";
import Cruise from "./components/Cruise";
import Product from "./components/Product";
function App() {
  const [productList, setProductList] = useState([]);
  const [marketList, setMarketList] = useState([]);
  const [trainList, setTrainList] = useState([]);
  const [cruiseList, setCruiseList] = useState([]);
  const getProductInfoData = async () => {
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
  };
  useEffect(() => {
    getProductInfoData();
    getMarketInfoData();
    getTrainInfoData();
  }, []);
  return (
    <div className="tab_container">
      <div className="tab_innerContainer">
        <Transport />
        {trainList.length > 0 && <Train trainList={trainList} />}
        {cruiseList.length > 0 && <Cruise cruiseList={cruiseList} />}
        {productList.length > 0 && <Product productList={productList} />}
      </div>
    </div>
  );
}

export default App;
