const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    image: String,
    title: String,
    description1: String,
    description2: String
})

module.exports = mongoose.model("blogs", postSchema)