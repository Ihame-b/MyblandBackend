const express = require("express")
const routesblogs = require("./src/blogs/routes/routes")
const routesusers = require("./src/user/routes/routes")
// const routes =require("./src/routes")
const mongose = require("mongoose")

const app =express()

app.use(express.json());
app.use("/b", routesblogs)
app.use("/u", routesusers)

mongose.connect("mongodb+srv://Gilbert:g7E8YNV7vNfQ-6L@atlascluster.ll9z7ue.mongodb.net/?retryWrites=true&w=majority", ()=> console.log("connected mongodb"))

const port = 9000
app.listen(port, () => console.log(`Server started on port ${port}`))

