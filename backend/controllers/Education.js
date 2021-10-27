const Education=require('../models/Education');
const getAllEducations=async (req,res)=>{
    const educations=await Education.find().then(educations=>{
        res.json(educations);
    }).catch(err=>{
        res.status(500).json(err);
    });
    
}
const createEducations=async (req,res)=>{
    
    const education=await Education.create(req.body).catch(err=>{
        res.status(500).json(err);
    });
    res.status(201).json({education});
}
const getSingleEducation=async (req,res)=>{
    const education=await Education.findById(req.params.educationId).then(education=>{
        res.json(education);
    }).catch(err=>{
        res.status(500).json(err);
    })
 
}
const updateEducation=async (req,res)=>{
    const education=await Education.findByIdAndUpdate(req.params.educationId,req.body,{new:true}).then(education=>{
        res.json(education);
    }).catch(err=>{ 
        res.status(500).json(err);
    })
}   
const deleteEducations=async (req,res)=>{
    const education= await Education.findByIdAndDelete(req.params.educationId).then(education=>{
        res.json(education);
    }).catch(err=>{
        res.json(err);
    })
}
module.exports={
    getAllEducations,
    createEducations,
    getSingleEducation,
    updateEducation,
    deleteEducations
}