import { useState, useEffect,useContext} from "react"
import { TripContext } from "../Context/TripContext";
import { db } from "../firebaseConfig";
import { collection,getDocs } from "firebase/firestore";

function SearchBar(){
  const{destinationInput,setDestinationInput,weatherUI,setWeatherUI,cities,setCities}=useContext(TripContext);
  const[filterdList,setFilterdList]=useState([])
  const apiKey =import.meta.env.VITE_WEATHER_API_KEY;

 useEffect(()=>{
     const fetchCities = async()=>{
      const querySnapshot = await getDocs(collection(db,"cities"));
      const cityList = querySnapshot.docs.map(doc=>({
        id:doc.id,
        ...doc.data()
      }));
      setCities(cityList)
      setFilterdList(cityList)
     }
     fetchCities();
  },[])

  const handleSearch=()=>{
      const filt = cities.filter(city=>city.Name.toLowerCase().includes(destinationInput.toLowerCase()))
      setFilterdList(filt)
  }
 const cityClick=async()=>{
    if(!destinationInput) return;
    try{
    const res = await  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${destinationInput}&appid=${apiKey}&units=metric`)
    const data = await res.json();

      setWeatherUI({
    city:destinationInput,
    temperature:data.main.temp,
    condition:data.weather[0].main
  });
}
 catch (err){
  console.log(err)
 }
}

  return(
    <>
    <div className="flex flex-col items-center mt-20 space-y-4">
    <div className='flex w-full max-w-lg'>
      <input
       className=" flex-1 px-4 py-4 rounded-l-lg border-gray-300 focus:outline-none focus:ring-blue-500" type="text"
        placeholder="Search destination"
        value={destinationInput} 
        onChange={(e)=>setDestinationInput(e.target.value)}
      />
      <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-r-lg hover:bg-blue-600 transition"
      onClick={()=>{
        handleSearch();
        cityClick();
        }}>
        Search
      </button>
    </div>

    {destinationInput?filterdList.map((city)=>(
        <div key={city.id} onClick={()=>handleCard(city)} className='bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl tranition duration-300 mb-6 max-w-md mx-auto'>
          <img className='w-full  h-48 object-cover ' src={city.image}/>
          <div className="p-4">
           <h3 className='text-2xl font-bold text-gray-900'>{city.Name}</h3>
          <p className='text-lg font-medium text-gray-600'>{city.country}</p>
          <p className='text-gray-700 mt-2 line-clamp-3'>{city.description}</p>
          <p className="text-sm text-gray-500 mt-1">Population:{city.population}</p>
          {weatherUI && weatherUI.city.toLowerCase()===city.Name.toLowerCase() && (<p className="text-sm text-gray-600 mt-2">temp:{weatherUI.temperature}°C - condition:{weatherUI.condition}</p>)}
         </div>   
    </div>
      )):""}
       </div>
      
    </>
  )
}
export default SearchBar