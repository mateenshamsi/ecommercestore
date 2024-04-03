const cloudinary = require('cloudinary').v2;
const fs = require('fs')
         
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUDNAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret:  process.env.CLOUDINARY_API_SECRET
});
const uploadOnCloudinary = async(localFilePath)=>{ 
try{ 
    if(!localFilePath) return null 
    const res = await cloudinary.uploader.upload(localFilePath,{
        resource_type:"auto"
    })
    console.log("File uploaded",res.url)
    return res
    

}
catch(err)
{ 
    fs.unlinkSync(localFilePath) //remove locally saved temporary file bcoz it fails to upload on cloudinary
    return null
}
}
module.exports={uploadOnCloudinary}