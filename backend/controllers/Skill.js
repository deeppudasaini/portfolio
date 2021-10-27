const Skill=require('../models/Skill');
const getAllSkills=async (req,res)=>{
    const skills=await Skill.find().then(skills=>{
        res.json(skills);
    }).catch(err=>{
        res.status(500).json(err);
    });
    
}
const createSkills=async (req,res)=>{
    
    const skill=await Skill.create(req.body).catch(err=>{
        res.status(500).json(err);
    });
    res.status(201).json({skill});
}
const getSingleSkill=async (req,res)=>{
    const skill=await Skill.findById(req.params.skillId).then(skill=>{
        res.json(skill);
    }).catch(err=>{
        res.status(500).json(err);
    })
 
}
const updateSkill=async (req,res)=>{
    const skill=await Skill.findByIdAndUpdate(req.params.skillId,req.body,{new:true}).then(skill=>{
        res.json(skill);
    }).catch(err=>{ 
        res.status(500).json(err);
    })
}   
const deleteSkills=async (req,res)=>{
    const skill= await Skill.findByIdAndDelete(req.params.skillId).then(skill=>{
        res.json(skill);
    }).catch(err=>{
        res.json(err);
    })
}
module.exports={
    getAllSkills,
    createSkills,
    getSingleSkill,
    updateSkill,
    deleteSkills
}