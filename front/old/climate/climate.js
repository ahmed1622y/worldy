import ReactSpeedometer from "react-d3-speedometer";
import { useParams } from "react-router-dom";
import { useLayoutEffect, useState } from "react";
import icon from "../details/icon.png";
import bg from "../home/bg.png";
import OldData from "../details/DB.json";
import translate from "../../src/components/translate";
import "./climate.css";
import Index from "../details/qualityOfLive.json";
import ProgressBar from "@ramonak/react-progress-bar";
import data from "./climate.json";
const CrimeSafety = () => {
  const [specData, setSpecData] = useState(null);
  const [index, setIndex] = useState(false);
  const { name } = useParams();
  const [oldData, setOldData] = useState();
  useLayoutEffect(() => {
    OldData?.forEach((country) => {
      if (country?.name.toLocaleLowerCase() === name.toLocaleLowerCase()) {
        setOldData(country);
      }
    });
    data?.forEach((country) => {
      if (country?.name.toLocaleLowerCase() === name.toLocaleLowerCase()) {
        setSpecData(country);
      }
    });
    Index?.forEach((country) => {
      if (country?.name.toLocaleLowerCase() === name.toLocaleLowerCase()) {
        setIndex(country);
      }
    });
  }, []);
  if (specData) {
    return (
      <div className="detailsBody" style={{ minHeight: "100vh" }}>
        <div className="logoCont">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={icon} alt="" className="logoIcon" />
            <h1 className="logo">سافر</h1>
          </div>
          <img src={bg} alt="" className="borderBack" />
        </div>
        <h2>الطقس في {oldData.Country}</h2>
        <div className="crimeSafetyIndexes">
          <h6>الطقس: {index["Quality of Living"][3]["Climate Index"][0]}</h6>
        </div>
        <div className="climateHeader">
          <div className="right">
            <h3>المدينة</h3>
            {specData.Climate.map((city) => {
              return <h3>{Object.keys(city)[0]}</h3>;
            })}
          </div>
          <div className="right">
            <h3>تقييم الطقس</h3>
            {specData.Climate.map((city) => {
              return <h3>{Object.values(city)[0]}</h3>;
            })}
          </div>
        </div>
      </div>
    );
  }
};
export default CrimeSafety;
