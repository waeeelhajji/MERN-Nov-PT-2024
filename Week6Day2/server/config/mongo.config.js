import { connect } from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const MongoURI = process.env.MONGO_URI
const DBName = process.env.dbName


async function dbConnect() {
    try {
        await connect(MongoURI, {
            DBName,
        })
        console.log(`📡📡📡You successfully connected to ${DBName} DB!`)
    } catch (error) {
        console.log(error)
        throw error
    }

}

export default dbConnect