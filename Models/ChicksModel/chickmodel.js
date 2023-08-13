const { checkSchema } = require('express-validator');
const { default: mongoose } = require('mongoose');
const uuid = require('uuid');
const mongo = require('mongoose')

const ChickScheme = mongo.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'UserSignup'
    },
    totalChicks:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    purpose:{
        eggs:{
            type:Boolean,
            default:false
        },
        Selling:{
            type:Boolean,default:false
        }
    },

    shortnote:{
        type:String
    },
    InseratedData:{
        type:Date,
        //default:Date.now
    }

});

ChickScheme.pre('save',function(next){
    this.InseratedData = new Date();
    this.id=uuid.v1();
    next();
})
ChickScheme.pre('findOneAndUpdate',function(next){
    const update = this.getUpdate();
    delete update.ObjectId,
    next();
})
// this is the great Schema...
module.exports=mongo.model("AddingChick",ChickScheme)