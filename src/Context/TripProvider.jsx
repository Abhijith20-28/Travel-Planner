import React, { useState, useEffect } from "react";
import { TripContext } from "./TripContext";
import { useCities } from "../hooks/useCities";
import { fetchWeather } from "../hooks/UseWeather";

function TripProvider({ children }) {
  const allCities = useCities(); 
  const [destinationInput, setDestinationInput] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);
  const [isModal,setIsModal] = useState(false);
  const [selectedCityId,setSelectedCityId]=useState(null);
  const [weatherUI, setWeatherUI] = useState(null);
  const [selectedPlan,setSelectedPlan]=useState({transportation:null,accommodation:null,activities:[]});
  const [itinerary,setItinerary]=useState(
   ()=>{
     const saved =localStorage.getItem('plans')
     return saved?JSON.parse(saved):[]
});

 useEffect(()=>{
    localStorage.setItem('plans',JSON.stringify(itinerary))
  },[itinerary])

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    setFilteredCities(
      allCities.filter((city) =>
        city.Name.toLowerCase().includes(destinationInput.toLowerCase())
      )
    );
  }, [destinationInput, allCities]);

  const handleCityClick = async (city) => {
    
    const data = await fetchWeather(city.Name, apiKey);
    setWeatherUI({
      city: city.Name,
      temperature: data.main.temp,
      condition: data.weather[0].main,
    });
  };

  const addCityToItinerary=(city)=>{
  
    setItinerary((prev)=>{
      const exists = prev.some((c)=>c.Name.toLowerCase()===city.Name.toLowerCase());
      if (exists) return prev;
     
      return[...prev,city]  
   
    })
  }

  const removeCityFromItinerary=(city)=>{
    const filter = itinerary.filter((des)=>des.id !== city.id);
    setItinerary(filter);
  }

   const clickModal=(city)=>{
    setIsModal(true)
    setSelectedCityId(city.id)

  }
  const closeModal=(city)=>{
    setIsModal(false)
    setSelectedCityId(null)
  }
 
  const tripData = {
    destinationInput,
    setDestinationInput,
    filteredCities,
    weatherUI,
    handleCityClick,
    addCityToItinerary,
    itinerary,
    removeCityFromItinerary,
    isModal,
    setIsModal,
    clickModal,
    selectedCityId,
    setSelectedCityId,
    closeModal,
    selectedPlan,
    setSelectedPlan
 
  };
  
  return (
    <TripContext.Provider value={tripData}>
      {children}
    </TripContext.Provider>
  );
}

export default TripProvider;
