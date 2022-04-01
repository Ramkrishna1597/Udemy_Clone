const mongoose=require("mongoose");
module.exports=()=>{

     return mongoose.connect("mongodb+srv://Udemy:Udemy1234@cluster0.nrdxh.mongodb.net/Udemy?retryWrites=true&w=majority")
}



