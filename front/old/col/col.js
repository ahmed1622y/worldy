import { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import icon from "../details/icon.png";
import bg from "../home/bg.png";
import OldData from "../details/DB.json";
import translate from "../../src/components/translate";
import "./col.css";
import { IoRestaurantSharp } from "@react-icons/all-files/io5/IoRestaurantSharp";
import { AiFillCar } from "@react-icons/all-files/ai/AiFillCar";
import { IoMdBicycle } from "@react-icons/all-files/io/IoMdBicycle";
import { GiClothes } from "@react-icons/all-files/gi/GiClothes";
import { HiOutlineMailOpen } from "@react-icons/all-files/hi/HiOutlineMailOpen";
import { FaShoppingCart } from "@react-icons/all-files/fa/FaShoppingCart";
import { BiBuildings } from "@react-icons/all-files/bi/BiBuildings";
import { FaBed } from "@react-icons/all-files/fa/FaBed";
import { FaRegCreditCard } from "@react-icons/all-files/fa/FaRegCreditCard";
import col from "./costOfLiving.json";

const Qol = () => {
  const { name } = useParams();
  const [oldData, setOldData] = useState();
  const [colData, setColData] = useState(null);
  useLayoutEffect(() => {
    col?.forEach((country) => {
      if (country?.name.toLowerCase() === name.toLowerCase()) {
        setColData(country);
      }
    });
    OldData?.forEach((country) => {
      if (country?.name.toLowerCase() === name.toLowerCase()) {
        setOldData(country.Country);
      }
    });
  }, []);
  console.log(colData);
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
        <h2 className="clHeader">تكلفله المعيشه في {oldData}</h2>
        <div className="col">
          <h4>
            المطاعم
            <IoRestaurantSharp style={{ marginLeft: 5, color: "gray" }} />
          </h4>

          {colData &&
            colData["Cost of Living"].Restaurants.map((res, index) => {
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
            المتاجر
            <FaShoppingCart style={{ marginLeft: 5, color: "gray" }} />
          </h4>
          {colData &&
            colData["Cost of Living"].Markets.map((res, index) => {
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
            النقل
            <AiFillCar style={{ marginLeft: 5, color: "gray" }} />
          </h4>
          {colData &&
            colData["Cost of Living"].Transportation.map((res, index) => {
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
            المرافق
            <HiOutlineMailOpen style={{ marginLeft: 5, color: "gray" }} />
          </h4>
          {colData &&
            colData["Cost of Living"]["Utilities (Monthly)"].map(
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
            الرياضة
            <IoMdBicycle style={{ marginLeft: 5, color: "gray" }} />
          </h4>
          {colData &&
            colData["Cost of Living"]["Sports And Leisure"].map(
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
            الملابس
            <GiClothes style={{ marginLeft: 5, color: "gray" }} />
          </h4>
          {colData &&
            colData["Cost of Living"]["Clothing And Shoes"].map(
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
