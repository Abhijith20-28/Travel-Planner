import { useContext, useState } from "react";
import SearchBar from "../Components/SearchBar.jsx";
import CityList from "../Components/CityList";
import { useCities } from "../hooks/useCities";
import { fetchWeather } from "../hooks/UseWeather";
import NavBar from "../Components/NavBar.jsx";
import { TripContext } from "../Context/TripContext.jsx";
import PopUp from "../Components/PopUp.jsx";

function SearchPage() {
  
  const{addPopUp,destinationinput,setDestinationInput,weatherUI,setWeatherUI,setFiltered,filtered}=useContext(TripContext)
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
      {addPopUp && <PopUp/>}
    </>
  );
}

export default SearchPage;
