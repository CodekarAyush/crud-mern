const express = require('express')
const {getTodoRoute, todoPost} = require('../controller/todo')
const router = express.Router()

router.post('/post-todo',todoPost)
router.get('/get-todo',getTodoRoute)
module.exports = router