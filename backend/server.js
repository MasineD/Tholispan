import express from 'express'
import dotenv from 'dotenv'

dotenv.config()     //Load environment variables into process.env 
const app = express()       //Creating an express server

app.get('/', (req,res) => {
    res.send("Server is running")
})

const Port = process.env.PORT || '5000'

app.listen(Port, ()=>{
    console.log(`Server is running on port: ${Port}`)
})