require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) =>{
    res.send('Hellow Word')
})

app.listen(process.env.PORT,() => {
    console.log("Backend en ejecucion en el puerto", process.env.PORT)
})