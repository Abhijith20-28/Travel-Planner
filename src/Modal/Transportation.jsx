import React, { useContext } from 'react'
import { TripContext } from '../Context/TripContext'
import { useTransportation } from '../hooks/useTransportation';

function Transportation() {
  const{selectedTab,selectedCityId,setSelectedPlan,selectedPlan}=useContext(TripContext)
  const transportation =useTransportation(selectedCityId);
  return (
   <div className='mt-6'>
      {selectedTab==='Transportation'?transportation.map((vehicle)=>(
        <div key={vehicle.id} className='mb-4 bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow pl-2'>
           <img className='h-40 w-full object-cover' src={vehicle.image}/>
           <p className='text-2xl font-semibold text-gray-900'>{vehicle.name}</p>   
           <span className='text-xs uppercase tracking-wide text-gray-500'>{vehicle.type}</span>
           <p className='text-sm text-gray-600 line-clamp-2'>{vehicle.details}</p>
           <div className='flex justify-center pb-2'>
           <button onClick={()=>setSelectedPlan({...selectedPlan,transportation:{name:vehicle.name,image:vehicle.image}})} className='mt-3 w-48 rounded-lg border bg-gray-600 text-white py-2 text-sm font-medium  transition-colors'>Select this Mode</button>
           </div>
        </div>
      )):""}
      </div>
  )
}

export default Transportation
