import React from 'react';
import { useState } from 'react';
import { useContext } from 'react'
import { TripContext } from '../Context/TripContext'
import { useAccomodations } from '../hooks/useAccomodations';
import { useTransportation } from '../hooks/useTransportation';
import useActivities from '../hooks/useActivities';

function ModalCity() {
const[selectedTab,setSelectedTab]=useState('');

const {closeModal,selectedCityId,selectedPlan,setSelectedPlan} =useContext(TripContext)
 const accomodations = useAccomodations(selectedCityId);
 const transportation =useTransportation(selectedCityId);
 const activities = useActivities(selectedCityId);
console.log(selectedPlan);
  return (
    <>
    <div className='bg-black/50 z-50  inset-0 fixed flex items-center justify-center' onClick={closeModal}>
    <div className='rounded-xl shadow-2xl bg-white p-5 w-xs md:w-md sm:w-md max-h-[80vh] overflow-y-auto overflow-hidden z-40 cursor-pointer hover:shadow-xl transition duration-300 mb-4' onClick={(e)=> e.stopPropagation()}>
       <div className='flex flex-col gap-4 items-center  md:flex-row  sm:flex-row justify-around'>
           <button className='bg-gray-700 font-semibold text-white rounded p-1.5 cursor-pointer' onClick={()=>setSelectedTab('Accommodation')}>Accommodation</button>
           <button className='bg-gray-700 font-semibold text-white rounded p-1.5 cursor-pointer'  onClick={()=>setSelectedTab('Transportation')}>Transportation</button>
          <button className='bg-gray-700 font-semibold text-white rounded p-1.5 cursor-pointer' onClick={()=>setSelectedTab('Activities')}>Activities</button>
      </div>
        {selectedTab &&
         <div className='flex justify-between items-center mb-4'>
             <p className='text-xl font-semibold text-shadow-rose-950'>{selectedTab}</p>
             <button className='text-xl font-bold cursor-pointer' onClick={()=>closeModal()}>X</button>
        </div>
        }
        {selectedTab==='Accommodation' ? accomodations.map((hotel)=>(
        <div key={hotel.id} className='rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 mb-6  cursor-pointer'>
           <img className='w-full h-48 object-cover'
            src={hotel.image}
            />
           <div className='p-4'>
              <p className='text-2xl font-bold text-amber-950'>{hotel.name}</p>
              <p className='text-lg font-medium text-amber-900'>{hotel.location}
              </p>
              <button onClick={()=>setSelectedPlan({...selectedPlan,accommodation:{name:hotel.name,image:hotel.image}})}>Select this Hotel</button>
           </div>
     </div>
      )):""}
    
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

 {selectedTab==='Activities'?activities.map((activity)=>(
        <div key={activity.id} className='rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 mb-6  cursor-pointer'>
           <img className='w-full h-48 object-cover'
            src={activity.image}
            />
           <div className='p-4'>
              <p className='text-2xl font-bold text-amber-950'>{activity.name}</p>
              <p className='text-lg font-medium text-amber-900'>{activity.location}
              </p>
              <p className='text-lg font-medium text-amber-900'>{activity.details}</p>
              <p className='text-lg font-medium text-amber-900'>{activity.type}</p>
              <button onClick={()=>setSelectedPlan({...selectedPlan,activities:[...selectedPlan.activities,{name:activity.name,image:activity.image}]})}>Select this Activity</button>
           </div>
     </div>
      )):""}
        
    </div>
    </div>
   
    </>
  )
}
export default ModalCity
