const router = require('express').Router()
const { createOrder } = require('../models/orderModel')

router.post('/', createOrder);

module.exports = router