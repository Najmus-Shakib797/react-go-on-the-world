import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);

  const [visitedFlags, setVisitedFlags] = useState([]);
  // app thaka asa promise k use korta hobe
  const countries = use(countriesPromise);
  //   console.log(countries);

  const handleVisitedCountries = (country) => {
    // console.log("visited countries found", country);
    // console.log(visitedCountries);
    const newVisitedCountries = [...visitedCountries, country];
    // console.log(newVisitedCountries);
    setVisitedCountries(newVisitedCountries);
  };

  const handleVisitedFlags = (flag) => {
    // console.log(flag);
    const newVisitedFlags = [...visitedFlags, flag];
    // console.log(newVisitedFlags);
    setVisitedFlags(newVisitedFlags);
  };
  return (
    <div>
      <h1>Traveling countries : {countries.length}</h1>
      <h3>Travel so far : {visitedCountries.length} </h3>
      <ol>
        {visitedCountries.map((ctry) => (
          <li key={ctry.cca3}>{ctry.name.common}</li>
        ))}
      </ol>

      <div className="visited-flags-container">
        {visitedFlags.map((flag, index) => (
          <img key={index} src={flag}></img>
        ))}
      </div>

      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlags={handleVisitedFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
