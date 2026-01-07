import React from 'react';
import { useState } from 'react';
import { useContext } from 'react'
import { TripContext } from '../Context/TripContext'
import Accommodations from './Accommodations';
import Activities from './Activities';
import Transportation from './Transportation';

function ModalCity() {

const {closeModal,selectedCityId,selectedPlan,setSelectedPlan,selectedTab,setSelectedTab} =useContext(TripContext)

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
       
        <Accommodations/>
        <Transportation/>
        <Activities/>
    </div>
    </div>
   
    </>
  )
}
export default ModalCity
