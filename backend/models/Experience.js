const mongoose=require('mongoose');
const ExperienceSchema=new mongoose.Schema(
    {
        company:{
            type:String,
            required:[true,'Title is required'],
            maxlength:[50,'Title must be less than 50 characters']
        },
        position:{
            type:String,
            required:[true,'Position is required'],
            maxlength:[50,'Position must be less than 50 characters']
        },
        description:{
            type:String,
            required:[true,'Description is required'],
            maxlength:[500,'Description must be less than 500 characters']
        },
           
        startDate:{
            type:Date,
            required:[true,'Start date is required']
        },
        endDate:{
            type:Date,
            required:[true,'Start date is required'],
            default:'Present'
        },
        logoImageLink:{
            type:String,
            required:[true,'Logo image link is required'],
            maxlength:[500,'Logo image link must be less than 500 characters']
        },
        primaryColor:{
            type:String,
            required:[true,'Primary color is required'],
            maxlength:[50,'Primary color must be less than 50 characters']
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
module.exports=mongoose.model('Experiences',ExperienceSchema);