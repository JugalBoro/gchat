const express = require('express');

const router = express.Router();

const authanticateMiddleware = require('../middleware/authenticate')
const messageTabController = require('../controller/message');

//router.get('/join', authanticateMiddleware.authenticateUser,messageTabController.getUser)

router.post('/message', authanticateMiddleware.authenticateUser,messageTabController.postMessage)

router.get('/recieve', authanticateMiddleware.authenticateUser,messageTabController.getMessage)



module.exports = router;