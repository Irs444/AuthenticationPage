const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dsbnrx4qj',
  api_key: '346963579531555',
  api_secret: 'f_d7_mS0zKqub2s-_d9B4WTXI_Q'
//   secure: true,
});


const uploadFile = async(filepath) => {

    try{
        const result = await cloudinary.uploader.upload(filepath)
        console.log(result);
        return result
        
    }catch(error){
        console.log(error);
        

    }
}

module.exports = { uploadFile }