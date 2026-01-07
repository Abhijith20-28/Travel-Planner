import React, { useContext } from 'react'
import { TripContext } from '../Context/TripContext'
import { useAccomodations } from '../hooks/useAccomodations';

function Accommodations() {
  const{selectedTab,selectedCityId,selectedPlan,setSelectedPlan}=useContext(TripContext);
  const accomodations = useAccomodations(selectedCityId);

  return (
    <>
         {selectedTab ==='Accommodation' ?
         accomodations.map((hotel)=>
          (
            <div key={hotel.id} className='rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 mb-6  cursor-pointer'>
            <img className='w-full h-48 object-cover'
              src={hotel.image}
            />
           <div className='p-4'>
              <p className='text-2xl font-bold text-amber-950'>{hotel.name}</p>
              <p className='text-lg font-medium text-amber-900'>
                {hotel.location}
              </p>
              <button onClick={()=>
                setSelectedPlan({...selectedPlan,accommodation:{name:hotel.name,image:hotel.image}})}>
                Select this Hotel
              </button>
           </div>
     </div>
      )):""}
    </>
  )
}

export default Accommodations
