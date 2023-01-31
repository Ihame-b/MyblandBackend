// const post = require("../schema/post");
const posts = require("../schema/comment")


const getAll = async (req, res) => {
    try {
      const allComment = await posts.find();
      res.status(200).json({
        message: "Comment found successfully",
        data: allComment,
        count: allComment.length,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

 const createComment = async (req, res) =>{

    try {
    const {name, message} = req.body;
    const newcomment = new posts({name, message})
    const createdComment = await newcomment.save()
    res
    .status(201)
    .json({
        message: "Comment created successfully", 
        data: createdComment
    })

} catch (error) {
    console.log(error)
}
};

const updateComment = async (req, res) => {
    try {
      // Getting the post from db
      const com = await posts.findById(req.params.id);
  
      // Returning 404 if the post was not found
      if (!com) res.status(404).json({ error: "No post found" });
  
      // Editing provided fields
      const editedComment = await com.set({ ...req.body });
  
      // Saving the updated post
      const result = await editedComment.save();
  
      // Retuning the response
      res.status(200).json({ message: "Comment edited successfully", data: result });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const deleteComment = async (req, res) => {
    try {
      // Getting the post from db
      const com = await posts.findById(req.params.id);
  
      // Returning 404 if the post was not found
      if (!com) res.status(404).json({ error: "No comment found" });
  
      // Deleting the post
      await com.remove();
      res.status(200).json({ message: "Comment deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

module.exports = {getAll, createComment,updateComment,deleteComment}