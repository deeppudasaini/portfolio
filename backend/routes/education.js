const express=require('express');
const {getAllEducations,createEducations,getSingleEducation,updateEducation,deleteEducations}=require('../controllers/Education');
const router=express.Router();

router.route('/').get(getAllEducations).post(createEducations);
router.route('/:id').get(getSingleEducation).put(updateEducation).delete(deleteEducations);
module.exports=router;