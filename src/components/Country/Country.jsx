import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries }) => {
  //   console.log(country);
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    // console.log("btn clicked");
    // setVisited(true);
    if (visited === true) {
      setVisited(false);
    } else {
      setVisited(true);
    }
    // country argument hissabe handleVisitedCountries function a pathabo.
    handleVisitedCountries(country);
  };
  return (
    <div className="country">
      <p>Name : {country.name.common} </p>
      <img src={country.flags.png} alt="" />
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not visited"}
      </button>
    </div>
  );
};

export default Country;
