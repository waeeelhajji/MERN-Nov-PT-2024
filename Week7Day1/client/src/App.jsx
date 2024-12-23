
import { Routes, Route, Link } from "react-router-dom"

import './App.css'
import Home from "./Views/Home"
import OneCake from "./Views/OneCake"
import Form from "./Views/Form"
import Update from "./Views/Update"

function App() {


  return (
    <>
      <h1> the Cake is here 🎂</h1>
      <Link to="/">Home</Link> -----------
      <Link to="/add/cake">Add new Cake</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add/cake" element={<Form />} />
        <Route path="/cake/:id" element={<OneCake />} />
        <Route path="update/:id" element={<Update />} />

      </Routes>


    </>
  )
}

export default App
