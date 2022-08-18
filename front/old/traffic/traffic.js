import icon from "../details/icon.png";
import { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import bg from "../home/bg.png";
import "./traffic.css";
import data from "./traffic.json";
import translate from "../../src/components/translate";
const Traffic = () => {
  const { name } = useParams();
  const [specData, setSpecData] = useState(null);
  useLayoutEffect(() => {
    data?.forEach((country) => {
      if (country?.name.toLocaleLowerCase() === name.toLocaleLowerCase()) {
        setSpecData(country);
      }
    });
  }, []);
  return (
    <div className="detailsBody" style={{ minHeight: "100vh" }}>
      <div className="logoCont">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={icon} alt="" className="logoIcon" />
          <h1 className="logo">سافر</h1>
        </div>
        <img src={bg} alt="" className="borderBack" />
      </div>
      {specData && (
        <>
          <div className="crimeSafetyIndexes">
            <h6 style={{ textAlign: "end" }}>
              المرور: {specData.indexes[0]["Traffic Index: "]}
            </h6>
            <h6 style={{ textAlign: "end" }}>
              الوقت: {specData.indexes[1]["Time Index (in minutes): "]}
            </h6>
            <h6 style={{ textAlign: "end" }}>
              انتهاء الوقت: {specData.indexes[2]["Time Exp. Index: "]}
            </h6>
            <h6 style={{ textAlign: "end" }}>
              عدم الكفاءة: {specData.indexes[3]["Inefficiency Index: "]}
            </h6>
            <h6 style={{ margin: 0, textAlign: "end" }}>
              نسبة اكسيد الكربون: {specData.indexes[4]["CO2 Emission Index: "]}
            </h6>
          </div>
          <div className="trafficCont">
            {specData.traffic[0] &&
              specData.traffic[0][
                "Main Means of Transportation to Work or School"
              ] && (
                <>
                  <h5 style={{ fontWeight: "bold" }}>وسائل النقل الرئيسية</h5>
                  {specData.traffic[0] &&
                    specData.traffic[0][
                      "Main Means of Transportation to Work or School"
                    ].map((data, index) => {
                      const key = Object.keys(data)[0];
                      const value = data[key];
                      return (
                        <div className="trafficData" key={key + index}>
                          <p>{translate(key)}</p>
                          <div className="trafficDetails">
                            <div
                              style={{
                                height: 15,
                                width: Math.ceil(
                                  Number(value.slice(0, value.length - 2))
                                ),
                                backgroundColor: "#7070ff",
                              }}
                            ></div>
                            <p>{value}</p>
                          </div>
                        </div>
                      );
                    })}
                </>
              )}
            {specData.traffic[1] &&
              specData.traffic[1]["Average when primary using Walking"] && (
                <>
                  <h5 style={{ fontWeight: "bold", marginTop: 20 }}>
                    المتوسط عند المشي
                  </h5>
                  {specData.traffic[1][
                    "Average when primary using Walking"
                  ].map((data, index) => {
                    const key = Object.keys(data)[0];
                    const value = data[key];
                    return (
                      <div className="trafficData" key={key + index}>
                        <p>{translate(key)}</p>
                        <div className="trafficDetails">
                          {index === 0 ? (
                            <div
                              style={{
                                height: 15,
                                width: Math.ceil(parseFloat(value) * 5),
                                backgroundColor: "#ca6afa",
                              }}
                            ></div>
                          ) : (
                            <div
                              style={{
                                height: 15,
                                width:
                                  window.innerWidth > 700
                                    ? Math.ceil(parseFloat(value) * 3)
                                    : Math.ceil(parseFloat(value) * 2),
                                backgroundColor: "#2BBD24",
                              }}
                            ></div>
                          )}
                          <p>{value}</p>
                        </div>
                      </div>
                    );
                  })}
                </>
              )}
            {specData.traffic[2] &&
              specData.traffic[2]["Average when primary using Car"] && (
                <>
                  <h5 style={{ fontWeight: "bold", marginTop: 20 }}>
                    المتوسط عند قيادة سيارة
                  </h5>
                  {specData.traffic[2]["Average when primary using Car"].map(
                    (data, index) => {
                      const key = Object.keys(data)[0];
                      const value = data[key];
                      return (
                        <div className="trafficData" key={key + index}>
                          <p>{translate(key)}</p>
                          <div className="trafficDetails">
                            {index === 0 ? (
                              <div
                                style={{
                                  height: 15,
                                  width: Math.ceil(parseFloat(value) * 5),
                                  backgroundColor: "#ca6afa",
                                }}
                              ></div>
                            ) : (
                              <div
                                style={{
                                  height: 15,
                                  width:
                                    window.innerWidth > 700
                                      ? Math.ceil(parseFloat(value) * 3)
                                      : Math.ceil(parseFloat(value) * 2),
                                  backgroundColor: "#2BBD24",
                                }}
                              ></div>
                            )}
                            <p>{value}</p>
                          </div>
                        </div>
                      );
                    }
                  )}
                </>
              )}
            {specData.traffic[3] &&
              specData.traffic[3]["Average when primary using Bike"] && (
                <>
                  <h5 style={{ fontWeight: "bold", marginTop: 20 }}>
                    المتوسط عند قيادة دراجة
                  </h5>
                  {specData.traffic[3] &&
                    specData.traffic[3]["Average when primary using Bike"].map(
                      (data, index) => {
                        const key = Object.keys(data)[0];
                        const value = data[key];
                        return (
                          <div className="trafficData" key={key + index}>
                            <p>{translate(key)}</p>
                            <div className="trafficDetails">
                              {index === 0 ? (
                                <div
                                  style={{
                                    height: 15,
                                    width: Math.ceil(parseFloat(value) * 5),
                                    backgroundColor: "#ca6afa",
                                  }}
                                ></div>
                              ) : (
                                <div
                                  style={{
                                    height: 15,
                                    width:
                                      window.innerWidth > 700
                                        ? Math.ceil(parseFloat(value) * 3)
                                        : Math.ceil(parseFloat(value) * 2),
                                    backgroundColor: "#2BBD24",
                                  }}
                                ></div>
                              )}
                              <p>{value}</p>
                            </div>
                          </div>
                        );
                      }
                    )}
                </>
              )}
            {specData.traffic[4] &&
              specData.traffic[4]["Average when primary using Motorbike"] && (
                <>
                  <h5 style={{ fontWeight: "bold", marginTop: 20 }}>
                    المتوسط عند قيادة دراجة نارية
                  </h5>
                  {specData.traffic[4] &&
                    specData.traffic[4][
                      "Average when primary using Motorbike"
                    ].map((data, index) => {
                      const key = Object.keys(data)[0];
                      const value = data[key];
                      return (
                        <div className="trafficData" key={key + index}>
                          <p>{translate(key)}</p>
                          <div className="trafficDetails">
                            {index === 0 ? (
                              <div
                                style={{
                                  height: 15,
                                  width: Math.ceil(parseFloat(value) * 5),
                                  backgroundColor: "#ca6afa",
                                }}
                              ></div>
                            ) : (
                              <div
                                style={{
                                  height: 15,
                                  width:
                                    window.innerWidth > 700
                                      ? Math.ceil(parseFloat(value) * 3)
                                      : Math.ceil(parseFloat(value) * 2),
                                  backgroundColor: "#2BBD24",
                                }}
                              ></div>
                            )}
                            <p>{value}</p>
                          </div>
                        </div>
                      );
                    })}
                </>
              )}
            {specData.traffic[5] &&
              specData.traffic[5][
                "Average when primary using Bus/Trolleybus"
              ] && (
                <>
                  <h5 style={{ fontWeight: "bold", marginTop: 20 }}>
                    المتوسط عند ركوب الباص
                  </h5>
                  {specData.traffic[5] &&
                    specData.traffic[5][
                      "Average when primary using Bus/Trolleybus"
                    ].map((data, index) => {
                      const key = Object.keys(data)[0];
                      const value = data[key];
                      return (
                        <div className="trafficData" key={key + index}>
                          <p>{translate(key)}</p>
                          <div className="trafficDetails">
                            {index === 0 ? (
                              <div
                                style={{
                                  height: 15,
                                  width: Math.ceil(parseFloat(value) * 5),
                                  backgroundColor: "#ca6afa",
                                }}
                              ></div>
                            ) : (
                              <div
                                style={{
                                  height: 15,
                                  width:
                                    window.innerWidth > 700
                                      ? Math.ceil(parseFloat(value) * 3)
                                      : Math.ceil(parseFloat(value) * 2),
                                  backgroundColor: "#2BBD24",
                                }}
                              ></div>
                            )}
                            <p>{value}</p>
                          </div>
                        </div>
                      );
                    })}
                </>
              )}
            {specData.traffic[6] &&
              specData.traffic[6][
                "Average when primary using Tram/Streetcar"
              ] && (
                <>
                  <h5 style={{ fontWeight: "bold", marginTop: 20 }}>
                    المتوسط عند ركوب الترام
                  </h5>
                  {specData.traffic[6] &&
                    specData.traffic[6][
                      "Average when primary using Tram/Streetcar"
                    ].map((data, index) => {
                      const key = Object.keys(data)[0];
                      const value = data[key];
                      return (
                        <div className="trafficData" key={key + index}>
                          <p>{translate(key)}</p>
                          <div className="trafficDetails">
                            {index === 0 ? (
                              <div
                                style={{
                                  height: 15,
                                  width: Math.ceil(parseFloat(value) * 5),
                                  backgroundColor: "#ca6afa",
                                }}
                              ></div>
                            ) : (
                              <div
                                style={{
                                  height: 15,
                                  width:
                                    window.innerWidth > 700
                                      ? Math.ceil(parseFloat(value) * 3)
                                      : Math.ceil(parseFloat(value) * 2),
                                  backgroundColor: "#2BBD24",
                                }}
                              ></div>
                            )}
                            <p>{value}</p>
                          </div>
                        </div>
                      );
                    })}
                </>
              )}
            {specData.traffic[7] &&
              specData.traffic[7]["Average when primary using Train/Metro"] && (
                <>
                  <h5 style={{ fontWeight: "bold", marginTop: 20 }}>
                    المتوسط عند ركوب المترو/القطار
                  </h5>
                  {specData.traffic[7] &&
                    specData.traffic[7][
                      "Average when primary using Train/Metro"
                    ].map((data, index) => {
                      const key = Object.keys(data)[0];
                      const value = data[key];
                      return (
                        <div className="trafficData" key={key + index}>
                          <p>{translate(key)}</p>
                          <div className="trafficDetails">
                            {index === 0 ? (
                              <div
                                style={{
                                  height: 15,
                                  width: Math.ceil(parseFloat(value) * 5),
                                  backgroundColor: "#ca6afa",
                                }}
                              ></div>
                            ) : (
                              <div
                                style={{
                                  height: 15,
                                  width:
                                    window.innerWidth > 700
                                      ? Math.ceil(parseFloat(value) * 3)
                                      : Math.ceil(parseFloat(value) * 2),
                                  backgroundColor: "#2BBD24",
                                }}
                              ></div>
                            )}
                            <p>{value}</p>
                          </div>
                        </div>
                      );
                    })}
                </>
              )}
            {specData.traffic[8] &&
              specData.traffic[8][
                "Overall Average Travel Time and Distance to Work (School)"
              ] && (
                <>
                  <h5 style={{ fontWeight: "bold", marginTop: 20 }}>
                    المتوسطي الكلي للمواصلات
                  </h5>
                  {specData.traffic[8] &&
                    specData.traffic[8][
                      "Overall Average Travel Time and Distance to Work (School)"
                    ].map((data, index) => {
                      const key = Object.keys(data)[0];
                      const value = data[key];
                      return (
                        <div className="trafficData" key={key + index}>
                          <p>{translate(key)}</p>
                          <div className="trafficDetails">
                            {index === 0 ? (
                              <div
                                style={{
                                  height: 15,
                                  width: Math.ceil(parseFloat(value) * 5),
                                  backgroundColor: "#ca6afa",
                                }}
                              ></div>
                            ) : (
                              <div
                                style={{
                                  height: 15,
                                  width:
                                    window.innerWidth > 700
                                      ? Math.ceil(parseFloat(value) * 3)
                                      : Math.ceil(parseFloat(value) * 2),
                                  backgroundColor: "#2BBD24",
                                }}
                              ></div>
                            )}
                            <p>{value}</p>
                          </div>
                        </div>
                      );
                    })}
                </>
              )}
          </div>
        </>
      )}
    </div>
  );
};
export default Traffic;
