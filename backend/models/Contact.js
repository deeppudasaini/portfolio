const mongoose=require('mongoose');
const ContactSchema=new mongoose.Schema(
    {
        fullName:{
            type:String,
            required:[true,'Full Name is required'],
            maxlength:[60,'Full Name must be less than 50 characters']
        },
        email:{
            type:String,
            required:[true,'Email is required'],
            maxlength:[60,'Email must be less than 50 characters']

        },
        message:{
            type:String,
            required:[true,'Message is required'],
            maxlength:[500,'Message must be less than 500 characters']
        }
        ,
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
module.exports=mongoose.model('Contacts',ContactSchema);