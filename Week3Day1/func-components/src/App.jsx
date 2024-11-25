import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ninja from './components/Ninja'

function App() {
  const x = 3;
  const message = "hello";
  const animals = ['🦁', '🦒', '🦓', '🐊'];

  const person = {
    name: "Bob",
    favFood: "🍝",
    age: 45
  };

  return (
    <>
      <fieldset>
        <legend>App.js</legend>
        <Ninja data={animals} anotherProps={message} />

      </fieldset>
    </>

  )
}

export default App
