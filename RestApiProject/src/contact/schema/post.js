const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    phone: String,
    email: String,
    address: String
})

module.exports = mongoose.model("contacts", postSchema)