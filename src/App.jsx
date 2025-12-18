
import './App.css'
import Itinerary from './Components/Itinerary'
import NavBar from './Components/NavBar'
import SearchBar from './Components/SearchBar'
import TripProvider from './Context/TripProvider'
function App() {
  
  return (
    <TripProvider>
      <SearchBar/>
      <Itinerary/>
      <NavBar/>
    </TripProvider>
  )
}

export default App
