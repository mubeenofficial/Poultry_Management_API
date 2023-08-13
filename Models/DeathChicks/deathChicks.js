const { default: mongoose } = require('mongoose');
const mongo = require('mongoose')

const deathChicks = mongo.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'UserSignup'
    },
    quantity:{
        type:Number,
        required:true
    },
    gender:{
        male:{
            type:Boolean,
            default:false
        },
        female:{
            type:Boolean,
            default:false
        }
    },
    Inserted_At:{
        type:Date,
        default:Date.now
    }
});

module.exports=mongo.model("deathChicks",deathChicks)