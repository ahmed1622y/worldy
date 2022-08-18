import { useState, useMemo, useEffect, useRef } from "react";
import Globe from "react-globe.gl";
import * as THREE from "three";
import * as d3 from "d3";
import data from "./data.json";
import day from "./day.jpg";
import night from "./test.jpg";
import { useNavigate } from "react-router-dom";
// import bump from "./bump.jpg";
import inside from "./polyCheck";
const Default = ({
  setFlagName,
  setHoverD,
  hoverD,
  isRotate,
  isDay,
  setSearch,
  os,
  rotate,
  setSelected,
}) => {
  const navigate = useNavigate();
  const globeEl = useRef();
  const [countries, setCountries] = useState({ features: [] });
  useEffect(() => {
    if (rotate) {
      const countryLocation = {
        lat: rotate.latitude,
        lng: rotate.longitude,
      };
      globeEl.current.pointOfView(countryLocation);

      setHoverD(() => {
        const hold = data.features.filter((feature) => {
          return feature.properties.ADMIN === rotate.name;
        });
        setFlagName(hold[0]?.properties.ISO_A2.toLowerCase());
        return hold[0];
      });
    }
  }, [rotate]);
  useEffect(() => {
    // three.bumpScale = 20;
    if (isRotate) {
      globeEl.current.controls().autoRotate = false;
      return;
    }
    globeEl.current.controls().autoRotate = true;
  }, [isRotate]);
  useEffect(() => {
    globeEl?.current?.pointOfView(
      {
        altitude: 2,
      },
      0
    );
    if (window.innerWidth < 660) {
      globeEl?.current?.pointOfView(
        {
          altitude: 4,
        },
        0
      );
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth > 660) {
        globeEl?.current?.pointOfView(
          {
            altitude: 2,
          },
          0
        );
      }
      if (window.innerWidth < 660) {
        globeEl?.current?.pointOfView(
          {
            altitude: 4,
          },
          0
        );
      }
    });
    globeEl.current.controls().dampingFactor = 0.4;
    globeEl.current.controls().scrollSpeed = 100;

    setCountries({ features: data.features });
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  const colorScale = d3.scaleSequentialSqrt(d3.interpolateYlOrRd);

  const getVal = (feat) =>
    feat.properties.GDP_MD_EST / Math.max(1e5, feat.properties.POP_EST);

  const maxVal = useMemo(
    () => Math.max(...countries.features.map(getVal)),
    [countries]
  );
  colorScale.domain([1, maxVal]);

  return (
    <Globe
      ref={globeEl}
      hexBinPointWeight={51}
      onPolygonClick={(d) => {
        window.location.href = `/details/${
          d.properties.ADMIN
        }+${d.properties.ISO_A2.toLowerCase()}`;
      }}
      onZoom={() => {
        if (os) {
          const hover = inside(
            globeEl?.current?.pointOfView().lat,
            globeEl?.current?.pointOfView().lng
          );
          if (hover) {
            setSearch(false);
            setSelected(false);
            setHoverD(hover);
            setFlagName(hover?.properties.ISO_A2.toLowerCase());
          } else {
            setHoverD(false);
          }
        }
      }}
      polygonAltitude={(d) => (d === hoverD ? 0.01 : 0.01)}
      polygonSideColor={(d) => (d === hoverD ? "#76FF03" : "transparent")}
      globeImageUrl={isDay ? day : night}
      backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
      lineHoverPrecision={0}
      polygonsData={countries.features.filter(
        (d) => d.properties.ISO_A2 !== "AQ"
      )}
      Stroke={100}
      polygonCapColor={(d) =>
        d === hoverD ? "rgba(255,0,0,0.0)" : "transparent"
      }
      polygonStrokeColor={(d) => (d === hoverD ? "#76FF03" : "transparent")}
      onPolygonHover={(d) => {
        if (os) return;
        setSearch(false);
        setSelected(false);
        setFlagName(d?.properties.ISO_A2.toLowerCase());
        setHoverD(d);
      }}
      polygonsTransitionDuration={100}
    />
  );
};
export default Default;
