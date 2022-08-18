import { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import icon from "../details/icon.png";
import bg from "../home/bg.png";
import OldData from "../details/DB.json";
import translate from "../../src/components/translate";
import { BiBuildings } from "@react-icons/all-files/bi/BiBuildings";
import { FaBed } from "@react-icons/all-files/fa/FaBed";
import { FaRegCreditCard } from "@react-icons/all-files/fa/FaRegCreditCard";
import col from "../col/costOfLiving.json";
import Indexes from "./property.json";

const Qol = () => {
  const { name } = useParams();
  const [oldData, setOldData] = useState();
  const [colData, setColData] = useState(null);
  const [indexes, setIndexes] = useState();
  useLayoutEffect(() => {
    col?.forEach((country) => {
      if (country?.name.toLowerCase() === name.toLowerCase()) {
        setColData(country);
      }
    });
    Indexes?.forEach((country) => {
      if (country?.name.toLowerCase() === name.toLowerCase()) {
        setIndexes(country);
      }
    });
    OldData?.forEach((country) => {
      if (country?.name.toLowerCase() === name.toLowerCase()) {
        setOldData(country.Country);
      }
    });
  }, []);
  console.log(indexes);
  return (
    <div className="detailsBody" style={{ minHeight: "100vh" }}>
      <div className="logoCont">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={icon} alt="" className="logoIcon" />
          <h1 className="logo">سافر</h1>
        </div>
        <img src={bg} alt="" className="borderBack" />
      </div>
      <div className="clMainCont">
        <h2 className="clHeader">اسعار الممتلكات في {oldData}</h2>
        {/* <div className="crimeSafetyIndexes" style={{ marginLeft: "auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingInline: 5,
              gap: 10,
              justifyContent: "space-between",
              flexDirection: "row-reverse",
            }}
          >
            <h6 style={{ textAlign: "end", marginBlock: 3, fontSize: 14 }}>
              :المرور{" "}
            </h6>
            <h6
              style={{
                textAlign: "end",
                marginBlock: 3,
                fontSize: 14,
                fontWeight: "normal",
              }}
            >
              {indexes.Indexes[0]["Price to Income Ratio: "]}
            </h6>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingInline: 5,
              gap: 10,
              justifyContent: "space-between",
              flexDirection: "row-reverse",
            }}
          >
            <h6 style={{ textAlign: "end", marginBlock: 3, fontSize: 14 }}>
              :الوقت{" "}
            </h6>
            <h6
              style={{
                textAlign: "end",
                marginBlock: 3,
                fontSize: 14,
                fontWeight: "normal",
              }}
            >
              {indexes.Indexes[0]["Mortgage as Percentage of Income: "]}
            </h6>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingInline: 5,
              gap: 10,
              justifyContent: "space-between",
              flexDirection: "row-reverse",
            }}
          >
            <h6 style={{ textAlign: "end", marginBlock: 3, fontSize: 14 }}>
              :انتهاء الوقت{" "}
            </h6>
            <h6
              style={{
                textAlign: "end",
                marginBlock: 3,
                fontSize: 14,
                fontWeight: "normal",
              }}
            >
              10
            </h6>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingInline: 5,
              gap: 10,
              justifyContent: "space-between",
              flexDirection: "row-reverse",
            }}
          >
            <h6 style={{ textAlign: "end", marginBlock: 3, fontSize: 14 }}>
              :قلة الكفائة{" "}
            </h6>
            <h6
              style={{
                textAlign: "end",
                marginBlock: 3,
                fontSize: 14,
                fontWeight: "normal",
              }}
            >
              10
            </h6>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingInline: 5,
              gap: 10,
              justifyContent: "space-between",
              flexDirection: "row-reverse",
            }}
          >
            <h6 style={{ textAlign: "end", marginBlock: 3, fontSize: 14 }}>
              :انبعاثات الكربون{" "}
            </h6>
            <h6
              style={{
                textAlign: "end",
                marginBlock: 3,
                fontSize: 14,
                fontWeight: "normal",
              }}
            >
              101324
            </h6>
          </div>
        </div> */}
        <div className="col">
          <h4>
            الايجار
            <FaBed style={{ marginLeft: 5, color: "gray" }} />
          </h4>
          {colData &&
            colData["Cost of Living"]["Rent Per Month"].map((res, index) => {
              const name = Object.keys(res[0])[0];
              let odd = false;
              if (!index % 2 === 0) odd = true;
              if (index % 2 === 0) odd = false;

              return (
                <div key={name + 1} className={`colData ${odd ? "odd" : ""}`}>
                  <h6>{translate(name)}</h6>
                  <p>{res[0][name]}</p>
                </div>
              );
            })}
          <h4>
            الشقق
            <BiBuildings style={{ marginLeft: 5, color: "gray" }} />
          </h4>
          {colData &&
            colData["Cost of Living"]["Buy Apartment Price"].map(
              (res, index) => {
                const name = Object.keys(res[0])[0];
                let odd = false;
                if (!index % 2 === 0) odd = true;
                if (index % 2 === 0) odd = false;

                return (
                  <div key={name + 1} className={`colData ${odd ? "odd" : ""}`}>
                    <h6>{translate(name)}</h6>
                    <p>{res[0][name]}</p>
                  </div>
                );
              }
            )}
          <h4>
            الرواتب
            <FaRegCreditCard style={{ marginLeft: 5, color: "gray" }} />
          </h4>
          {colData &&
            colData["Cost of Living"]["Salaries And Financing"].map(
              (res, index) => {
                const name = Object.keys(res[0])[0];
                let odd = false;
                if (!index % 2 === 0) odd = true;
                if (index % 2 === 0) odd = false;

                return (
                  <div key={name + 1} className={`colData ${odd ? "odd" : ""}`}>
                    <h6>{translate(name)}</h6>
                    <p>{res[0][name]}</p>
                  </div>
                );
              }
            )}
        </div>
      </div>
    </div>
  );
};
export default Qol;
