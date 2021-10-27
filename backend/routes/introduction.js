const express=require('express');
const {getAllIntroductions,createIntroductions,getSingleIntroduction,updateIntroduction,deleteIntroductions}=require('../controllers/Introduction');
const router=express.Router();

router.route('/').get(getAllIntroductions).post(createIntroductions);
router.route('/:id').get(getSingleIntroduction).put(updateIntroduction).delete(deleteIntroductions);
module.exports=router;