import './App.css'
import Itinerary from './Components/Itinerary'
import NavBar from './Components/NavBar'
import SearchBar from './Components/SearchBar'
import CityList from './Components/CityList'
import TripProvider from './Context/TripProvider'
import Hero from './Pages/Hero'
import { Route,Routes,Outlet} from 'react-router-dom'
import SearchPage from './Pages/SearchPage'
import ItineraryPage from './Pages/ItineraryPage'

function LayoutWithNav() {
  return (
    <>
      <NavBar />
      <Outlet/>
    </>
  )
}
function App() {
  return (
    <TripProvider>
        <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route element={<LayoutWithNav/>}>
          <Route path='/search' element={<SearchPage/>}/>
          <Route path='/itinerary' element={<ItineraryPage/>}/>
          </Route>
        </Routes>
    </TripProvider>
  );
}

export default App
