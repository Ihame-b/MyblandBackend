const express = require("express")
const posts = require("../controller/contact")


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
*     contacts:
*       type: object
*       required:
*          -phone
*          -name
*          -email
*          -subject
*          -message
*          -id
*       properties:
*        phone:
*           type: string
*           description: name of owner
*        name:
*           type: string
*           description: Body of contact
*        email:
*           type: string
*           description: name of owner
*        subject:
*           type: string
*           description: Body of contact
*        message:
*           type: string
*           description: Body of contact
*        id:
*           type: string
*           description: Id of the contactId
*  parameters:
*      contactId:
*        name: id
*        in: path
*        description: Id for specified contactId
*        required: true
*        schema:
*           type: string
*/

/**
* @swagger
* tags:
*  name: contacts
*  description: All contacts created
*/

/**
* @swagger
*  /c/contact/:
*   post:
*    summary: creating contacts
*    tags: [contacts]
*    requestBody:
*      required: true
*      content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/contacts'
*   responses:
*      200:
*          description: contacts Created Successfully!
*      400:
*          $ref: '#/components/responses/400'
*/
route.post('/contact/', posts.createContact);

/**
* @swagger
* /c/contact/:
*  get:
*     summary: getting all contacts published
*     tags: [contacts]
*
*     responses:
*       200:
*         description: All contacts is here!
*         content:
*           application/json:
*             schema:
*             type: array
*/
route.get('/contact/', posts.getAll);

/**
* @swagger
* /c/contact/{id}:
*  patch:
*    summary: updating contacts
*    tags: [contacts]
*    parameters:
*        - $ref: '#/components/parameters/contactId'
*    requestBody:
*        required: true
*        content:
*           application/json:
*                 schema:
*                     $ref: '#/components/schemas/contacts'
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
route.put("/contact/:id", posts.updateContact);

/**
* @swagger
*  /c/contact/{id}:
*    delete:
*     summary: Delete one contacts
*     tags: [contacts]
*     parameters:
*         - $ref: '#/components/parameters/contactId'
*     responses:
*        200:
*         description: contacts deleted
*        401:
*         description: Unauthorized
*        404:
*         description: not found
*/
route.delete("/contact/:id", posts.deleteContact);

module.exports = route

