const express = require('express');
const router = express.Router();
const {getUsers, createUser,
    updateUser,
    delUser,
    getUser} = require('../controllers/userController')

router.route('/')
    .get(getUsers)
    .post(createUser);

router.route('/:id') // Define a route parameter named 'id'
    .get(getUser)
    .put(updateUser)
    .delete(delUser);

module.exports = router;




/**
 * web application handles different types of HTTP requests (GET, POST, PUT, DELETE, etc.) for different URLs or endpoints. Routes define the paths that users can access on your web server and dictate how your server should respond to these requests.
 * 
 * (line 6-10).get((req, res) => { ... }): This is telling the route that when a GET request is made to the specified URL path, i
 * 
 */