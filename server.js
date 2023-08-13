const express = require('express')
const {MongoDB} = require('./Config/mongodbConfig')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const {route} = require('./AppRoutes/routes')
const {GetRoutes} = require('./AppRoutes/getroutes')
const app = express();
const {UpdateRoutes} = require('./AppRoutes/updateroute')
PORT = 8000;

MongoDB();
// use routes

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))

// include routes of app...
app.use("/app",route)
app.use("/app",GetRoutes)
app.use("/app",UpdateRoutes)

//app.use(expressValidator)
app.get('/',(req,res)=>{
    res.json({message:"Server is Working!"})

})

app.listen(PORT,()=>{
    console.log("Server is running on PORT :",PORT)
})



