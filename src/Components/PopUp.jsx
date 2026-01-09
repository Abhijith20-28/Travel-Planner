import React, { useContext, useEffect, useState } from 'react'
import { TripContext } from '../Context/TripContext'
function PopUp() {
  const{setAddPopUp}=useContext(TripContext)
  const[visible,setVisible]=useState(false)
    useEffect(()=>{
      setVisible(true)
      const timeOutId =setTimeout(()=>{
         setAddPopUp(false);
         setVisible(false)
      },1000);
      return ()=>clearTimeout(timeOutId)
    },[])

    const handleTransitionEnd=()=>{
      if(!visible){
        setAddPopUp(false)
      }
    }
  return (
    <div className={`fixed bottom-12 left-1/2 -translate-x-1/2  transition-all duration-300  ease-out ${visible?"opacity-100 scale-105":"opacity-0 scale-75"} z-50`} onTransitionEnd={handleTransitionEnd}>
     <div className='bg-gray-900 text-white px-4  py-2 rounded shadow-lg'>
        City Added
      </div>
    </div>
  )
}

export default PopUp
