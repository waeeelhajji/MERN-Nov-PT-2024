import { connect } from "mongoose"


const MONGO_URI = "mongodb+srv://root:root@merncluster0.hgbw0.mongodb.net/?retryWrites=true&w=majority&appName=MERNCluster0"
const dbName = "Cake"

async function dbConnect() {
    try {
        await connect(MONGO_URI, {
            dbName,
        })
        console.log(`📡📡📡You successfully connected to ${dbName} DB!`)
    } catch (error) {
        console.log(error)
        throw error
    }

}

export default dbConnect