const express = require('express')
const router  = express.Router();
const clientController = require("../../controller/client/index.js")
router.get('/GetUserInfor',clientController.GetUserInfor)
// router.get('/login',clientController.login)





module.exports = router;