
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  //!               function to change state
  //!      state var      |
  //!         V          V
  const [heroes, setHeroes] = useState([])




  useEffect(() => {
    axios.get("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
      .then((res) => {
        // ! AXIOS wraps the response inside the .data key
        console.log(res.data)
        setHeroes(res.data)
      })
      .catch(err => {
        console.log(err)
      })

  }, [])


  const FetchData = () => {
    fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
      .then((response) => {
        // console.log(response)
        return response.json()
      }).then((JsonRes) => {
        console.log(JsonRes)
        setHeroes(JsonRes)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const AxiosData = () => {
    axios.get("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
      .then((res) => {
        // ! AXIOS wraps the response inside the .data key
        console.log(res.data)
        setHeroes(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }






  return (
    <>
      <h3>SuperHeroes 🦸🦸‍♂️</h3>
      <button onClick={FetchData}>Fetch Heroes</button>
      <button onClick={AxiosData}>Axios Heroes</button>
      <br />
      {/* {JSON.stringify(heroes)} */}

      <table>
        <thead>
          <tr>
            <th>Images</th>
            <th>Name</th>
            <th>full Name</th>
            <th>publisher</th>
          </tr>
        </thead>
        <tbody>
          {
            heroes.map((hero) => {
              return (
                <tr key={hero.id}>
                  <td><img src={hero.images.sm} alt={hero.name} /></td>
                  <td>{hero.name}</td>
                  <td>{hero.biography.fullName ? hero.biography.fullName : "UNKNOWN"}</td>
                  <td>{hero.biography.publisher}</td>

                </tr>
              )
            })
          }
        </tbody>

      </table>

    </>
  )
}

export default App
