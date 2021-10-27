const express=require('express');
const {getAllExperiences,createExperiences,getSingleExperience,updateExperience,deleteExperiences}=require('../controllers/Experience');
const router=express.Router();

router.route('/').get(getAllExperiences).post(createExperiences);
router.route('/:id').get(getSingleExperience).put(updateExperience).delete(deleteExperiences);
module.exports=router;