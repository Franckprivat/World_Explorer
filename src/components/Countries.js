import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
      .then(res => {
        setCountries(res.data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  return (
    <div className='countries'>
      <h1>COUNTRIES</h1>
      {error && <p>Une erreur s'est produite : {error}</p>}
      {countries.length > 0 && (
        <ul>
          {countries.map(country => (
            <li key={country.name.common}>{country.name.common}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Countries;