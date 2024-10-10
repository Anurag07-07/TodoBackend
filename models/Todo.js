// const mongoose = require('mongoose')

// const todoSchema = new mongoose.Schema({
//    title:{
//     type:String,
//     required:true,
//     maxLength:50,
//    }, 
//    description:{
//     type:String,
//     required:true,
//     maxLength:50,
//    }, 
// },
// {
//   timestamps:true
// });

// module.exports = mongoose.model('Todo',todoSchema);

// const mongoose = require('mongoose');

// const todoSchema = new mongoose.Schema({
//   title:{
//     type:String,
//     required:true,
//     maxLength:50},
//   description:{
//     type:String,
//     required:true,
//     maxLength:50}
//   },
//   {
//     timestamps:true
//   }
// )

// moduule.exports = mongoose.model('Todo',todoSchema);

// const mongoose = require('mongoose')

// const todSchema = new mongoose.Schema({
//   title:{
//     type:String,
//     required:true,
//     maxLength:50
//   },
//   description:{
//     type:String,
//     required:true,
//     maxLength:50
//   }
// },
// {
//   timestamps:true
// })

// module.exports = mongoose.model('Todo',todSchema);

const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true,
    maxLength:50,
  },
  description:{
    type:String,
    required:true,
    maxLength:50,
  }
},{
  timestamps:true,
})

module.exports = mongoose.model('Todo',todoSchema);