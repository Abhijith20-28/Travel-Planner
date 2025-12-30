import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

export function useCities() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    async function fetchCities() {
      const snapshot = await getDocs(collection(db, "cities"));
      const cityList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCities(cityList);
    }

    fetchCities();
  }, []);

  return cities;
}
