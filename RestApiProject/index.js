const express = require("express")

const app =express()

app.get("/", (req,res) =>{
    res.json({"message": "welcome to my APIS"})
})

app.get("/post", (res,req) => {
    req.json({"name": "ihame"})
})

const port = 9000

app.listen(port, () => console.log(`Server started on port ${port}`))