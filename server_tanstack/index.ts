import express from "express"
import mongoose from "mongoose"
import cors from "cors"


import postShema from "./Model"
const Port: number = 3456;

const url: string = "mongodb://127.0.0.1:27017/tanQueryDB";

const app = express()
app.use(cors())
app.use(express.json());

mongoose.connect(url).then(()=>{
    console.log("database is connected")
})

app.listen(Port , ()=>{
    console.log(`listening on ${Port}`)
})
