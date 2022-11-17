const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const userRoutes=require("./routes/userRoutes");

// const corsOptions ={
//     origin:'*', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200,
//  }
const app=express();

require('dotenv').config();

app.use(cors());
app.use(express.json());

app.use("/api/auth",userRoutes);



mongoose.connect(process.env.MONGO_URL,{

}).then(()=>{
    console.log("DB Connection Succesfully")
}).catch((err)=>{
    console.log(err.message)
})


const server=app.listen(process.env.PORT,()=>{
     console.log(`Port Started at: ${process.env.PORT}`)
})

// const io = socket(server, {
//     cors: {
//       origin: "http://localhost:3000",
//       credentials: true,
//     },
//   });