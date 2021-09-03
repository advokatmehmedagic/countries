import React from "react";
import { useHistory } from "react-router-dom";

import "./Country.scss";

export default function Country({ isDarkMode, setIsDarkMode, country }) {
  const history = useHistory();
  const handleClick = () => {
    history.push(`/country/${country.alpha3Code}`);
  };

  return (
    <div onClick={handleClick} className={`card ${isDarkMode && `darkMode`}`}>
      <div className="cardTop">
        <img src={country.flag} alt="country" />
      </div>
      <div className={`cardBottom ${isDarkMode && `darkMode`}`}>
        <div className="title">{country.name}</div>
        <div className="info">
          <p className="population">
            Population: <span>{country.population.toLocaleString()}</span>
          </p>
          <p className="region">
            Region: <span>{country.region}</span>
          </p>
          <p className="capital">
            Capital: <span>{country.capital}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
