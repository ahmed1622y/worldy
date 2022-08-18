import Sat from "./sat";
import Default from "./default";
import Hollow from "./hollow";
import Cities from "./cties";
import Custom from "./custom";
const Switch = ({
  setFlagName,
  setSelected,
  setHoverD,
  setSearch,
  mode,
  hoverD,
  isRotate,
  isDay,
  os,
  rotate,
}) => {
  switch (mode) {
    case "default":
      return (
        <Default
          hoverD={hoverD}
          setHoverD={setHoverD}
          setFlagName={setFlagName}
          rotate={rotate}
          isRotate={isRotate}
          setSelected={setSelected}
          isDay={isDay}
          setSearch={setSearch}
          os={os}
        />
      );
    case "hollow":
      return (
        <Hollow
          setSelected={setSelected}
          rotate={rotate}
          hoverD={hoverD}
          setHoverD={setHoverD}
          setFlagName={setFlagName}
          setSearch={setSearch}
          os={os}
          isRotate={isRotate}
        />
      );
    case "hd":
      return (
        <Custom
          setSelected={setSelected}
          hoverD={hoverD}
          setHoverD={setHoverD}
          setFlagName={setFlagName}
          setSearch={setSearch}
          os={os}
          isRotate={isRotate}
        />
      );
    case "city":
      return (
        <Cities
          hoverD={hoverD}
          setHoverD={setHoverD}
          setFlagName={setFlagName}
          isRotate={isRotate}
        />
      );
    // case "sat":
    //   return (
    //     <Sat
    //       hoverD={hoverD}
    //       setHoverD={setHoverD}
    //       setFlagName={setFlagName}
    //       isRotate={isRotate}
    //     />
    //   );
  }
};
export default Switch;
