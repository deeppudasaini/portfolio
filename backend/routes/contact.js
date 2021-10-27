const express=require('express');
const {getAllContacts,createContacts,getSingleContact,updateContact,deleteContacts}=require('../controllers/Contact');
const router=express.Router();

router.route('/').get(getAllContacts).post(createContacts);
router.route('/:id').get(getSingleContact).put(updateContact).delete(deleteContacts);
module.exports=router;