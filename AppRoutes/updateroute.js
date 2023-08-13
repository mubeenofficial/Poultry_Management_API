const updateRoutes = require('express').Router();
const {updateFeed,DeleteFeed} = require('../AppControllers/Feeds/feedCon')
const {fetchuser} = require('../MiddleWears/JwtVerify')
const {UpdateVaccination,DeleteVaccination} = require('../AppControllers/VaccinationConntroller/vaccinationcon')
const {UpdateChicks,deletechicks} = require('../AppControllers/AddChicksController/chickscon')
const {UpdateDeathChicks,DeleteDeath} = require("../AppControllers/DeathChicksController/deathchicksconn")

updateRoutes.patch('/updateFeed',updateFeed)

updateRoutes.patch('/updateVaccination',fetchuser,UpdateVaccination)

updateRoutes.patch('/updateChicks',UpdateChicks)

updateRoutes.patch('/updateDeathChicks',UpdateDeathChicks)

updateRoutes.post('/deleteChicks',deletechicks)

updateRoutes.post('/deleteFeed',DeleteFeed)

updateRoutes.post('/deleteVaccination',DeleteVaccination)

updateRoutes.post("/deleteDeathChicks",DeleteDeath)
module.exports={
    UpdateRoutes:updateRoutes
}
