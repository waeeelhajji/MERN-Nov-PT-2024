
import './App.css'
import Home from './Views/Home'
import Cool from './Views/Cool'
import Hero from './Views/Hero'
import { Route, Routes, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import ErrorView from './Views/ErrorView'


function App() {


  return (
    <fieldset>
      <h3>Routing</h3>
      {/* Theater stage */}
      {/* <a href="/home">Home 🛖</a> */}
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path='/cool' element={<Cool />} />
        <Route path="/hero/:id" element={<Hero />} />
        <Route path="/error" element={<ErrorView />} />
        <Route path="*" element={<ErrorView />} />
      </Routes>
      {/* <Home /> */}
      {/* <Cool />
      <Hero /> */}
    </fieldset>
  )
}

export default App
