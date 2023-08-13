const { default: mongoose } = require('mongoose');
const mongo = require('mongoose')

const MongoSchema = mongo.Schema({
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'UserSignup',
        },
    feedno:{
        type:String,
        required:true
    },
    Quantity:{
        type:Number,
        required:true
    },
    Price:{
        type:Number,
        required:true
    },
    RegisterDate:{
        type:Date
    },
    ShortNote:{
        type:String
    }
});

MongoSchema.pre('save',function(next){
    this.RegisterDate= new Date();
    next();
});

MongoSchema.pre('findOneAndUpdate',function(next){
    const update= this.getUpdate();
    delete update.ObjectId;
    update.RegisterDate = new Date();
    next();
})

//mongo.model('FeedsData',MongoSchema);
module.exports=mongo.model('FeedData',MongoSchema);
