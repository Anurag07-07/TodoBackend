// //Stablished Connection Between App and DataBase
// const mongoose = require('mongoose')

// //this line load each data of env file into the process object
// require('dotenv').config()

// const dbConnect = ()=>{
//   //but how would i feed this database url in this??
//   //for feeding we use .env library
//   mongoose.connect(process.env.DATABASE_URL)
//   .then(()=>{console.log("DB Connection is Successful")})
//   .catch((error)=>{
//     console.log("Issue in DB Connection");
//     console.error(error.message)
//     process.exit(1);
//   })
// }

// module.exports = dbConnect;

const mongoose = require('mongoose')

require('dotenv').config();

const dbConnect = ()=>{
  mongoose.connect(process.env.DATABASE_URL)
  .then(()=>{console.log("Connection Successful");
  })
  .catch((error)=>{
    console.log("Issue in DB Connection");
    console.error(error.messsage);
    process.exit(1);
  });
}

module.exports = dbConnect;