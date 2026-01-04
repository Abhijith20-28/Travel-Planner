import { useContext, useEffect,useState } from "react"
import { TripContext } from "../Context/TripContext"
import ModalCity from "../Modal/ModalCity";

function Itinerary(){
  
  const {itinerary,removeCityFromItinerary,selectedCityId,clickModal,isModal,selectedPlan} =useContext(TripContext)
   const sortedItinerary = [...itinerary].sort((a,b)=>a.Name.localeCompare(b.Name));

  return(
    <>
    <div className="flex flex-col items-center gap-4">
      <div>
        <h2 className="mt-16 text-6xl text-fuchsia-950 font-bold font-mono" >
          ITINERARY
        </h2>
      </div>
      <div className="flex flex-col gap-16">
        <div className="pl-9">
           {
          sortedItinerary.map((city)=>(
           <div key={city.id} className="shadow p-8 ">
             <p className="text-3xl font-bold text-gray-800 mb-4">
               {city.Name}
            </p>
                <div className="flex flex-row gap-4 text-center">
                  <button className="bg-cyan-950 py-2 px-4 text-white  rounded flex items-center justify-center hover:bg-cyan-900 focus:outline-2 focus:outline-offset-2 focus:bg-gray-700 active:bg-gray-950" onClick={()=>clickModal(city)}>
                    Select Trip
                  </button>
                <button className="bg-red-400 text-white py-2 px-4 rounded flex items-center justify-center hover:bg-red-800 focus:outline-2 focus:outline-offset-2 focus:bg-red-500 active:bg-red-900" onClick={()=>removeCityFromItinerary(city)}>
                  Remove city
                </button>
              </div>
           </div>
         ))}     
        </div>
        <div>
          {selectedPlan.transportation && 
            <div>
             <p className="text-2xl">{selectedPlan.transportation.name}</p>
             <img className="w-44 h-44 object-cover" src={selectedPlan.transportation.image}/>
          </div> 
    }
        </div>
      </div>
    </div>
    {sortedItinerary.some((city)=>city.id===selectedCityId) && isModal?<ModalCity/>:""}
    </>
  )
}
export default Itinerary