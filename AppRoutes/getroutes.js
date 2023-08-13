const getRoutes = require('express').Router();
const {fetchFeed} = require('../AppControllers/Feeds/feedCon')
const {fetchuser} = require('../MiddleWears/JwtVerify')
const {GetVaccination} = require('../AppControllers/VaccinationConntroller/vaccinationcon')
const {GetChicks} = require('../AppControllers/AddChicksController/chickscon')

const {GetDeathChicks}  = require('../AppControllers/DeathChicksController/deathchicksconn');
const { get } = require('mongoose');


getRoutes.get('/fetchfeed',fetchuser,fetchFeed)


getRoutes.get('/fetchVaccination',fetchuser,GetVaccination)

getRoutes.get('/fetchChicks',fetchuser,GetChicks)


getRoutes.get('/fetchDeathChicks',fetchuser,GetDeathChicks)

module.exports={
    GetRoutes:getRoutes
}