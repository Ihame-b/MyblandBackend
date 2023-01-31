const express = require("express")
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')
const routesblogs = require("./src/blogs/routes/routes")
const routesusers = require("./src/user/routes/routes")
const routescomments = require("./src/comments/routes/comment")
// const routes =require("./src/routes")
const mongose = require("mongoose")

const app =express()
app.use(express.json());

const options ={
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: "IHAME BUSINESS API",
            version: "1.0.0",
        }
    }
}
const spaces = swaggerJsDoc(options)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(spaces))

app.use("/b", routesblogs)
app.use("/u", routesusers)
app.use("/c", routescomments)

mongose.connect("mongodb+srv://Gilbert:g7E8YNV7vNfQ-6L@atlascluster.ll9z7ue.mongodb.net/?retryWrites=true&w=majority", ()=> console.log("connected mongodb"))

const port = 4000
app.listen(port, () => console.log(`Server started on port ${port}`))

