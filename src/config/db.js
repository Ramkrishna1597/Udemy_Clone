const mongoose=require("mongoose");
module.exports=()=>{
    // return mongoose.connect("mongodb+srv://Udemy:Udemy1234@cluster0.nrdxh.mongodb.net/Udemy?retryWrites=true&w=majority")
    return mongoose.connect("mongodb://Udemy:Udemy1234@cluster0-shard-00-00.nrdxh.mongodb.net:27017,cluster0-shard-00-01.nrdxh.mongodb.net:27017,cluster0-shard-00-02.nrdxh.mongodb.net:27017/Udemy?ssl=true&replicaSet=atlas-4rs271-shard-0&authSource=admin&retryWrites=true&w=majority")
};

