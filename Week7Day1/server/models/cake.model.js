import { Schema, model } from "mongoose";


const CakeSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Please put the {PATH} of your Cake!"],
            minlenght: [3, "please make  sure the {PATH} is at least 3 char!"],
            maxlenght: [40, "please use in the {PATH} at maximum char is 40"]
        },
        imgUrl: {
            type: String,
            required: [true, "you need Image for your Cake "]
        },
        layers: {
            type: Number,
            default: 2,
            max: [6, "you can,t reach the sky!"]
        },
        hasFrosting: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
)

const Cake = model("Cake", CakeSchema)
export default Cake