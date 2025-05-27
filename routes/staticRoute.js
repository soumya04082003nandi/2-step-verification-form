const express=require("express")
const router = express.Router();
const {handleStaticRoute,handleSaveUserInfo}=require("../controllers/controller")



router.get("/",handleStaticRoute );




module.exports=router;