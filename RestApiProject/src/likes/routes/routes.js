const express = require("express")
const posts = require("../controller/post")


const route = express.Router()

/**
* @swagger
* components:
*  responses:
*           200:
*              description: Success
*           400:
*              description: Bad request
*           401:
*              description: Authorization
*           404:
*              description: Not found
*           500:
*              description: Unexpected error.
*  schemas:
*     blogs:
*       type: object
*       required:
*          -image
*          -title
*          -description1
*          -description2 
*          -id
*       properties:
*        image:
*           type: string
*           description: image link
*        title:
*           type: string
*           description: title of blog
*        description1:
*           type: string
*           description: Body of blog
*        description2:
*           type: string
*           description: descriptions
*        id:
*           type: string
*           description: Id of the blog
*  parameters:
*      blogId:
*        name: id
*        in: path
*        description: Id for specified blogId
*        required: true
*        schema:
*           type: string
*/

/**
* @swagger
* tags:
*  name: blogs
*  description: All Blogs created
*/


/**
* @swagger
*  /b/blog:
*   post:
*    summary: creating blog
*    tags: [blogs]
*    requestBody:
*      required: true
*      content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/blogs'
*   responses:
*      200:
*          description: Blogs Created Successfully!
*      400:
*          $ref: '#/components/responses/400'
*/
route.post('/blog/', posts.createPost);

/**
* @swagger
* /b/blog/:
*  get:
*     summary: getting all blogs published
*     tags: [blogs]
*
*     responses:
*       200:
*         description: All blogs is here!
*         content:
*           application/json:
*             schema:
*             type: array
*/
route.get('/blog/', posts.getAll);

/**
* @swagger
* /b/blog/{id}:
*  patch:
*    summary: updating blogs
*    tags: [blogs]
*    parameters:
*        - $ref: '#/components/parameters/blogId'
*    requestBody:
*        required: true
*        content:
*           application/json:
*                 schema:
*                     $ref: '#/components/schemas/blogs'
*    responses:
*         200:
*             description: Success update
*         400:
*             $ref: '#/components/responses/400'
*         401:
*             $ref: '#/components/responses/401'
*         404:
*            description: not found
*/
route.put("/blog/:id", posts.updatePost);

/**
* @swagger
*  /b/blogs/{id}:
*    delete:
*     summary: Delete one blog
*     tags: [blogs]
*     parameters:
*         - $ref: '#/components/parameters/blogId'
*     responses:
*        200:
*         description: Blog deleted
*        401:
*         description: Unauthorized
*        404:
*         description: not found
*/
route.delete("/blog/:id", posts.deletePost);

module.exports = route

