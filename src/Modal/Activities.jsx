import React, { useContext } from 'react'
import { TripContext } from '../Context/TripContext'
import useActivities from '../hooks/useActivities';

function Activities() {
  const {selectedTab,selectedCityId,selectedPlan,setSelectedPlan}=useContext(TripContext)
  const activities = useActivities(selectedCityId);
  return (
    <div>
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
  )
}

export default Activities
