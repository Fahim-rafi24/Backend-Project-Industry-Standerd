import mongoose, { Schema } from "mongoose";
// crypto graphy for jwt user identification & password make secured
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";




const userSchema= new Schema({
    username: {
        type: String,
        required: true,
        unique:true,
        lowercase: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique:true,
        lowercase: true,
        trim: true,
    },
    password : {
        type: String,
        required: [true, "password is required"],
    },
    // user identyfy token by jwt
    refreshToken:{
        type: String,
    },
    fullName: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    avater: {
        type: String,  // cloud stored link data
        required: true,
    },
    coverImg: {
        type: String,  // cloud stored link data
    },
    // watch history stored like a arr & it's stored video id
    watchHistory:[
        {
            type: Schema.Types.ObjectId,
            ref: "video"
        }
    ],
}, {timestamps: true})


userSchema.pre("save", async function (next){
    // if state check is password can changed?
    if (this.isModified("password")) {
        this.password = bcrypt.hash(this.password, 10)
        next();
    }
    else{
        return next();
    }
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password);
}

// access token
userSchema.methods.genarateAccessToken = async function() {
    jwt.sign(
        // payload
        {_id: this._id, email: this.email, username: this.username, fullName: this.fullName},
        // secret key
        process.env.ACCESS_TOKEN_SECRET,
        // expiry time
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
        }
    )
}
// reresh token
userSchema.methods.genarateRefreshToken = async function() {
    jwt.sign(
        // payload
        { _id: this._id },
        // secret key
        process.env.REFRESH_TOKEN_SECRET,
        // expiry time
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
        }
    )
}




export const User = mongoose.model("User", userSchema);