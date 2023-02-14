const express = require("express")
const swaggerUI = require("swagger-ui-express")
const swaggerJSDoc = require("swagger-jsdoc")
const routesblogs = require("./src/blogs/routes/routes")
const routesusers = require("./src/user/routes/routes")
const routescomments = require("./src/comments/routes/comment")
const routescontacts = require("./src/contact/routes/routes")
const mongose = require("mongoose")

const app =express()
app.use(express.json());


const swaggerOptions = {  
    swaggerDefinition: {
        openapi : '3.0.0',
        info : {
            title: 'IHAME Apis documentation',
            version: '1.0.0',
            description: 'Blog,contact,authentication and comment APIs',
            contact:{
                name :"IHAME"
            },
        },
        servers:[ 
            { 
                url:'http://localhost:4000'
            } 
        ],
       
    },
    apis: ['./src/blogs/routes/*.js', './src/comments/routes/*.js', './src/contact/routes/*.js', './src/user/routes/*.js'],
}

const swaggerDocs = swaggerJSDoc(swaggerOptions)

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(spaces))

app.use("/b", routesblogs)
app.use("/u", routesusers)
app.use("/c", routescomments)
app.use("/c", routescontacts)

mongose.connect("mongodb+srv://Gilbert:g7E8YNV7vNfQ-6L@atlascluster.ll9z7ue.mongodb.net/?retryWrites=true&w=majority", ()=> console.log("connected mongodb"))
// mongodb+srv://atlascluster.ll9z7ue.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority
// /**
//  *  @swagger
//  * /:
//  *  get:
//  *      summary: get api
//  *      description: used to check get method
//  *      responses:
//  *          200:
//  *              description: to Test Get method
//  * /
//  */
// app.get('/', (req, res) =>{
//     res.send('Welcome to my API')
// })

const port = 4000
app.listen(port, () => console.log(`Server started on port ${port}`))

// app.use("./api/user", require("./src/blogs/routes/routes"))