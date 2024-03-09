const router = require('express').Router()
const { sendMessage } = require('../models/messageModel')

router.post('/', sendMessage);

module.exports = router;