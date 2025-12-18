import React from 'react'
import { useState } from 'react'
import { TripContext } from './TripContext'
function TripProvider({children}) {

  const [destinationInput, setDestinationInput] = useState("");
  const [cities, setCities] = useState([]);
  const [weatherUI, setWeatherUI] = useState(null);

   const tripData = {
    destinationInput,
    setDestinationInput,
    cities,
    setCities,
    weatherUI,
    setWeatherUI,
  };

  return (
    <TripContext.Provider value={tripData}>
       {children}
    </TripContext.Provider>
  )
}

export default TripProvider
