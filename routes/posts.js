const express = require('express');

const router = express.Router();

//http://localhost:3000/posts/
router.get('/', (req, res) => {
    res.send("we are on posts");
} );

// //http://localhost:3000/posts/specific
// router.get('/specific', (req, res) => {
//     res.send("specific post");
// } );


module.exports = router;