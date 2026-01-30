import { useContext, useState } from "react";
import SearchBar from "../Components/SearchBar.jsx";
import CityList from "../Components/CityList";
import { TripContext } from "../Context/TripContext.jsx";
import PopUp from "../Components/PopUp.jsx";

function SearchPage() {
  const{addPopUp}=useContext(TripContext)
  return (
    <>
      <SearchBar/>
      <CityList/>
      {addPopUp && <PopUp/>}
    </>
  );
}

export default SearchPage;
