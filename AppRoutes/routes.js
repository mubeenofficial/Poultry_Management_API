const routes = require('express').Router()
const {signup,ValidateSchema,login,fetchuserDetail} = require("../AppControllers/AuthController/AuthCon")
const {middle} = require('../MiddleWears/ValidateResult')
const {fetchuser} = require('../MiddleWears/JwtVerify')
const {feedModel} = require('../AppControllers/Feeds/feedCon')
const {ChisksModel,ChicksValidate} = require('../AppControllers/AddChicksController/chickscon')
const {vaccinationDetails,vacciantionValidate} = require('../AppControllers/VaccinationConntroller/vaccinationcon')
const {DeathChicks,deathValidateSchema} = require("../AppControllers/DeathChicksController/deathchicksconn")

//Signup Route
routes.post("/signup",ValidateSchema,middle,signup);

//Loging Route
routes.post("/login",ValidateSchema,middle,login)

// Fetchuser Route 
routes.post('/fetchUser',fetchuser,fetchuserDetail)


// Feed Route
routes.post('/feed',fetchuser,feedModel);

// Adding Chicks
routes.post('/AddChicks',ChicksValidate,middle,fetchuser,ChisksModel)

// vaccinatin Details..

routes.post('/Vaccination',vacciantionValidate,middle,fetchuser,vaccinationDetails)

 //death checks Routes..
routes.post('/DeathChicks',deathValidateSchema,middle,fetchuser,DeathChicks)

//routes.get('/fetchfeed',fetchuser,fetchFeed)
module.exports={
    route :routes
}