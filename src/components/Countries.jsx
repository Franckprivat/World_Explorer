import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(36);
  const [selectedRadio, setSelectedRadio] = useState("");
  const radios = ["Africa", "America", "Asia", "Europa", "Oceania"]
  // Le useEffect se joue lorsque le composant est monté
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="countries">
      <ul className="radio-container">
        <input type="range" min="1" max="250" defaultValue={rangeValue} onChange={ (e) => setRangeValue(e.target.value) } />
      </ul>
      {radios.map((continent) => (
        <li>
          <input type="radio" id={continent} onChange={(e) => setSelectedRadio(e.target.value)}/>
          <label htmlFor={continent}>{continent}</label>
        </li>
      ))}
      <ul>
        {data
        .filter((country) => country.continents[0]
        .sort((a, b) => b.population - a.population)
        .includes(selectedRadio))
        .slice(0, rangeValue)
        .map((country, index) => (
          <Card key={index} country={country} />
        ))}
      </ul>
    </div>
  );
};

export default Countries;
