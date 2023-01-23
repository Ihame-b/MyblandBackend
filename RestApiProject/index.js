const express = require("express")
const routes = require("./src/routes")
// const routes =require("./src/routes")
const mongose = require("mongoose")

const app =express()

app.use(express.json());
app.use("/posts", routes)

app.get("/", (req,res) =>{
    res.json({"message": "welcome to my APIS"})
})


mongose.connect("mongodb+srv://janvier:testing123@cluster0.pnymtzl.mongodb.net/?retryWrites=true&w=majority ", ()=> console.log("connected mongodb"))

const port = 9000
app.listen(port, () => console.log(`Server started on port ${port}`))

