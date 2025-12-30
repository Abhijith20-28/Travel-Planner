import React from 'react'
import { useState,useEffect } from "react";
import {collection,getDocs} from 'firebase/firestore';
import { db } from '../firebaseConfig';

function useActivities(cityId) {
  const[activities,setActivities]=useState([])
  useEffect(()=>{
     if(!cityId) return
     async function fetchActivities() {
      const snapshot = await getDocs(collection(db,"cities",cityId,"activities"))
      const activities = snapshot.docs.map((doc)=>({
        id:doc.id,
        ...doc.data(),
      }))
      setActivities(activities)
     }
     fetchActivities();
  },[cityId])

  return activities
}
export default useActivities

