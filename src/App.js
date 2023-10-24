import { useState, useEffect } from "react";
import "./App.css";
import { countryList, stateList, cityList } from "./constants/data";

function App() {
  const [country, setCountry] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);

  useEffect(() => {
    setCountry(countryList);
  }, []);

  const handleState = (id) => {
    const filteredState = stateList.filter((state) => state.countryId === id);
    setState(filteredState);
  };

  const handleCity = (id) => {
    const filteredCity = cityList.filter((city) => city.stateId === id);
    setCity(filteredCity);
  };

  return (
    <div>
      <h2 className="text-xl underline font-semibold m-4">
        Cascading dropdown
      </h2>
      <>
        <h2 className="text-sm font-bold underline m-2">Select Country</h2>
        <select
          className="border border-black border-solid p-2 m-2 rounded-lg shadow-md"
          onChange={(e) => handleState(e.target.value)}
        >
          <option value="0">Select Country</option>
          {country.map((country) => {
            return (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            );
          })}
        </select>
      </>
      <>
        <h2 className="text-sm font-bold underline m-2">Select State</h2>
        <select
          className="border border-black border-solid p-2 m-2 rounded-lg shadow-md"
          onChange={(e) => handleCity(e.target.value)}
        >
          <option value="0">Select State</option>
          {state.map((state) => {
            return (
              <option key={state.id} value={state.id}>
                {state.name}
              </option>
            );
          })}
        </select>
      </>
      <>
        <h2 className="text-sm font-bold underline m-2">Select City</h2>
        <select className="border border-black border-solid p-2 m-2 rounded-lg shadow-md">
          <option value="0">Select City</option>
          {city.map((city) => {
            return (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            );
          })}
        </select>
      </>
    </div>
  );
}

export default App;
