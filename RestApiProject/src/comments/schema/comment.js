const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    name: String,
    message: String
})

module.exports = mongoose.model("messages", postSchema)