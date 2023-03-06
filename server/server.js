require('dotenv').config()

const express = require('express')
// const bodyParser = require('body-parser')
const userRoute = require('./Routes/userRoute')
const classRoute = require('./Routes/classRoute')
const { default: mongoose } = require('mongoose')

const app = express()

                //midleware//
app.use(express.json())
app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})
                //Route//
app.use('/api/user',userRoute)
app.use('/api/class',classRoute)
            //connect to DB//
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log('connected to db & listening on port', process.env.PORT)
    })
})
.catch((error)=>{
    console.log(error);
})