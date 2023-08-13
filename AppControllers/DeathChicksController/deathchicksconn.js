const deathChicksModel = require("../../Models/DeathChicks/deathChicks")
const {body} = require('express-validator')

const validateSchema = [
    body('quantity').isLength({min:1}).withMessage("Enter Quantity Please")
];
// death save.
const deathSave = async (req, res)=>{
    //const data = req.body;
    const {quantity,gender}=req.body;
    const datasave = deathChicksModel({
        quantity,gender,user:req.user
    });
    await datasave.save().then(()=>{
        return res.json({message:"Data Saved!"})
    }).catch((error)=>{
           return res.json({message:error.message})
        });
}

// getting the death chicks
const fetchDeathChicks = async (req, res)=>{
    try {
        const data = await deathChicksModel.find({user:req.user}).sort({"Inserted_At":-1})
    return res.json({data})
    } catch (error) {
        return res.json({message:error.message})
    }
}

// update the death chicks

const updateDeathchicks = async (req, res)=>{
    try {
        var id = req.body.getId;
        if(id==null){
            return res.json({error:"Body is Empty"});
        }
        const data = await deathChicksModel.findOneAndUpdate({_id:id},req.body,{new:true});
    return res.json({'message':"Data Updated"})        
    } catch (error) {
        return res.json({message:error.message})
    }
}

const DeleteDeathChicks = async (req, res)=>{
    try{
        var id = req.body.getId;
        if(id==null){
            return res.json({error:"Body is empty"})
        }
        const data = await deathChicksModel.deleteOne({_id:id});
        return res.json({message:"Data Delete"})

    }catch(exp){
            return res.json({error:exp.message})
    }

}


module.exports={
  deathValidateSchema:validateSchema,
    DeathChicks : deathSave,
    GetDeathChicks:fetchDeathChicks,
    UpdateDeathChicks : updateDeathchicks,
    DeleteDeath:DeleteDeathChicks
}