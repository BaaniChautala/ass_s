const express = require('express')
const router = express.Router()

// Controllers
const usersController = require('../controller/user.controller')

// Get All users
router.get('/users', usersController.getAllUsers)

// Get user
router.get('/users/:userid', usersController.getUser)

// Create new user
router.post('/users', usersController.createUsers)

// update user
router.patch('/users/:id', usersController.updateUsers)

// delete user
router.delete('/users/:id', usersController.deleteUsers)

module.exports = router