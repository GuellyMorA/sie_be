import express from "express"
import cors from "cors"


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
let corsOptions = {
    origin : ['http://localhost:8080'],
    credentials: true
 }
   
 app.use(cors(corsOptions))


export default app