const mongoose=require('mongoose');
const EducationSchema=new mongoose.Schema(
    {
        organization:{
            type:String,
            required:[true,'Organization is required'],
            maxlength:[50,'Organization must be less than 50 characters']
        },
        course:{
            type:String,
            required:[true,'Course is required'],
            maxlength:[50,'Position must be less than 50 characters']
        },
        
        logoImageLink:{
            type:String,
            required:[true,'Logo image link is required'],
            maxlength:[500,'Logo image link must be less than 500 characters']
        },
        startDate:{
            type:Date,
            required:[true,'Start date is required']
        },
        endDate:{
            type:Date,
            required:[true,'End date is required'],
            default:'Present'
        },
        
        createdAt:{
            type:Date,
            default:Date.now,
        },
        updatedAt:{
            type:Date,
            default:Date.now,
        }
    }
);
module.exports=mongoose.model('Educations',EducationSchema);