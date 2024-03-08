const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 9999;

app.listen(PORT, () => {
    console.log('Server is running on: http://localhost' + PORT)
})

