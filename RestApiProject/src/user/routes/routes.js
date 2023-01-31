const express = require("express")
const posts = require("../controller/UserRegister")


const route = express.Router()

route.get('/user', posts.getAll);
route.post('/user', posts.createUser);
route.put("/user/:id", posts.updateUser);
route.delete("/user/:id", posts.deleteUser);
route.post("/user/login", posts.login);

module.exports = route

