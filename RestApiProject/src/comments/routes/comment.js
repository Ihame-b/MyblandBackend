const express = require("express")
const posts = require("../controller/comment")


const route = express.Router()

/**
* @swagger
* /c/comment/:
*  get:
*     summary: getting all messages published
*     tags: [messages]
*
*     responses:
*       200:
*         description: All messages is here!
*         content:
*           application/json:
*             schema:
*             type: array
*/
route.get('/comment/', posts.getAll);

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
*     messages:
*       type: object
*       required:
*          -name
*          -message
*          -id
*       properties:
*        title:
*           type: string
*           description: name of owner
*        message:
*           type: string
*           description: Body of message
*        id:
*           type: string
*           description: Id of the commentId
*  parameters:
*      commentId:
*        name: id
*        in: path
*        description: Id for specified commentId
*        required: true
*        schema:
*           type: string
*/

/**
* @swagger
* tags:
*  name: messages
*  description: All messages created
*/


/**
* @swagger
*  /c/comment:
*   post:
*    summary: creating messages
*    tags: [messages]
*    requestBody:
*      required: true
*      content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/messages'
*   responses:
*      200:
*          description: messages Created Successfully!
*      400:
*          $ref: '#/components/responses/400'
*/
route.post('/comment/', posts.createComment);

/**
* @swagger
* /c/comment/{id}:
*  patch:
*    summary: updating messages
*    tags: [messages]
*    parameters:
*        - $ref: '#/components/parameters/commentId'
*    requestBody:
*        required: true
*        content:
*           application/json:
*                 schema:
*                     $ref: '#/components/schemas/messages'
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
route.put("/comment/:id", posts.updateComment);

/**
* @swagger
*  /c/comment/{id}:
*    delete:
*     summary: Delete one messages
*     tags: [messages]
*     parameters:
*         - $ref: '#/components/parameters/blogId'
*     responses:
*        200:
*         description: messages deleted
*        401:
*         description: Unauthorized
*        404:
*         description: not found
*/
route.delete("/comment/:id", posts.deleteComment);

module.exports = route

