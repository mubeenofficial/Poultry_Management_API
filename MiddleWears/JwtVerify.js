const jwt = require('jsonwebtoken')
const secrit_key = "mubeen@flutterdeveloper"

const fetchuserToken = (req, res, next)=>{
  const token =  req.header('authToken');
  if(!token){
    console.log("Token ",token)
    return res.json({message:"Incorrect Token"})
  }
  try{
    let data = jwt.verify(token,secrit_key)
    req.user=data.id;
   // console.log("hello",req.user) 
    next();
  }catch(err){
    res.json({message:err.message})
  }
}

module.exports = {
    fetchuser:fetchuserToken
}

