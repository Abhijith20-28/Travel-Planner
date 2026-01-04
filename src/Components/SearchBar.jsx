import { useContext } from "react";
import { TripContext } from "../Context/TripContext";

function SearchBar() {
  const { destinationInput, setDestinationInput, handleSearch } =
    useContext(TripContext);

  return (
    <>
     
    <div className="flex flex-col items-center mt-20 space-y-4 mb-5">
      <div className="flex w-full max-w-lg">
        <input
          className="flex-1 px-4 py-4 rounded-l-lg"
          value={destinationInput}
          onChange={(e) => setDestinationInput(e.target.value)}
          placeholder="Search destination"
        />
        <button
          className="px-6 py-3 bg-blue-500 text-white rounded-r-lg"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
    </>
  );
}

export default SearchBar;
