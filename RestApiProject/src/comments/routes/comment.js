const express = require("express")
const posts = require("../controller/comment")


const route = express.Router()

route.get('/comment/', posts.getAll);
route.post('/comment/', posts.createComment);
route.put("/comment/:id", posts.updateComment);
route.delete("/comment/:id", posts.deleteComment);

module.exports = route

