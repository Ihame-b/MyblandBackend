const express = require("express")
const posts = require("../controller/contact")


const route = express.Router()

route.get('/contact/', posts.getAll);
route.post('/contact/', posts.createContact);
route.put("/contact/:id", posts.updateContact);
route.delete("/contact/:id", posts.deleteContact);

module.exports = route

