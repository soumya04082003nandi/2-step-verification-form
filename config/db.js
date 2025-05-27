const mongoose=require("mongoose");
const dotenv=require("dotenv");


//load env files
dotenv.config();

const conectDB= async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected successfully");
        
    } catch (error) {
        console.log(error);
          process.exit(1);
    }
}


module.exports={
    conectDB,
}