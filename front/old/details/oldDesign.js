import { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./details.css";
import bg from "../home/bg.png";
import data from "./DB.json";
import { images } from "./data.js";
import icon from "./icon.png";
const Details = () => {
  const { details } = useParams();
  const url = "https://myworldy.herokuapp.com/";
  const flagName = details.split("+")[1];
  const name = details.split("+")[0];
  const [specData, setSpecData] = useState(null);
  const [specImages, setSpecImages] = useState(false);
  useLayoutEffect(() => {
    data?.forEach((country) => {
      if (country?.name === name) {
        setSpecData(country);
      }
    });
    images?.forEach((image) => {
      const theOne = image[name];
      if (theOne) setSpecImages(theOne);
    });
  }, []);
  if (specData) {
    console.log(` ${url + name + "/" + "food" + "/" + "1.jpg"}`);
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
                <h2 className="overViewItemHead">جوده المعيشه </h2>
                <div className="dataCont">
                  <h1>{specData["Daily cost of living in dollars"]}</h1>
                  <h1>: تكلفة الاقامة اليومية</h1>
                </div>
                <div className="dataCont">
                  <h1>{specData["The price of a liter of gasoline"]}</h1>
                  <h1>: تكلفة لتر البنزين</h1>
                </div>
                <div className="dataCont">
                  <h1>{specData["car rental cost"]}</h1>
                  <h1>: تكلفة تاجير سيارة</h1>
                </div>
                <div className="dataCont">
                  <h1>{specData["Dinner cost for two"]}</h1>
                  <h1>: عشاء شخصين</h1>
                </div>
                <h2 className="overViewItemHead">جوده الحياة </h2>
                <div className="dataCont">
                  <h1>{specData["crime rate per 100,000 people"]}</h1>
                  <h1>: معدل الجريمة</h1>
                </div>
                <div className="dataCont">
                  <h1>{specData["safety rate"]}</h1>
                  <h1>: معدل الامان</h1>
                </div>
                <div className="dataCont">
                  <h1>{specData["Road deaths per 100,000 people annually"]}</h1>
                  <h1>: معدل حوادث الطرق</h1>
                </div>
                <div className="dataCont">
                  <h1>{specData["Deaths - Drug use"]}</h1>
                  <h1>: انتشار المخدرات</h1>
                </div>
                <div className="dataCont">
                  <h1>{specData["poverty rate %"]}</h1>
                  <h1>: معدل الفقر</h1>
                </div>
                <div className="dataCont">
                  <h1>{specData["The epidemic spread"]}</h1>
                  <h1>: انتشار الاوبئة</h1>
                </div>
                <div className="dataCont">
                  <h1>
                    {specData["Ranking in terms of global health services"]}
                  </h1>
                  <h1>: ترتيب الصحة</h1>
                </div>
                <div className="dataCont">
                  <h1>{specData["environmental pollution rate"]}</h1>
                  <h1>: التلوث البيئي</h1>
                </div>
                <div className="dataCont">
                  <h1>{specData["internet speed level-MB"]}</h1>
                  <h1>: سرعه الانترنت</h1>
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
                      console.log(image);
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
                <div className="overViewItemHead">التقييم العام </div>
                <div className="dataCont">
                  <h1>100%</h1>
                  <h1>جوده الاقتصاد</h1>
                </div>
                <div className="dataCont">
                  <h1>100%</h1>
                  <h1>جوده المناخ </h1>
                </div>
                <div className="dataCont">
                  <h1>100%</h1>
                  <h1>جوده الحياة</h1>
                </div>
                <div className="dataCont">
                  <h1>100%</h1>
                  <h1>جوده المعيشة</h1>
                </div>
                <div className="dataCont">
                  <h1>100%</h1>
                  <h1>جوده التعليم</h1>
                </div>
                <div className="dataCont">
                  <h1>100%</h1>
                  <h1>جوده السياحة</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else return <></>;
};
export default Details;
