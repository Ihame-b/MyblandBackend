const express = require("express")
const posts = require("../controller/post")


const route = express.Router()

route.get('/', posts.getAll);
route.post('/', posts.createUser);
route.put("/:id", posts.updateUser);
route.delete("/:id", posts.deleteUser);
// route.get("/:id", posts.getUser);

module.exports = route

