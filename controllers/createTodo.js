// import model
const Todo = require('../models/Todo');

//define route handler
exports.createTodo = async (req,res)=>{
  try {
    //extract the title and des from request ki body
    const {title,description} = req.body;
    //create a new todo OBj and insert in DB
    const response = await Todo.create({title,description});
    //send json response with succes flag
    res.status(200).json({
      success:true,
      data:response,
      message:'Entry Created Successfully'
    } 
    )
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500)
    .json({
      success:false,
      data:"Internal server error",
      message:err.message,
    })  
  }
}