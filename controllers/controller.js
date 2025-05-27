const { create } = require("../../URL_SHORTNER/models/urlModel");
const {STUDENTS,STUDENT2} = require("../models/studentModel");
const session=require("express-session")


const handleStaticRoute = async (req, res) => {

    return res.render("home");
}



const handleSaveUserInfo = async (req, res) => {
    const { fname, mname, lname, email, password, dob, gender } = req.body;
    const exist = await STUDENTS.findOne({email:`${email}`});
    if (!exist) {
        const newUser = await STUDENTS.create({ fname, mname, lname, email, password, dob, gender });
        req.session.email=email;
        await newUser.save();
        return res.render("home2",{email:email});

    }else{
        return res.render("home",{
            exist:1,
        })
    }



}

const handleSaveUserInfo2 = async (req, res) => {
    const { email, collage, course, current_year,Specilization ,img_path} = req.body;
    const exist = await STUDENT2.findOne({email:`${email}`});
    console.log("hit seccessfully");
    
    if (!exist) {
        const newUser = await STUDENT2.create({ email, collage, course, current_year,Specilization,img_path  });
        await newUser.save();
        return res.render("home2",{message:"done"});

    }else{
        return res.render("home",{
            exist:1,
        })
    }



}




module.exports = {
    handleStaticRoute,
    handleSaveUserInfo,
    handleSaveUserInfo2,
}
