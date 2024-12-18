import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

const Home = () => {
    const [cakes, setCakes] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/api/cake/")
            .then(res => {
                console.log(res.data)
                setCakes(res.data)
            })
            .catch(err => console.log(err))

    }, [])

    return (
        <fieldset>
            <legend>Home.jsx</legend>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>image of the cake</th>
                        <th>Layers of the cake</th>
                        <th>the cake Has Frosting ?</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cakes.map((oneCake) => {
                            return <tr key={oneCake._id}>
                                <td>
                                    <Link to={"/cake/" + oneCake._id}>
                                        {oneCake.name}
                                    </Link>
                                </td>
                                <td>
                                    <img src={oneCake.imgUrl} alt={oneCake.name} height="150px" />
                                </td>
                                <td>
                                    {oneCake.layers}
                                </td>
                                <td>
                                    {oneCake.hasFrosting ? " ✅" : "❌"}
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </fieldset>
    )
}

export default Home