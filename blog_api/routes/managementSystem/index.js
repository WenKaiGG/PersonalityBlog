const express = require('express')
const router  = express.Router();
const getController = require("../../controller/managementSystem/index")
const addController = require("../../controller/managementSystem/addController")
// 获取 
router.post('/login',getController.login)
router.get('/getinfor',getController.getinfor)
router.post('/getAna',getController.getAna)

// 添加
router.post('/addAna',addController.addAna)
// 修改
router.put('/putAna',addController.putAna)
router.delete('/delAna/:id',addController.delAna)
module.exports= router;