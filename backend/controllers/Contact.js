const Contact=require('../models/Contact');
const getAllContacts=async (req,res)=>{
    const contacts=await Contact.find().then(contacts=>{
        res.json(contacts);
    }).catch(err=>{
        res.status(500).json(err);
    });
    
}
const createContacts=async (req,res)=>{
    
    const contact=await Contact.create(req.body).catch(err=>{
        res.status(500).json(err);
    });
    res.status(201).json({contact});
}
const getSingleContact=async (req,res)=>{
    const contact=await Contact.findById(req.params.contactId).then(contact=>{
        res.json(contact);
    }).catch(err=>{
        res.status(500).json(err);
    })
 
}
const updateContact=async (req,res)=>{
    const contact=await Contact.findByIdAndUpdate(req.params.contactId,req.body,{new:true}).then(contact=>{
        res.json(contact);
    }).catch(err=>{ 
        res.status(500).json(err);
    })
}   
const deleteContacts=async (req,res)=>{
    const contact= await Contact.findByIdAndDelete(req.params.contactId).then(contact=>{
        res.json(contact);
    }).catch(err=>{
        res.json(err);
    })
}
module.exports={
    getAllContacts,
    createContacts,
    getSingleContact,
    updateContact,
    deleteContacts
}