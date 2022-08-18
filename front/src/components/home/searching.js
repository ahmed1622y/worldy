import arabic from "../../data/DB.json";
import { COUNTRIES_DATA } from "./data/countries_data1";
const search = (oldName, setCountriesList) => {
  var name = oldName.trim();
  const searchCountries = COUNTRIES_DATA.filter((country) => {
    if (country.name.toLowerCase().includes(name.toLowerCase())) {
      return country;
    }
  });
  setCountriesList(searchCountries);
  let arName;
  arabic.filter((ar) => {
    if (ar.Country === name || ar.Country.split(" ").includes(name)) {
      arName = ar.name;
    }
  });
  const wanted = COUNTRIES_DATA.filter((one) => {
    if (
      one.name.toLowerCase().split(" ").includes(name.toLowerCase()) ||
      one.name.toLowerCase() === name.toLowerCase() ||
      one.name.toLowerCase() === arName?.toLowerCase() ||
      one.name.toLowerCase().split(" ").includes(arName?.toLowerCase())
    ) {
      return one;
    }
  });
  return wanted[0];
};
export default search;
