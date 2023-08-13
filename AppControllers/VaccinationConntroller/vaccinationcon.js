const VaccinationModel = require("../../Models/Vaccination/vaccinationModel")
const {body,validationResult} = require('express-validator')

 const schemaValidation = [
        body('medicineName').isLength({min:3}).withMessage("Enter Medicine please"),
        body('price').isLength({min:1}).withMessage("Enter Price please"),
 ];
 // Save Vaccination Record...
const vaccination = async (req, res)=>{
  //  var data = req.body;
    const {medicineName,price,vaccinatedby}=req.body;
    var datasave = VaccinationModel({
        medicineName,price,vaccinatedby,user:req.user 
    });
    await datasave.save().then(()=>{
        res.json({message:"Data Saved!"})
    }).catch((err)=>{
            res.json({message:err.message})
    })

}

// Get the Vaccination Record...

const getVaccination = async (req, res)=>{
    try{
        const data = await VaccinationModel.find({user:req.user}).sort({"vaccinatedDate":-1})
        return res.json({data})
    }catch(error){
        return res.json({message:error.message})
    }
}

// update Vaccination Data...
const updateVaccination = async (req, res)=>{
    try{
        var id = req.body.getId;
        const data = await VaccinationModel.findOneAndUpdate({_id:id},req.body,{new:true})
        return res.json({message:"Data Updated"})
    }catch(error){
            return res.json({error:error.message})

        }

}

const deleteVaccination = async (req, res)=>{
    try{
        
    var id = req.body.getId;
    if(id==null){
        return res.json({error:"Id is Empty"})
    }
    const data = await VaccinationModel.deleteOne({_id:id})
    return res.json({message:"Data Delete"});
    }catch(exp){
        return res.json({error:exp});
    }

}


module.exports={
    vacciantionValidate : schemaValidation,
    vaccinationDetails :  vaccination,
    GetVaccination :getVaccination,
    UpdateVaccination:updateVaccination,
    DeleteVaccination : deleteVaccination
}