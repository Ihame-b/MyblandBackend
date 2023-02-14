const express = require("express")
const posts = require("../controller/UserRegister")


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
*     Users:
*       type: object
*       required:
*          -name
*          -email
*          -password
*       properties:
*        name:
*           type: string
*           description: Body of Users
*        email:
*           type: string
*           description: name of owner
*        password:
*           type: string
*           description: Body of Users
*        id:
*           type: string
*           description: Id of the contactId
*  parameters:
*      contactId:
*        name: id
*        in: path
*        description: Id for specified Users
*        required: true
*        schema:
*           type: string
*/

/**
* @swagger
* tags:
*  name: Users
*  description: All User created
*/

/**
* @swagger
*  /u/user/:
*   post:
*    summary: creating Users
*    tags: [Users]
*    requestBody:
*      required: true
*      content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/Users'
*   responses:
*      200:
*          description: User Created Successfully!
*      400:
*          $ref: '#/components/responses/400'
*/
route.post('/user', posts.createUser);

/**
* @swagger
* /u/user/:
*  get:
*     summary: getting all Users published
*     tags: [Users]
*
*     responses:
*       200:
*         description: All Users is here!
*         content:
*           application/json:
*             schema:
*             type: array
*/
route.get('/user', posts.getAll);
route.put("/user/:id", posts.updateUser);
route.delete("/user/:id", posts.deleteUser);

/** 
* @swagger
* /u/user/login:
*    post:
*      summary: Login user
*      tags: [Users]
*      requestBody:
*            required: true
*            content:
*               application/json:
*                   schema:
*                      $ref: '#/components/schemas/Users'
*      responses:
*          200:
*              description: User logged in Successfully!
*          400:
*              $ref: '#/components/responses/400'
*/
route.post("/user/login", posts.login);

module.exports = route

