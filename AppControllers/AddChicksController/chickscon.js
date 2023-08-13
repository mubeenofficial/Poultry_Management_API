const ChicksModel = require("../../Models/ChicksModel/chickmodel")
const {body} = require('express-validator')
// save the chicks data...

const chickvalidate = [
    body('totalChicks').isLength({min:1}).withMessage("Enter total chicks please"),
    body('age').isLength({min:1}).withMessage("Enter age please"),
];


const chickModel =async (req, res)=>{
    //var data = req.body;
    const {totalChicks, age,purpose,shortnote} = req.body;
    // if(totalChicks.length==0){
    //     return res.json({message:"Enter Chicks"})
    // }
    var datasave = ChicksModel({
        totalChicks,age,purpose,shortnote,user:req.user
    });
     datasave.save().then(()=>{
        res.json({message:"Data Saved Sucessfully"})
    }).catch((error)=>{
        res.json({message:error.message})
    })

}

// get the chicks data ...
const getChicks = async (req, res)=>{
    
    try {
        const data = await ChicksModel.find({user:req.user}).sort({"InseratedData":-1});
        return res.json({data}) 
    } catch (error) {

        return res.json({message:error.message})
        
    }
}
// Updagte Chicks Data ...

const updateChicks = async (req, res)=>{
    try{
        const id = req.body.getid;
        const data = await ChicksModel.findOneAndUpdate({_id:id},req.body,{new:true})
        return res.json({message:'Data Updated'})
    }catch(error){
        return res.json({message:error.message})
    }
}

const deleteChicks = async (req, res)=>{
    try{
        const id = req.body.getid;
        const data = await ChicksModel.deleteOne({_id:id})
        return res.json({message:"Data Delete"})
    }catch(exp){
        return res.json({message:error.message})
    }

}

module.exports ={
    ChisksModel :  chickModel,
    ChicksValidate:chickvalidate,
    GetChicks : getChicks,
    UpdateChicks: updateChicks,
    deletechicks:deleteChicks

}