//const { body, validationResult } = require('express-validator');
const feedmodel = require('../../Models/FeedModel/feedModel')

// Insert Record...
const feedData = async (req,res)=>{
        const {feedno,Quantity,Price,ShortNote} = req.body;
    var datasave = feedmodel({
        feedno,Quantity,Price,ShortNote,user:req.user
    });
    await datasave.save().then(()=>{
        res.json({message:"Data Enter SucessFully"})
    }).catch((error)=>{
        res.send({message:error});
    })
}

// get the feed record and login required...
const fetchFeed = async (req, res) => {
    try{
        const data =  await feedmodel.find({user:req.user}).sort({'RegisterDate':-1})
    return res.json({data})
    }catch(error){
        return json({message:error.message})
    }

}
// update the record on feed data...
const updateFeed = async (req, res)=>{
    try{
        var id = req.body.getid;
     const datamub = await feedmodel.findOneAndUpdate({_id:id},req.body,{new:true})
     return res.json({"message": "Data Updated"})

    }catch(error){
        return res.json({message:error.message})

    }
}


const deleteFeed = async (req, res)=>  {
    try{
        var id = req.body.getid;
        if(id==null){
            return res.json({error:"Try Again record Not Delete"});
        }
    const message = await feedmodel.deleteOne({_id:id});    
    return res.json({message:"Data Delete"})
    }catch(exp){
           return res.json({error:exp.message});
    }

}
module.exports={
    feedModel : feedData,
    fetchFeed : fetchFeed,
    DeleteFeed:deleteFeed,
    updateFeed:updateFeed
}
