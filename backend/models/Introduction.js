const mongoose= require('mongoose');
const IntroductionSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxlength:100

    },  
    image:{
        type:String,
        required:true,
        maxlength:255

    },
    description:{
        type:String,
        required:true,
        maxlength:255
    }
});
module.exports=mongoose.model('Introduction',IntroductionSchema);
