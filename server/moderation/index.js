import express from "express"
import bodyParser from "body-parser"
import axios from "axios"

const app = express()

app.use(bodyParser.json())

app.listen(4003, ()=> {
    console.log("Listening to port 4003")
})