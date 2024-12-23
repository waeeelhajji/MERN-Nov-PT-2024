import axios from 'axios'
import React, { useState } from 'react'

const Form = () => {

    const [name, setName] = useState("")
    const [imgUrl, setImgUrl] = useState("")
    const [layers, setLayers] = useState(2)
    const [hasFrosting, setHasFrosting] = useState(false)
    const [ErrorHandler, setErrorHandler] = useState({})

    const SubmitHandler = (e) => {
        e.preventDefault()
        const newObj = {
            name: name,
            imgUrl: imgUrl,
            layers: layers,
            hasFrosting
        }
        axios.post("http://localhost:5000/api/cake", newObj)
            .then(res => {
                console.log(("✅✅✅", res.data))
            })
            .catch(err => {
                console.log(err.response.data.errors)
                setErrorHandler(err.response.data.errors)
            })
        setName("")
        setImgUrl("")
        setLayers(2)
        setHasFrosting(false)
    }
    return (
        <div>
            <h3>Create a new Cake</h3>
            name : {JSON.stringify(name)} <br />
            imgUrl : {JSON.stringify(imgUrl)} <br />
            layers : {JSON.stringify(layers)} <br />
            hasFrosting : {JSON.stringify(hasFrosting)} <br />
            <form onSubmit={SubmitHandler}>
                <div>
                    <label > Cake Name :</label> <br />
                    <input value={name} type="text" onChange={e => setName(e.target.value)} />
                    <br />
                    {ErrorHandler.name && <p>{ErrorHandler.name.message}</p>}
                </div>
                <div>
                    <label > Image of cake : </label> <br />
                    <input value={imgUrl} type="text" onChange={e => setImgUrl(e.target.value)} />
                    <br />
                    {ErrorHandler.imgUrl && <p>{ErrorHandler.imgUrl.message}</p>}
                </div>
                <div>
                    <label > How many layers do the cake have ?  </label> <br />
                    <input value={layers} type="number" onChange={e => setLayers(e.target.value)} />
                    {ErrorHandler.layers && <p>{ErrorHandler.layers.message}</p>}
                </div>
                <div>
                    <label > Has Frosting ?  </label> <br />
                    <input checked={hasFrosting} type="checkbox" onChange={e => setHasFrosting(e.target.checked)} />
                </div>
                <button>Add Cake</button>
            </form>
        </div>
    )
}

export default Form