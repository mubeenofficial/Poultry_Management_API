const mongo = require("mongoose");
const { stringify } = require("querystring");

const SignupScheme = mongo.Schema({
        email:{
            type:String,
            required:true,
        },
        password:{
            type:String
        },
        confirmpssword:{
            type:String
        },
        created_at:{
            type:Date
        }
});

SignupScheme.pre('save',function(next){
    this.created_at= new Date();
    next();
});
const SignupDetails  = mongo.model("UserSignup",SignupScheme)

SignupDetails.createIndexes();
module.exports=SignupDetails;