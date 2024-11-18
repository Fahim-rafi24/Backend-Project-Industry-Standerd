import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"

// Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_cloud_name,
    api_key: process.env.CLOUDINARY_api_key,
    api_secret: process.env.CLOUDINARY_api_secret,
})

const uploadOnCloudinary = async(localFilePath)=>{
    try {
        if (!localFilePath) {
            return null;
        }
        // upload the file on cloudinary
        const res = await cloudinary.uploader.upload(localFilePath, {resource_type: "auto"});
        // if fille uploded successfully
        console.log("file is uploded on cloudinary", res.url);
        // console.log("file is uploded on cloudinary", res);
        // console.log("file is uploded on cloudinary", res.bytes);
        return res;
    }
    // if any error is decected
    catch (error) {
        fs.unlinkSync(localFilePath); // removed the local seved temp file
    }
}

export {uploadOnCloudinary};