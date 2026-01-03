import { useContext } from "react";
import { TripContext } from "../Context/TripContext";

function CityCard({ city, weatherUI, onClick }) {
  const showWeather =
    weatherUI &&
    weatherUI.city.trim().toLowerCase() === city.Name.trim().toLowerCase();
 const {addCityToItinerary}=useContext(TripContext)
  return (
    <div
      onClick={() => onClick(city.Name)}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 mb-6 max-w-md mx-auto cursor-pointer"
    >
      <img
        className="w-full h-48 object-cover"
        src={city.image}
        alt={city.Name}
      />

      <div className="p-4">
        <h3 className="text-2xl font-bold text-gray-900">{city.Name}</h3>
        <p className="text-lg font-medium text-gray-600">{city.country}</p>
        <p className="text-gray-700 mt-2 line-clamp-3">
          {city.description}
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Population: {city.population}
        </p>

        {showWeather && (
          <p className="text-sm text-gray-600 mt-2">
            Temp: {weatherUI.temperature}°C — {weatherUI.condition}
          </p>
        )}
          
      <div className="flex justify-center pb-5">
        <button onClick={(e)=>{e.stopPropagation();addCityToItinerary(city)}}className="bg-gray-900 text-white p-2 font-bold rounded">
          Add To Trip
        </button>
      </div>

      </div>

    </div>
  );
}

export default CityCard;
