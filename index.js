const express=require("express");
const app=express();
const path=require("path")
const dotenv=require("dotenv")
const ejs=require("ejs");
const staticRoute=require("./routes/staticRoute")
const userRoute=require("./routes/userRoutes")
const {conectDB}=require("./config/db")
const session = require('express-session');



//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true
}));

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));


//load env file
dotenv.config();

//database connection
conectDB();


//routes
app.use("/",staticRoute);
app.use("/user",userRoute);
// app.use("/user/second-form",userRoute)




app.listen(3000,()=>{
    console.log(`server started at ${process.env.PORT}`);
    
})



