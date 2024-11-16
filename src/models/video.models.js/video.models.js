import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema({
    owner:{
        type: Schema.Types.ObjectId,
        ref:"User",
    },
    videoFile:{
        type: String,   // link stored from cloud Store
        required: true,
    },
    thumbnail:{
        type: String,  // link stored from cloud Store
        required: true,
    },
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    duration:{
        type: Number,
        required: true,
    },
    views:{
        type: Number,
        default: 0,
        required: true, 
    },
    isPublished:{
        type: Boolean,
        default: true,
    },
},{timestamps: true});


// middlewares
videoSchema.plugin(mongooseAggregatePaginate)


export const Video = mongoose.model("Video", videoSchema);