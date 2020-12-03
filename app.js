// import
const express = require('express');
//execute
const app = express();

//middlewares - function executes when routers being hit
// app.use('/', () => {
//     console.log('this is middleware running');
// })

//routes
app.get('/', (req, res) => {
    res.send('We are on home')
})
//how do we start listening to the server
app.listen(3000);
