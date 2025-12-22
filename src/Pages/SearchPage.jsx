import { useState } from "react";
import SearchBar from "../Components/SearchBar.jsx";
import CityList from "../Components/CityList";
import { useCities } from "../hooks/useCities";
import { fetchWeather } from "../hooks/UseWeather";
import NavBar from "../Components/NavBar.jsx";

function SearchPage() {
  const [destinationinput, setDestinationInput] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [weatherUI, setWeatherUI] = useState(null);

  const cities = useCities();
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const handleSearch = () => {
    setFiltered(
      cities.filter(city =>
        city.Name.toLowerCase().includes(destinationinput.toLowerCase())
      )
    );
  };

  const handleCityClick = async (cityName) => {
    const data = await fetchWeather(cityName, apiKey);
    setWeatherUI({
      city: cityName,
      temperature: data.main.temp,
      condition: data.weather[0].main,
    });
  };

  return (
    <>
      <SearchBar
        value={destinationinput}
        onChange={setDestinationInput}
        onSearch={handleSearch}
      />

      <CityList
        cities={filtered}
        weatherUI={weatherUI}
        onCityClick={handleCityClick}
      />
    </>
  );
}

export default SearchPage;
