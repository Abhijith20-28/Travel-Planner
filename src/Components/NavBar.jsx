import { useState } from "react"
import { Link } from "react-router-dom";
function NavBar(){
  const[open,setOpen]=useState(false);
   const handleToggle=()=>{
    setOpen(!open)
   }
  return(
    <>
    <nav className="fixed top-0 left-0 w-full flex justify-between  text-2xl bg-gray-900 text-white font-bold h-16 items-center z-50">
      <div onClick={handleToggle} className="ml-3 md:hidden flex flex-col gap-1.5 cursor-pointer">
         <span className={`bg-white w-6 h-0.5 transition-all duration-300  ${open?"rotate-45 translate-y-2":""}`}></span>
         <span className={`bg-white w-6 h-0.5 transition-all duration-300  ${open?"opacity-0":""}`}></span>
         <span className={`bg-white w-6 h-0.5 transition-all duration-300  ${open?"-rotate-45 -translate-y-2":""}`} ></span>
      </div>
      <div className={`${open?"flex":"hidden"}  absolute top-14 left-0 bg-gray-800 w-full  flex  flex-col px-4 py-3 gap-3 transition-all duration-300 md:static md:flex md:flex-row  md:bg-transparent md:w-auto md:p-0`}>
        <h2><Link to="/">Home</Link></h2>
        <h2><Link to="/search">Search Trips</Link></h2>
        <h2><Link to="/itinerary">Itinerary</Link></h2>
        <h2>About</h2>
      </div>
    </nav>
    
    </>
  )
}
export default NavBar