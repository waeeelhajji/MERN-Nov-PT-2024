import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const BaseURL = "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/"

const Hero = () => {
    const [hero, setHero] = useState(null)
    const { id } = useParams()
    const nav = useNavigate()


    useEffect(() => {
        axios.get(BaseURL + id + ".json")
            .then((res) => {
                console.log(res.data)
                setHero(res.data)
            })
            .catch(err => {
                console.log("❌❌❌", err)
                nav("/error")
            })
    }, [])

    // console.log(id)
    return (
        <fieldset>
            <legend>Hero component</legend>
            {/* {JSON.stringify(hero)} */}
            {
                hero ? <>
                    <h2>{hero.name}</h2>
                    <img src={hero.images.sm} alt="" />
                </> : <h3>Loading...</h3>
            }
        </fieldset>
    )
}

export default Hero