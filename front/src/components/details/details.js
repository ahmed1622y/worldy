import "./details.css";

import { useParams } from "react-router-dom";
import Tabs from "./tabs";
import { useState, useEffect } from "react";
import ct from "countries-and-timezones";
import Header from "./header";
const Details = () => {
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
      <Tabs />
    </div>
  );
};
export default Details;
