import Header from "./header";
import src from "./head.jpg";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ct from "countries-and-timezones";
function Popular() {
  const { name: allData } = useParams();
  const name = allData.split("+")[0];
  const flagName = allData.split("+")[1];
  const timezones = ct.getAllCountries();
  const [timezone, setTimeZone] = useState({ timezones: [""] });
  useEffect(() => {
    Object.values(timezones).map((element) => {
      if (element.name.toLocaleLowerCase() === name.trim().toLocaleLowerCase())
        setTimeZone(element);
    });
  }, []);
  return (
    <div className="details_body">
      <Header flagName={flagName} timezone={timezone} name={name} />
      <div className="panel popular">
        {" "}
        <h4 className="header_panel">اشهر الاماكن</h4>
        <div className="popular_body">
          <div className="panel_card">
            <div style={{ direction: "rtl" }}>
              <h5>برج المملكة</h5>
              <p>
                مركز المملكة، برج يقع في مدينة الرياض، عاصمة المملكة العربية
                السعودية. اكتمل إنشاء مركز المملكة عام 2002م، وهو يقع وسط الرياض{" "}
              </p>
            </div>
            <img src={src} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Popular;
