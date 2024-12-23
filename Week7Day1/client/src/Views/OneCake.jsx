import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const OneCake = () => {
    const { id } = useParams()
    const [oneCake, setOneCake] = useState({})
    const nav = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:5000/api/cake/" + id)
            .then(res => {
                console.log(res.data)
                setOneCake(res.data)
            })
            .catch(err => console.log(err))

    }, [])
    return (
        <div>
            OneCake : {id}

            {/* {JSON.stringify(oneCake)} */}
            <ul>
                <li>{oneCake.name}</li>
                <li><img src={oneCake.imgUrl} alt={oneCake.name} height={"300px"} /></li>
                <button onClick={() => { nav("/update/" + oneCake._id) }}>Update</button>
            </ul>

        </div>

    )
}

export default OneCake