import React, { useState } from 'react'
import Wepons from './Wepons'

const Ninja = (props) => {
    console.log("props", props)
    const NewData = "Hello from Ninja Comp"

    //? CREATE STATE FOR THIS COMPONENT
    //!      State 
    //!       !  Change state
    //!      V      V            default state
    const [data, setData] = useState("")
    const [animals, setAnimals] = useState(['🦁', '🦒', '🦓', '🐊'])
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const HandlerSubmit = (e) => {
        e.preventDefault()
        console.log(data)
        setAnimals([...animals, data])
        setData("")
        setHasBeenSubmitted(true);
    }
    const formMessage = () => {
        if (hasBeenSubmitted == true) {
            return "Thank you for submitting the form!";
        } else {
            return "Welcome, please submit the form";
        }
    };


    return (
        <fieldset>
            <legend>Ninja.jsx</legend>
            <h3>{formMessage()}</h3>
            State: {data}
            <p>{JSON.stringify(animals)}</p>
            <p>{props.anotherProps}</p>
            <Wepons d={NewData} />
            <form onSubmit={HandlerSubmit}>
                <input value={data} type="text" onChange={e => setData(e.target.value)} />
                <button>Submit</button>
            </form>
            <h4>map</h4>
            {
                animals.map((oneAnimal) => {
                    return <li>{oneAnimal}</li>
                })
            }
            <h4>filter</h4>
            {
                animals.filter((oneAnimal) => {
                    return oneAnimal.length > 2
                })
            }
        </fieldset>
    )
}

export default Ninja