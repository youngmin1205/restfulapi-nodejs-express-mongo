// import
const express = require('express');
//execute
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

//middlewares - function executes when routers being hit
// app.use('/', () => {
//     console.log('this is middleware running');
// })

//routes
app.get('/', (req, res) => {
    res.send('We are on home')
})

//connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log('connected to DB!'));
//how do we start listening to the server
app.listen(3000);
 