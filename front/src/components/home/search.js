import { FiSearch } from "@react-icons/all-files/fi/FiSearch";
import searching from "./searching";
import { FiArrowRight } from "@react-icons/all-files/fi/FiArrowRight";
import { COUNTRIES_DATA } from "./data/countries_data1";
import { useState, useRef } from "react";

const Search = ({
  setSelected,
  setRotate,
  selected,
  searchList,
  setSearchList,
}) => {
  const [countries, setCountries] = useState(COUNTRIES_DATA);
  const searchInput = useRef();
  return (
    <div
      className="searchInputCont"
      onBlur={() => {
        setTimeout(() => {
          setSearchList(false);
        }, 100);
      }}
    >
      <FiSearch className="searchInputIcon" />
      <input
        ref={searchInput}
        type="text"
        className="searchInput"
        onChange={(e) => {
          setSelected(searching(e.target.value, setCountries));
        }}
        onClick={() => setSearchList(true)}
      />
      <FiArrowRight
        style={{ position: "absolute", right: 6, cursor: "pointer", top: 8 }}
        onClick={() => {
          setRotate(selected);
        }}
      />
      {searchList ? (
        <div className="searchList">
          {countries.length > 0 ? (
            countries.map((country) => {
              return (
                <button
                  className="searchItems"
                  key={country.name}
                  onClick={() => {
                    searchInput.current.value = "";
                    setRotate(country);
                    setSearchList(false);
                  }}
                >
                  {country.name}
                </button>
              );
            })
          ) : (
            <button className="searchItems" style={{ cursor: "text" }}>
              No matches
            </button>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
export default Search;
