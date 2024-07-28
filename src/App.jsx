
import './App.css'
import Navbar from './components/Navbar'
import {Route, Routes} from "react-router-dom"
import Home from './pages/Home'
import Favourites from './pages/Favourites'
import Details from './pages/Details'
function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route 
      path='/'
      element={<Home/>}
      />
      <Route 
      path='/favourites'
      element={<Favourites/>}
      />
      <Route
      path='/recipe-item/:id'
      element={<Details/>}
      />
    </Routes>
    </>
  )
}

export default App
