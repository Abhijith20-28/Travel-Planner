import React, { useContext } from 'react'
import { TripContext } from '../Context/TripContext'
function SelectedCard() {
  const {selectedPlan}=useContext(TripContext)
  return (
    <div>
       <div>
          {selectedPlan.transportation && 
            <div>
              <p className="text-2xl">{selectedPlan.transportation.name}</p>
              <img className="w-44 h-44 object-cover" src={selectedPlan.transportation.image}/>
           </div> 
          }
        </div>
    </div>
  )
}

export default SelectedCard
