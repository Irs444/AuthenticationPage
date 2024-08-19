const multer = require("multer");
const router = require("express").Router();
const bodyParser = require("body-parser")
const path = require("path")
const express = require("express")


router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.static(path.resolve(__dirname, "public")))

const storage = multer({
    storage: multer.diskStorage({}),
    limits: { fileSize: 500000 }
});



const adminController = require("../controllers/adminController")

router.post("/uploadfile", storage.single("myfile"), (req, res) => {
    res.status(200).json({status: "success"}),
    adminController.uploadFile
} 
 );
    


module.exports = router