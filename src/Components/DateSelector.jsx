import React from 'react'
import { useState } from 'react'
function DateSelector() {
  const[tripDate,setTripDate]=useState(null)
  return (
    <>
      <input value={tripDate} type='date' placeholder='Select Date' onChange={(e)=>setTripDate(e.target.value)}/>
    </>
  )
}

export default DateSelector
