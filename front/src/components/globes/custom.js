import { useState, useMemo, useEffect, useRef } from "react";
import Globe from "react-globe.gl";
import * as THREE from "three";
import inside from "./polyCheck";
import * as d3 from "d3";
import data from "./data.json";

const Custom = ({
  setFlagName,
  setHoverD,
  hoverD,
  isRotate,
  setSearch,
  os,
  rotate,
  setSelected,
}) => {
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
    <>
      <Globe
        ref={globeEl}
        width={window.innerWidth - 10}
        height={window.innerHeight - 10}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        polygonAltitude={(d) => (d === hoverD ? 0.01 : 0.01)}
        polygonSideColor={(d) => (d === hoverD ? "green" : "transparent")}
        lineHoverPrecision={0}
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
        polygonsData={countries.features.filter(
          (d) => d.properties.ISO_A2 !== "AQ"
        )}
        Stroke={100}
        polygonCapColor={(d) =>
          d === hoverD ? "rgba(255,0,0,0.0)" : "transparent"
        }
        onPolygonClick={(d) => {
          console.log("custom");

          // window.location.href = `/details/${
          //   d.properties.ADMIN
          // }+${d.properties.ISO_A2.toLowerCase()}`;
        }}
        polygonStrokeColor={(d) => (d === hoverD ? "green" : "transparent")}
        onPolygonHover={(d) => {
          if (os) return;
          setSearch(false);
          setSelected(false);
          setHoverD(d);

          setFlagName(d?.properties.ISO_A2.toLowerCase());
        }}
        polygonsTransitionDuration={100}
      />
    </>
  );
};
export default Custom;
