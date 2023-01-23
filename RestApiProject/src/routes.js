const express = require("express")
const posts = require("./controller/post")


const route = express.Router()

route.get('/', posts.getAll);

route.post('/', posts.createPost);

module.exports = route

