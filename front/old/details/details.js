import { useLayoutEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./details.css";
import passport from "./passport.json";
import bg from "../home/bg.png";
import data from "./DB.json";
import translate from "../../src/components/translate";
import { images } from "./data.js.js";
import icon from "./icon.png";
import foodSafety from "./foodSafety.json";
import Qol from "./qualityOfLive.json";
const Details = () => {
  const { details } = useParams();
  const url = "http://199.192.28.126:5000/";
  const flagName = details.split("+")[1];
  const name = details.split("+")[0];
  const navigate = useNavigate();
  const [specData, setSpecData] = useState(null);
  const [qol, setQol] = useState(null);
  const [specImages, setSpecImages] = useState(false);
  useLayoutEffect(() => {
    data?.forEach((country) => {
      if (country?.name === name) {
        setSpecData(country);
      }
    });
    Qol?.forEach((country) => {
      if (country?.name === name) {
        setQol(country);
      }
    });
    images?.forEach((image) => {
      const theOne = image[name];
      if (theOne) setSpecImages(theOne);
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
        <div className="mainCont">
          <div className="detailsContainers">
            <div className="detailsStructure">
              <div className="overViewCont">
                <h2 className="overViewHead">{specData.Country}</h2>
                <img
                  src={`https://flagcdn.com/256x192/${flagName}.png`}
                  alt=""
                  className="imgOverView"
                />
                <h4 className="flagName">علم {specData.Country}</h4>
                <h2 className="overViewItemHead">الاقتصاد</h2>
                <div className="dataCont">
                  <h1>{specData["Population"]}</h1>
                  <h1>: عدد السكان</h1>
                </div>
                <div className="dataCont">
                  <h1>{specData["Currency"]}</h1>
                  <h1>العملة</h1>
                </div>
                <div className="dataCont">
                  <h1>{specData["call icon +"]}</h1>
                  <h1>: رمز الاتصال</h1>
                </div>
                <div className="dataCont">
                  <h1>{specData["Capital"]}</h1>
                  <h1>: العاصمة</h1>
                </div>
                <div className="dataCont">
                  <h1>{specData["World Economic Ranking"]}</h1>
                  <h1>: ترتيب الاقتصاد</h1>
                </div>
                <div className="dataCont">
                  <h1>{foodSafety[name]}</h1>
                  <h1>: الأمن الغذائي</h1>
                </div>
                <div className="dataCont">
                  <h1>{specData["Languages"]}</h1>
                  <h1>: اللغة</h1>
                </div>
                <div className="dataCont">
                  <h1>{specData["emergency number"]}</h1>
                  <h1>: رمز الطوارئ</h1>
                </div>
                <div className="dataCont">
                  <h1>{specData["economy adoption"]}</h1>
                  <h1>: اعتماد الاقتصاد</h1>
                </div>
                <h2 className="overViewItemHead">المناخ والطبيعة</h2>
                <div className="dataCont">
                  <h1>{specData["The rate of natural disasters"]}</h1>
                  <h1>: الكوارث الطبيعية</h1>
                </div>
                <div className="dataCont">
                  <h1>{specData["precipitation rate"]}</h1>
                  <h1>: معدل الامطار</h1>
                </div>
                <div className="dataCont">
                  <h1>{specData["Climate and natural quality"]}</h1>
                  <h1>: المناخ</h1>
                </div>
                <div className="overViewItemHead">جودة التعليم</div>
                <div className="dataCont">
                  <h1>{specData["world education ranking"]}</h1>
                  <h1>: ترتيب التعليم</h1>
                </div>
                <div className="dataCont">
                  <h1>
                    {specData["The most important and famous universities"]}
                  </h1>
                  <h1>: اشهر الجامعات</h1>
                </div>
                <div className="dataCont">
                  <h1>{specData["quality of education"]}</h1>
                  <h1>: جودة التعليم</h1>
                </div>
                <div className="overViewItemHead">السياحة </div>
                <div className="dataCont">
                  <h1>{specData["The best areas for tourism"]}</h1>
                  <h1>: الاماكن السياحية</h1>
                </div>

                {specImages?.tourism ? (
                  <div className="detImgCont">
                    {specImages?.tourism?.map((image) => {
                      console.log(
                        `${
                          url + name + "/" + "TourismAndLandmarks" + "/" + image
                        }`
                      );
                      return (
                        <img
                          key={image}
                          src={`${
                            url +
                            name +
                            "/" +
                            "TourismAndLandmarks" +
                            "/" +
                            image
                          }`}
                          alt=""
                          className="detImg"
                        />
                      );
                    })}
                  </div>
                ) : (
                  <div className="detImgCont">
                    {specImages?.map((image) => {
                      return (
                        <img
                          key={image}
                          src={`${url + name + "/" + "/" + image}`}
                          alt=""
                          className="detImg"
                        />
                      );
                    })}
                  </div>
                )}
                <div className="dataCont">
                  <h1>
                    {
                      specData[
                        "The best months of the year to visit the country"
                      ]
                    }
                  </h1>
                  <h1>: افضل شهور للزياره</h1>
                </div>
                <div className="dataCont">
                  <h1>
                    {"ريال " +
                      specData[
                        "The cost of travel From Jeddah in Saudi riyals"
                      ]}
                  </h1>
                  <h1>: تذكرة الطيران</h1>
                </div>
                <div className="dataCont">
                  <h1>{specData["Saudi Arabia Passport"]}</h1>
                  <h1>: التأشيرة</h1>
                </div>
                <div className="dataCont">
                  <h1>
                    {
                      specData[
                        "The customs, culture and holidays of the country"
                      ]
                    }
                  </h1>
                  <h1>: العادات والتقاليد</h1>
                </div>
                <div className="dataCont">
                  <h1>{specData["religions"]}</h1>
                  <h1>: الاديان</h1>
                </div>
                <div className="dataCont">
                  <h1>{specData["The famous popular food in the country"]}</h1>
                  <h1>: أشهر الاطعمة</h1>
                </div>
                <div className="dataCont">
                  <h1>{passport[name.toLowerCase()]?.ranking}</h1>
                  <h1>: ترتيب جواز السفر</h1>
                </div>
                <div className="dataCont">
                  <h1>{"بلد " + passport[name.toLowerCase()]?.score}</h1>
                  <h1>:وجهات السفر</h1>
                </div>
                {specImages?.food ? (
                  <div className="detImgCont">
                    {specImages?.food?.map((image) => {
                      return (
                        <img
                          key={image}
                          src={`${url + name + "/" + "food" + "/" + image}`}
                          alt=""
                          className="detImg"
                        />
                      );
                    })}
                  </div>
                ) : (
                  <></>
                )}

                {qol && qol["Quality of Living"] && (
                  <>
                    <h2 className="overViewItemHead">جوده الحياة</h2>

                    <div className="dataContIndexes">
                      <p>
                        {translate(
                          qol["Quality of Living"][0][
                            "Purchasing Power Index"
                          ][1]
                        )}
                      </p>
                      <h1>
                        {
                          qol["Quality of Living"][0][
                            "Purchasing Power Index"
                          ][0]
                        }
                      </h1>
                      <h1
                        onClick={() => {
                          navigate("/cost-of-living/" + name);
                        }}
                      >
                        : القوة الشرائية
                      </h1>
                    </div>
                    <div className="dataContIndexes">
                      <p>
                        {translate(
                          qol["Quality of Living"][1]["Safety Index"][1]
                        )}
                      </p>
                      <h1>{qol["Quality of Living"][1]["Safety Index"][0]}</h1>
                      <h1 onClick={() => navigate("/crime-safety/" + name)}>
                        : معدل الامان
                      </h1>
                    </div>
                    <div className="dataContIndexes">
                      <p>
                        {translate(
                          qol["Quality of Living"][2]["Health Care Index"][1]
                        )}
                      </p>
                      <h1>
                        {qol["Quality of Living"][2]["Health Care Index"][0]}
                      </h1>
                      <h1
                        onClick={() => {
                          navigate("/health/" + name);
                        }}
                      >
                        : معدل الصحة
                      </h1>
                    </div>
                    <div className="dataContIndexes">
                      <p>
                        {translate(
                          qol["Quality of Living"][3]["Climate Index"][1]
                        )}
                      </p>
                      <h1>{qol["Quality of Living"][3]["Climate Index"][0]}</h1>
                      <h1
                        onClick={() => {
                          navigate("/climate/" + name);
                        }}
                      >
                        : المناخ
                      </h1>
                    </div>
                    <div className="dataContIndexes">
                      <p>
                        {translate(
                          qol["Quality of Living"][4]["Cost of Living Index"][1]
                        )}
                      </p>
                      <h1>
                        {qol["Quality of Living"][4]["Cost of Living Index"][0]}
                      </h1>
                      <h1
                        onClick={() => {
                          navigate("/cost-of-living/" + name);
                        }}
                      >
                        : تكلفة الحياة
                      </h1>
                    </div>
                    <div className="dataContIndexes">
                      <p>
                        {translate(
                          qol["Quality of Living"][5][
                            "Property Price to Income Ratio"
                          ][1]
                        )}
                      </p>
                      <h1>
                        {
                          qol["Quality of Living"][5][
                            "Property Price to Income Ratio"
                          ][0]
                        }
                      </h1>
                      <h1
                        onClick={() => {
                          navigate("/Property/" + name);
                        }}
                      >
                        : سعر الممتلكات
                      </h1>
                    </div>
                    <div className="dataContIndexes">
                      <p>
                        {translate(
                          qol["Quality of Living"][6][
                            "Traffic Commute Time Index"
                          ][1]
                        )}
                      </p>
                      <h1>
                        {
                          qol["Quality of Living"][6][
                            "Traffic Commute Time Index"
                          ][0]
                        }
                      </h1>
                      <h1 onClick={() => navigate("/traffic/" + name)}>
                        : معدل الزحام
                      </h1>
                    </div>
                    <div className="dataContIndexes">
                      <p>
                        {translate(
                          qol["Quality of Living"][7]["Pollution Index"][1]
                        )}
                      </p>
                      <h1>
                        {qol["Quality of Living"][7]["Pollution Index"][0]}
                      </h1>
                      <h1
                        onClick={() => {
                          navigate("/pollution/" + name);
                        }}
                      >
                        : معدل التلوث
                      </h1>
                    </div>
                    <div className="dataContIndexes last">
                      <p>
                        {translate(
                          qol["Quality of Living"][8][
                            "Quality of Life Index: "
                          ][1]
                        )}
                      </p>
                      <h1>
                        {
                          qol["Quality of Living"][8][
                            "Quality of Life Index: "
                          ][0]
                        }
                      </h1>
                      <h1>جوده الحياة</h1>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else return <></>;
};
export default Details;
