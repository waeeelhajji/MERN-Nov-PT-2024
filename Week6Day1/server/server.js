import express from 'express';
import dbConnect from './config/mongo.config.js';
import routers from './routes/cake.routes.js';
const app = express();
const PORT = 5000

//---MiDDLEWARE 
app.use(express.json())

app.use("/api", routers)


dbConnect()




app.listen(PORT, () =>
    console.log(`>>>>> Listening on port: ${PORT}`)
);