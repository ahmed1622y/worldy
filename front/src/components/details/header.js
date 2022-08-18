import src from "./head.jpg";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import Clock from "react-live-clock";
import Services from "../../services/backend";
import { useEffect, useState } from "react";
function Header({ flagName, timezone, name }) {
  const [temp, setTemp] = useState("");
  useEffect(() => {
    let isMount = true;
    Services.getWeather(name)
      .then((res) => {
        setTemp([res.tempmax, res.tempmin]);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      isMount = false;
    };
  }, []);
  return (
    <>
      {" "}
      <header className="header_details">
        <div className="head_style"></div>
        <h3>المملكة العربية السعودية</h3>
        <img src={src} className="back" alt="" />
      </header>
      <section className="details_panel">
        <table className="table_el">
          <tbody>
            <tr>
              <td>العلم : </td>
              <td>
                <img src={`https://flagcdn.com/24x18/${flagName}.png`} alt="" />
              </td>
            </tr>
            <tr>
              <td>العاصمة : </td>
              <td>الرياض</td>
            </tr>
            <tr>
              <td>القارة : </td>
              <td>أسيا</td>
            </tr>
            <tr>
              <td>الوصف: </td>
              <td>
                السعودية هي دولة عربية، وتعد أكبر دول الشرق الأوسط مساحة، وتقع
                تحديدًا في الجنوب الغربي من قارة آسيا
              </td>
            </tr>
          </tbody>
        </table>
        <div className="table_element">
          <div className="first">
            <p>الوقت الاَن</p>
            <p>
              <Clock
                format={"HH:mm A"}
                style={{ color: "#1a7ff6" }}
                ticking={true}
                timezone={timezone?.timezones[0]}
              />
            </p>
            <div className="br"></div> <p>الطقس الاَن</p>
            <p>{temp ? temp[0] + "c" : "loading"}</p>
            <p>{temp ? temp[1] + "c" : "loading"}</p>
          </div>
          <div className="second ">
            <div className="d-flex flex-column align-items-center">
              <p>1000</p>
              <p>دولار امريكي</p>
            </div>

            <CgArrowsExchangeAltV className="arrow" />
            <div className="d-flex flex-column align-items-center">
              <p>3752</p>
              <p>ريال سعودي</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Header;
