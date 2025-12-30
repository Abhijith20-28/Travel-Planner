import React from 'react';
import { useState } from 'react';
import { useContext } from 'react'
import { TripContext } from '../Context/TripContext'
import { useAccomodations } from '../hooks/useAccomodations';
import { useTransportation } from '../hooks/useTransportation';
import useActivities from '../hooks/useActivities';

function ModalCity() {
const[selectedTab,setSelectedTab]=useState('');
const {closeModal,selectedCityId} =useContext(TripContext)
 const accomodations = useAccomodations(selectedCityId);
 const transportation =useTransportation(selectedCityId);
 const activities = useActivities(selectedCityId);

  return (
    <>
    <div className='bg-black/50 z-50  inset-0 fixed flex items-center justify-center' onClick={closeModal}>
    <div className='rounded-xl shadow-2xl bg-white p-5 w-md max-h-[80vh] overflow-y-auto overflow-hidden z-40 cursor-pointer hover:shadow-xl transition duration-300 mb-4' onClick={(e)=> e.stopPropagation()}>

        <button onClick={()=>setSelectedTab('accommodation')}>Accommodation</button>
        <button onClick={()=>setSelectedTab('Transportation')}>Transportation</button>
        <button onClick={()=>setSelectedTab('activities')}>Activities</button>

      
         <div className='flex justify-between items-center mb-4'>
          <p className='text-xl font-semibold'>Accommodations</p>
          <button className='text-xl font-bold cursor-pointer' onClick={()=>closeModal()}>X</button>
        </div>
        {selectedTab==='accommodation' ? accomodations.map((hotel)=>(
        <div key={hotel.id} className='rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 mb-6  cursor-pointer'>
           <img className='w-full h-48 object-cover'
            src={hotel.image}
            />
           <div className='p-4'>
              <p className='text-2xl font-bold text-amber-950'>{hotel.name}</p>
              <p className='text-lg font-medium text-amber-900'>{hotel.location}
              </p>
           </div>
     </div>
      )):""}
    
    <div className='mt-6'>
      {selectedTab==='Transportation'?transportation.map((vehicle)=>(
        <div key={vehicle.id} className='mb-4'>
           <p>{vehicle.type}</p>
           <p>{vehicle.name}</p>
           <p>{vehicle.details}</p>
           <img src={vehicle.image}/>
        </div>
      )):""}
      </div>

 {selectedTab==='activities'?activities.map((activity)=>(
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
           </div>
     </div>
      )):""}
        
    </div>
    </div>
   
    </>
  )
}
export default ModalCity
