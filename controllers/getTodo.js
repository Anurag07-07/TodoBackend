// import model
const Todo = require('../models/Todo');

//define route handler
exports.getTodo = async (req,res)=>{
  try {
    //fetch all todo from Database
    const todos = await Todo.find({});

    //response
    res.status(200)
    .json({
      success:true,
      data:todos,
      message:"Todos fetched successfully"
    })
  } catch (err) {
    console.error(err);
    console.log(err);
    
    res.status(500)
    .json({
      success:false,
      data:"Internal Server Error",
      message:err.message,
    })
  }
}

exports.getTodoById = async(req,res)=>{

  try {
    //extract todo items basis of Id
    const id = req.params.id;
    const todo = await Todo.findById({_id:id})

    //data for given id not found
    if(!todo){
      return res.status(404).json({
        success:false,
        message:"No Data Found with given ID",
      })
    }

    //data for given id Found
    res.status(200).json({
      success:true,
      data:todo,
      message:`Todo ${id} data Successfully Fetched`,
    })
    
  } catch (err) {
    
    console.error(err);
    console.log(err);
    
    res.status(500)
    .json({
      success:false,
      data:"Internal Server Error",
      message:err.message,
    });
  }

}
