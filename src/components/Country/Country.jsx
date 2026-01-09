import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {
  //   console.log(handleVisitedFlags);
  //   console.log(country);
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    // console.log("btn clicked");
    // setVisited(true);
    // if (visited === true) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }
    setVisited(!visited);
    // country argument hissabe handleVisitedCountries function a pathabo.
    handleVisitedCountries(country);
  };
  return (
    <div className={`country  ${visited && "visited-country "}`}>
      <p>Name : {country.name.common} </p>
      <img src={country.flags.png} alt="" />
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not visited"}
      </button>
      <button onClick={() => handleVisitedFlags(country.flags.png)}>
        Visited Flags
      </button>
    </div>
  );
};

export default Country;
