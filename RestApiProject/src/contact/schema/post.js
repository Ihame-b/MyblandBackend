const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    phone: String,
    name: String,
    email: String,
    subject: String,
    message: String
})

module.exports = mongoose.model("contacts", postSchema)