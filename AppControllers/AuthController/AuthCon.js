const SignupModel = require('../../Models/AuthModels/AuthModel')
const {body} = require('express-validator')
const jwt = require('jsonwebtoken')
const passwordCrypt = require('bcrypt')

const secrit_key = "mubeen@flutterdeveloper"


const validateScheme = [
    body('email').isEmail().withMessage("Enter a valid Email"),
    body('password').isLength({min:6}).withMessage("Enter minimum 6 digits of password"),
];

const SignUP = async (req,res)=> {
        var data = req.body;
        if(data.password!=data.confimpassword){
            return res.json({message:"Confirm password not matched!"})
        }
        // creating the hashing password. 
        const Hashingpassword = await passwordCrypt.hash(data.password,3)
        data.password=Hashingpassword
        const existinguser = await SignupModel.findOne({email:data.email});
        if(existinguser){
            return res.json({message:"Email Already in use.Try different"})
        }
        //var authtoken =jwt.sign()
    var dataSave=SignupModel(data);
    let pyload={
        id:dataSave.id
    };
    let authToken = jwt.sign(pyload,secrit_key)
    console.log("id",dataSave.id)
    dataSave.save().then(()=>res.json({authToken})).catch((error)=>{
        return res.send(error)
    });

}

// login...
const Login = async (req, res)=>{
    var data = req.body;
    try{
    const userfinding = await SignupModel.findOne({email:data.email});
    //console.log("userfinding",userfinding.id)
    if(!userfinding){
       return res.json({error:"please enter a valid carendital"})
    }
    const comparingPssword = await passwordCrypt.compare(data.password,userfinding.password);
    if(!comparingPssword){
        return res.json({error:"please enter a valid carendital"})
    }
    let playload={
        id:userfinding.id
    };
    const authtoken = jwt.sign(playload,secrit_key)
        return res.json({authtoken})
    }
    catch(err){
        return res.json({message:err.message})
    }
    
}

// user getting by document id 
const fetchuser = async (req, res)=>{
    try{
        console.log("req id",req)
        const fatchuserdetails = await SignupModel.findById(req.user)
        return res.json({fatchuserdetails})
    }catch(err){
            res.json({message:"Hello"})
    }
}

// this is the great
module.exports={
    ValidateSchema : validateScheme,
    signup : SignUP,
    login : Login,
    fetchuserDetail:fetchuser
}

