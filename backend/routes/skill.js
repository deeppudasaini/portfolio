const express=require('express');
const {getAllSkills,
    createSkills,
    getSingleSkill,
    updateSkill,
    deleteSkills}=require('../controllers/skill');
const router=express.Router();
router.route('/').get(getAllSkills).post(createSkills);
router.route('/:id').get(getSingleSkill).put(updateSkill).delete(deleteSkills);
module.exports=router;