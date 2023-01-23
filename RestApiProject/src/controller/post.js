// const post = require("../schema/post");
const posts = require("../schema/post")


const getAll = async (res,req) =>{
console.log("api of ihame")
try {
    const allPost = await posts.find();

    res.status(200)
    .json({
        message: "message successfully", 
        data: allPost, 
        count: allPost.length
    });  
} catch (error) {
    console.log(error)
}

}

 const createPost = async (req, res) =>{
    const {title, description} = req.body;
    const newPost = new posts({title, description})
    const createdPost = await newPost.save()
    res
    .status(201)
    .json({
        message: "Post created successfully", 
        data: createdPost
    })
}

module.exports = {getAll, createPost}