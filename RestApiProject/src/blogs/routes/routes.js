const express = require("express")
const posts = require("../controller/post")


const route = express.Router()

route.get('/blog/', posts.getAll);
route.post('/blog/', posts.createPost);
route.put("/blog/:id", posts.updatePost);
route.delete("/blog/:id", posts.deletePost);

module.exports = route

