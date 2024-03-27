const router = require('express').Router()
const { createOrder, getOrders } = require('../models/orderModel')

router.post('/', createOrder);
router.get('/', getOrders);

module.exports = router