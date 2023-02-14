// const post = require("../schema/post");
const posts = require("../schema/post")


const getAll = async (req, res) => {
    try {
      const allPost = await posts.find();
      res.status(200).json({
        message: "Post found successfully",
        data: allPost,
        count: allPost.length,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

 const createPost = async (req, res) =>{

    try {
    const {image, title, description1, description2} = req.body;
    const newPost = new posts({image, title, description1, description2})
    const createdPost = await newPost.save()
    res
    .status(201)
    .json({
        message: "Post created successfully", 
        data: createdPost
    })

} catch (error) {
    console.log(error)
}
};

const updatePost = async (req, res) => {
    try {
      // Getting the post from db
      const post = await posts.findById(req.params.id);
  
      // Returning 404 if the post was not found
      if (!post) res.status(404).json({ error: "No post found" });
  
      // Editing provided fields
      const editedPost = await post.set({ ...req.body });
  
      // Saving the updated post
      const result = await editedPost.save();
  
      // Retuning the response
      res.status(200).json({ message: "Post edited successfully", data: result });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const deletePost = async (req, res) => {
    try {
      // Getting the post from db
      const post = await posts.findById(req.params.id);
  
      // Returning 404 if the post was not found
      if (!post) res.status(404).json({ error: "No post found" });
  
      // Deleting the post
      await post.remove();
      res.status(200).json({ message: "Post deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

module.exports = {getAll, createPost,updatePost,deletePost}