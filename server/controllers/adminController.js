const Model = require("../model/productModel")

const Upload = require("../helpers/upload")


const uploadFile = async(req, res) => {
    
    try{
        const upload =await Upload.uploadFile(req.file.path);
        const model = new Model({
            image:upload.secure_url
        });
        const record = await model.save();
        res.send({succes : true, msg:"File upload successfully", url:record});
    }catch(error){
        res.send({succes: false , msg:error.message});
    }
}


module.exports = uploadFile