const express = require('express');
const router =  express.Router();

//import controller
const {createTodo} = require('../controllers/CreateTodo')
const {getTodo,getTodoById} = require('../controllers/getTodo')
const {updateTodo} = require('../controllers/updateTodo');
const {deleteTodo} = require('../controllers/deleteTodo');


//define Api route
router.post("/createTodo",createTodo);
router.get("/getTodos",getTodo);
router.get("/getTodos/:id",getTodoById);
router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodo/:id",deleteTodo);



module.exports = router;
