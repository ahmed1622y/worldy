import ReactSpeedometer from "react-d3-speedometer";
import { useParams } from "react-router-dom";
import { useLayoutEffect, useState } from "react";
import icon from "../details/icon.png";
import bg from "../home/bg.png";
import OldData from "../details/DB.json";
import translate from "../../src/components/translate";
import "./crimeAndSafety.css";
import ProgressBar from "@ramonak/react-progress-bar";
import data from "./crimeSafety.json";
const CrimeSafety = () => {
  const [specData, setSpecData] = useState(null);
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
  }, []);
  if (specData) {
    return (
      <div className="detailsBody">
        <div className="logoCont">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={icon} alt="" className="logoIcon" />
            <h1 className="logo">سافر</h1>
          </div>
          <img src={bg} alt="" className="borderBack" />
        </div>

        <div className="crimeAndSafety">
          {" "}
          <div className="crimeSafetyCont">
            <div className="crimeSafetyIndexes">
              <h6>معدل الجريمه : {specData.crimeIndex}</h6>
              <h6>معدل الامان: {specData.safetyIndex}</h6>
            </div>
            <div className="crimeMeeter">
              <ReactSpeedometer
                value={Number(specData.crimeIndex)}
                width={180}
                height={180}
                // currentValueText={"crime"}
                textColor="black"
                segments={5}
                maxValue={100}
                segmentColors={[
                  "red",
                  "yellow",
                  "yellow",
                  "#5dff52",
                  "#5dff52",
                ]}
                customSegmentStops={[0, 20, 40, 60, 80, 100]}
                minValue={0}
              />
            </div>
            <h3>معدل الجريمه في {oldData.Country} </h3>
            <div className="mainInputCont">
              {specData.crime.map((data) => {
                const name = Object.keys(data)[0];
                let bad = true;
                let color = "black";
                if (bad && data[name][1] === "High") {
                  color = "#9B1E1B";
                } else if (bad && data[name][1] === "Moderate") {
                  color = "#918F18";
                } else if (bad && data[name][1] === "Low") {
                  color = "#1E8E18";
                }
                return (
                  <div key={name} className="engDataCont">
                    <p>{translate(name)}</p>
                    <div className="innerEegDataCont">
                      <ProgressBar
                        completed={data[name][0]}
                        bgColor="#86B6DA"
                        borderRadius={"3px"}
                        customLabel={" "}
                        width={window.innerWidth > 600 ? "100px" : "60px"}
                      />
                      <p>{data[name][0]}</p>
                      <p className="hidePer" style={{ color }}>
                        {translate(data[name][1])}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="crimeMeeter" style={{ marginTop: 50 }}>
              <ReactSpeedometer
                value={Number(specData.safetyIndex)}
                width={180}
                height={180}
                // currentValueText={"crime"}
                textColor="black"
                segments={5}
                maxValue={100}
                segmentColors={[
                  "red",
                  "yellow",
                  "yellow",
                  "#5dff52",
                  "#5dff52",
                ]}
                customSegmentStops={[0, 20, 40, 60, 80, 100]}
                minValue={0}
              />
            </div>
            <h3>الأمان في {oldData.Country} </h3>

            <div className="mainInputCont">
              {specData.safety.map((data) => {
                const name = Object.keys(data)[0];
                let bad = false;
                let color = "black";
                if (!bad && data[name][1] === "High") {
                  color = "#1E8E18";
                } else if (!bad && data[name][1] === "Moderate") {
                  color = "#918F18";
                } else if (!bad && data[name][1] === "Low") {
                  color = "#9B1E1B";
                }
                return (
                  <div key={name} className="engDataCont">
                    <p>{translate(name)}</p>
                    <div className="innerEegDataCont">
                      <ProgressBar
                        completed={data[name][0]}
                        bgColor="#86B6DA"
                        borderRadius={"3px"}
                        customLabel={" "}
                        width={window.innerWidth > 600 ? "100px" : "60px"}
                      />
                      <p>{data[name][0]}</p>
                      <p className="hidePer" style={{ color }}>
                        {translate(data[name][1])}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default CrimeSafety;
