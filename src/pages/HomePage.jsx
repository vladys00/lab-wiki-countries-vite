import { useState, useEffect } from "react";
import axios from "axios";

function HomePage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        setCountries(response.data);
      });
  }, []);
  return (
    <div>
      <h1>WikiCountries: Your Guide to the World</h1>
      <table className="table overflow-auto" >
        <tbody>
          {countries.map((country) => {
            return (
              <tr id="country._id">
                <td>{country.name.common}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default HomePage;
