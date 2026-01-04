import CityCard from "./CityCard";
import { useContext } from "react";
import { TripContext } from "../Context/TripContext";
import Itinerary from "./Itinerary";

function CityList() {
  const { filteredCities, weatherUI, handleCityClick } = useContext(TripContext);

  if (!filteredCities.length) return null;

  return (
    <>
      {filteredCities.map((city) => (
        <CityCard
          key={city.id}
          city={city}
          weatherUI={weatherUI}
          onClick={handleCityClick}
        />
      ))}
    </>
  );
}

export default CityList;
