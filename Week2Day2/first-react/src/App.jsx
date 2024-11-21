import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AnotherComponents from './components/AnotherComponents'

function App() {
  const x = 3
  const message = "hello"
  const animals = ['🦁', '🦒', '🦓', '🐊'];

  const person = {
    name: "Bob",
    favFood: "🍝",
    age: 45
  }


  return (
    <fieldset>
      <legend>App.jsx</legend>
      <AnotherComponents />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Welcome To React</h1>
      {x} <br />
      {message} <br />
      {JSON.stringify(animals)}<br />
      {JSON.stringify(person)}
      {person.favFood}

      <h2>Hi again MERN stack Ninjas</h2>

    </fieldset>
  )
}

export default App
