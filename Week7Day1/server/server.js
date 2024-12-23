import express from 'express';
import dbConnect from './config/mongo.config.js';
import routers from './routes/cake.routes.js';
import cors from "cors"
const app = express();

const PORT = process.env.PORT
//---MiDDLEWARE 
app.use(express.json(), cors())

app.use("/api", routers)


dbConnect()




app.listen(PORT, () =>
    console.log(`>>>>> Listening on port: ${PORT}`)
);