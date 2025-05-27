const {Schema,model}=require("mongoose");
const mongoose=require("mongoose")
const dotenv=require("dotenv");




//load env files
dotenv.config();

const studentSchema= new Schema({
    fname:{
        type:String,
        required:true,
    },
    mname:{
        type:String,
    },
    lname:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },password:{
        type:String,
        required:true,

    },dob:{
        type:Date,
        required:true,
    },gender:{
        type:String,
    },

},{timestamp:true});

const studentSchema2= new Schema({
    email:{
        type:String,
        // required:true,
        unique:true,
    },
    collage:{
        type:String,
        required:true,

    },course:{
        type:String,
    },current_year:{ 
        type:Number,
    },Specilization:{
        type:String,
    },
    img_path:{
        type:String,
    },
},{timestamps:true})

const STUDENTS=mongoose.model("STUDENTS",studentSchema);
const STUDENT2=mongoose.model("STUDENT2",studentSchema2)

module.exports={
    STUDENTS,
    STUDENT2,};
