const Experience=require('../models/Experience');
const getAllExperiences=async (req,res)=>{
    const experiences=await Experience.find().then(experiences=>{
        res.json(experiences);
    }).catch(err=>{
        res.status(500).json(err);
    });
    
}
const createExperiences=async (req,res)=>{
    
    const experience=await Experience.create(req.body).catch(err=>{
        res.status(500).json(err);
    });
    res.status(201).json({experience});
}
const getSingleExperience=async (req,res)=>{
    const experience=await Experience.findById(req.params.experienceId).then(experience=>{
        res.json(experience);
    }).catch(err=>{
        res.status(500).json(err);
    })
 
}
const updateExperience=async (req,res)=>{
    const experience=await Experience.findByIdAndUpdate(req.params.experienceId,req.body,{new:true}).then(experience=>{
        res.json(experience);
    }).catch(err=>{ 
        res.status(500).json(err);
    })
}   
const deleteExperiences=async (req,res)=>{
    const experience= await Experience.findByIdAndDelete(req.params.experienceId).then(experience=>{
        res.json(experience);
    }).catch(err=>{
        res.json(err);
    })
}
module.exports={
    getAllExperiences,
    createExperiences,
    getSingleExperience,
    updateExperience,
    deleteExperiences
}