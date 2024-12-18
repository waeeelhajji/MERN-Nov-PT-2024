
import { Routes, Route } from "react-router-dom"

import './App.css'
import Home from "./Views/Home"
import OneCake from "./Views/OneCake"

function App() {


  return (
    <>
      <h1> the Cake is here 🎂</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cake/:id" element={<OneCake />} />

      </Routes>


    </>
  )
}

export default App
