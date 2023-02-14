// const Like = require('../models/like');

// const addLike = async (req, res) => {

//   try {

//     const like = new Like({
//       user: req.user._id,
//       post: req.params.postId

//     });
//     await like.save();
//     return res.status(201).send({ message: 'Like added successfully' });
//   } catch (error) {
//     return res.status(500).send({ error: error.message });
//   }

// };

// module.exports = {
//   addLike
// };

// const post = require("../schema/post");
const likes = require("../schema/like")


const getAll = async (req, res) => {
    try {
      const allLikes = await likes.find();
      res.status(200).json({
        message: "likes found successfully",
        data: allLikes,
        count: allLikes.length,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };  

 const createLike = async (req, res) =>{

  try {

    const like = new likes({
      user: req.users._id,
      post: req.params.postId

    });
    await like.save();
    return res.status(201).send({ message: 'Like added successfully' });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

  const deleteLike = async (req, res) => {
    try {
      // Getting the post from db
      const like = await likes.findById(req.params.id);
  
      // Returning 404 if the post was not found
      if (!like) res.status(404).json({ error: "No like found" });
  
      // Deleting the post
      await like.remove();
      res.status(200).json({ message: "like deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

module.exports = {getAll, createLike,deleteLike}
