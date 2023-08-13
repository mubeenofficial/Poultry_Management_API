const { default: mongoose } = require('mongoose');
const mongo = require('mongoose');

const vaccinationSchema = mongo.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'UserSignup'

    },
    medicineName:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    vaccinatedby:{
        type:String
    },
    vaccinatedDate:{
        type:Date,
        default:Date.now
    }
});

module.exports=mongo.model("VaccinationDetail",vaccinationSchema)