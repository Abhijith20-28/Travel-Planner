import { useState,useEffect } from "react";
import { collection,doc,getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

export function useTransportation(cityId){
 const[transportation,setTransportation]=useState([])

 useEffect(()=>{
  if(!cityId) return
   async function fetchTransportation() {
      const snapshot = await getDocs (collection(db,"cities",cityId,"transportation"));
      const transportation =snapshot.docs.map(doc=>({
        id:doc.id,
        ...doc.data(),
      }))
   setTransportation(transportation)
    }
 fetchTransportation()
 },[cityId])
 return transportation
}