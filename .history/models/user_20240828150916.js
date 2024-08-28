const mongoose=require('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/authtestapp`);

const userSchema=mongoose.Schema({
    username:String,
    email:String,
    password:String,
    age:Number
});

mongoose.exports=mongoose.model("")