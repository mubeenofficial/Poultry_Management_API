const mongo = require("mongoose")

const ConnUri="mongodb://127.0.0.1:27017/PoultryManagement";

 const ConnectMongo =  ()=>{
 const connect =  mongo.connect(ConnUri).then(
        function(){
            console.log("Connecting to the MongoDB Sucessfully!")
        }
    )
 }


module.exports={
    MongoDB:ConnectMongo
}




