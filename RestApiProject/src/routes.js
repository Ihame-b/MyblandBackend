const express = require("express")
const posts = require("./controller/post")


const route = express.Router()

route.get('/', posts.getAll);
route.post('/', posts.createPost);
route.put("/:id", posts.updatePost);
route.delete("/:id", posts.deletePost);

module.exports = route

