const Introduction=require('../models/Introduction');
const getAllIntroductions=async (req,res)=>{
    const introductions=await Introduction.find().then(introductions=>{
        res.json(introductions);
    }).catch(err=>{
        res.status(500).json(err);
    });
    
}
const createIntroductions=async (req,res)=>{
    
    const introduction=await Introduction.create(req.body).catch(err=>{
        res.status(500).json(err);
    });
    res.status(201).json({introduction});
}
const getSingleIntroduction=async (req,res)=>{
    const introduction=await Introduction.findById(req.params.introductionId).then(introduction=>{
        res.json(introduction);
    }).catch(err=>{
        res.status(500).json(err);
    })
 
}
const updateIntroduction=async (req,res)=>{
    const introduction=await Introduction.findByIdAndUpdate(req.params.introductionId,req.body,{new:true}).then(introduction=>{
        res.json(introduction);
    }).catch(err=>{ 
        res.status(500).json(err);
    })
}   
const deleteIntroductions=async (req,res)=>{
    const introduction= await Introduction.findByIdAndDelete(req.params.introductionId).then(introduction=>{
        res.json(introduction);
    }).catch(err=>{
        res.json(err);
    })
}
module.exports={
    getAllIntroductions,
    createIntroductions,
    getSingleIntroduction,
    updateIntroduction,
    deleteIntroductions
}