const express=require("express")
const router = express.Router();
const {handleSaveUserInfo,handleSaveUserInfo2}=require("../controllers/controller")



router.post("/",handleSaveUserInfo);
router.post("/second-form",handleSaveUserInfo2)


module.exports=router;

