import { useState } from "react";
import getOs from "./getOs";
import "./home.css";
import Switch from "../globes/siwtch";
import Search from "./search";
import Choices from "../modes/choices";
import { ImSpinner9 } from "@react-icons/all-files/im/ImSpinner9";
import { BsSun } from "@react-icons/all-files/bs/BsSun";
import { FaMoon } from "@react-icons/all-files/fa/FaMoon";
import loc from "./logo.png";
import { FaCity } from "@react-icons/all-files/fa/FaCity";
import { MdChromeReaderMode } from "@react-icons/all-files/md/MdChromeReaderMode";
const Home = () => {
  const [os] = useState(getOs());
  const [flagName, setFlagName] = useState(false);
  const [hoverD, setHoverD] = useState(false);
  const [isRotate, setIsRotate] = useState(true);
  const [mode, setMode] = useState("default");
  const [rotate, setRotate] = useState(false);
  const [search, setSearch] = useState(false);
  const [isModeBoard, setIsModeBoard] = useState(false);
  const [isDay, setIsDay] = useState(false);
  const [searchList, setSearchList] = useState(false);

  const [selected, setSelected] = useState(false);
  return (
    <div className="body">
      <div className="logoHeaderHome">
        <img src={loc} style={{ width: 90 }} alt="" />
      </div>
      {os ? <h1 className="center">+</h1> : <></>}
      {true ? (
        <Search
          setRotate={setRotate}
          setSelected={setSelected}
          selected={selected}
          searchList={searchList}
          setSearchList={setSearchList}
        />
      ) : (
        <></>
      )}
      {hoverD ? (
        <div className="countryLabel" style={{ transform: "scale(.8)" }}>
          <img src={`https://flagcdn.com/24x18/${flagName}.png`} alt="" />
          <h3 style={{ margin: 0 }}>{hoverD.properties.ADMIN}</h3>
        </div>
      ) : (
        <></>
      )}
      {isModeBoard ? (
        <Choices setIsModeBoard={setIsModeBoard} setMode={setMode} />
      ) : (
        <></>
      )}
      <aside className="side">
        {/* <FiSearch
          className="search"
          onClick={() => {
            if (search) {
              setSearch(false);
            } else setSearch(true);
          }}
        /> */}
        <ImSpinner9 className="rotate" onClick={() => setIsRotate(!isRotate)} />
        {isDay ? (
          <FaMoon className="sun" onClick={() => setIsDay(false)} />
        ) : (
          <BsSun className="moon" onClick={() => setIsDay(true)} />
        )}
        <MdChromeReaderMode
          className="modesController"
          onClick={() => setIsModeBoard(!isModeBoard)}
        />
        <FaCity className="city" onClick={() => setMode("city")} />
      </aside>
      <Switch
        setHoverD={setHoverD}
        setFlagName={setFlagName}
        setSelected={setSelected}
        setSearch={setSearch}
        hoverD={hoverD}
        rotate={rotate}
        isRotate={isRotate}
        isDay={isDay}
        os={os}
        mode={mode}
      />
    </div>
  );
};
export default Home;
