const app = require('./app');
const mongoose = require("mongoose");

const PORT = process.env.PORT || 9999;

app.listen(PORT, () => {
    console.log('Server is running on: http://localhost:' + PORT)
})

require('dotenv').config();

mongoose
.connect(process.env.MONGO_URI)
.then(() => {
    console.log('Connected to MongoDB')
}).catch((err) => {
    console.log('Connecting to MongoDB failed', err.message)
})




