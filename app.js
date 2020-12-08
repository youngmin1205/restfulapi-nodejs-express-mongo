// import
const express = require('express');
//execute
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

//import routes
const postsRoute = require('./routes/posts');

//middlewares - function executes when routers being hit
//everytime go to that post, make sure to use this postRoute
//all routes related '/posts' will be in posts.js
app.use('/posts', postsRoute);

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
 