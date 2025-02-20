const express=require('express');

const router=express.Router();
const commonController=require('../controller/common.controller')

router.get('/user-suggestion', commonController.userSuggestion);
router.post('/user', commonController.createUser);
router.put('/select-user', commonController.selectUser);



module.exports=router