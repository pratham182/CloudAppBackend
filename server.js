// const app = require('./app');

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });
require('dotenv').config();
const connectDB = require("./config/db");
const app = require('./app'); // Import the Express app

const PORT = process.env.PORT || 5000;
connectDB().then(()=>{
console.log("DB connected")
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
  
}).catch(err=>console.log(err))