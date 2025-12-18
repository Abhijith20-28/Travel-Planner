import { useContext } from "react"
import { TripContext } from "../Context/TripContext"
function Itinerary(){
  const{destinationInput,weatherUI}=useContext(TripContext)
  return(
    <>
      <div>
        <h2>Itinerary</h2>
        <p>selected city:{destinationInput}</p>
         {weatherUI && <p>Weather: {weatherUI.temperature}°C - {weatherUI.condition}</p>}
      </div>
    </>
  )
}
export default Itinerary