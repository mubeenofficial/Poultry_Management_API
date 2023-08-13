const {validationResult} = require('express-validator');

const mymiddle =(req, res, next)=>{
    var error = validationResult(req);
    if(!error.isEmpty()){
        return res.json({message:error.array()})
    }
    next();
}

module.exports={
    middle : mymiddle
}