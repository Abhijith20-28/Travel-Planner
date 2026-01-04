import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

export function useAccomodations(cityId) {
  const [accomodations, setAccomodations] = useState([]);

  useEffect(() => {
    if(!cityId) return; 
    async function fetchAccomodations() {
      const snapshot = await getDocs(collection(db,"cities",cityId,"accomodations"));
      const accomodations = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
    setAccomodations(accomodations)
    }
    fetchAccomodations();
  }, [cityId]);

  return accomodations;
}
