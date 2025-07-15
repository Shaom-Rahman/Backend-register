// ------------------- all import -------------------
const express = require('express')
const cors = require('cors')
const  route  = require('./routes/routes')
const dbConnection = require('./db')
const app = express()
const port = 8000

// ----------------- all middleware -----------------
app.use(express.json())
app.use(cors())
app.use(route)

// ------------------ db connections ----------------

dbConnection()
// ------------------ route part ----------------
app.listen(port ,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log(`app is running at ${port}`)
    }

})
