import { useState, useMemo, useEffect, useRef } from "react";
import Globe from "react-globe.gl";
import * as THREE from "three";
import * as d3 from "d3";
import data from "./cData.json";
const Default = ({ isRotate }) => {
  const globeEl = useRef();

  const [places, setPlaces] = useState([]);
  useEffect(() => {
    if (isRotate) {
      globeEl.current.controls().autoRotate = false;
      return;
    }
    globeEl.current.controls().autoRotate = true;
  }, [isRotate]);
  useEffect(() => {
    setPlaces(data.features);
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
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);
  return (
    <Globe
      ref={globeEl}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
      labelsData={places}
      labelLat={(d) => d.properties.latitude}
      labelLng={(d) => d.properties.longitude}
      labelText={(d) => d.properties.name}
      labelSize={(d) => Math.sqrt(d.properties.pop_max) * 4e-4}
      labelDotRadius={(d) => Math.sqrt(d.properties.pop_max) * 4e-4}
      labelColor={() => "rgba(88, 235, 52, 0.75)"}
      labelResolution={2}
    />
  );
};
export default Default;
