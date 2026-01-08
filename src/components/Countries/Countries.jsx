import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
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
  return (
    <div>
      <h1>Traveling countries : {countries.length}</h1>
      <h3>Travel so far : {visitedCountries.length} </h3>
      <ol>
        {visitedCountries.map((ctry) => (
          <li>{ctry.name.common}</li>
        ))}
      </ol>

      <div className="countries">
        {countries.map((country) => (
          <Country
            country={country}
            handleVisitedCountries={handleVisitedCountries}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
