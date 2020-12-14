const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


//GET BACK ALL THE POSTS
//http://localhost:3000/posts/
router.get('/', async (req, res) => {
    try{
      const posts = await Post.find();
      res.json(posts);

    }catch(err){
      res.json({message:err});
    }
} );

// //http://localhost:3000/posts/specific
// router.get('/specific', (req, res) => {
//     res.send("specific post");
// } );
// SUBMITS A POST
router.post('/', async (req, res) => {
  //console.log(req.body); //data to json - need package body-parser
  const post = new Post({
      title: req.body.title,
      description: req.body.description
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch(err){
    res.json({message: err});
  }
}); 

//GET BACK SPECIFIC POST
router.get('/:postId', (req, res) =>{

});

module.exports = router;