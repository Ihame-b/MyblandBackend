// const post = require("../schema/post");
const posts = require("../schema/post")


const getAll = async (req, res) => {
    try {
      const allPost = await posts.find();
      res.status(200).json({
        message: "contact found successfully",
        data: allPost,
        count: allPost.length,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };  

 const createContact = async (req, res) =>{

    try {
    const {phone, name, email, subject, message} = req.body;
    const newPost = new posts({phone, name, email, subject, message})
    const createdPost = await newPost.save()
    res
    .status(201)
    .json({
        message: "contact created successfully", 
        data: createdPost
    })

} catch (error) {
    console.log(error)
}
};

const updateContact = async (req, res) => {
    try {
      // Getting the post from db
      const post = await posts.findById(req.params.id);
  
      // Returning 404 if the post was not found
      if (!post) res.status(404).json({ error: "No Contact found" });
  
      // Editing provided fields
      const editedPost = await post.set({ ...req.body });
  
      // Saving the updated post
      const result = await editedPost.save();
  
      // Retuning the response
      res.status(200).json({ message: "Contact edited successfully", data: result });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const deleteContact = async (req, res) => {
    try {
      // Getting the post from db
      const post = await posts.findById(req.params.id);
  
      // Returning 404 if the post was not found
      if (!post) res.status(404).json({ error: "No Contact found" });
  
      // Deleting the post
      await post.remove();
      res.status(200).json({ message: "Contact deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

module.exports = {getAll, createContact,updateContact,deleteContact}