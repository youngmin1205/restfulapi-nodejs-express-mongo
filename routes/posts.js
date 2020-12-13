const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//http://localhost:3000/posts/
router.get('/', (req, res) => {
    res.send("we are on posts");
} );

// //http://localhost:3000/posts/specific
// router.get('/specific', (req, res) => {
//     res.send("specific post");
// } );

router.post('/', (req, res) => {
  console.log(req.body); //data to json - need package body-parser
  const post = new Post({
      title: req.body.title,
      description: req.body.description
  });

  post.save()

});


module.exports = router;