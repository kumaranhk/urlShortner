import mongoose from "mongoose";

const urlSchema = new mongoose.Schema(
    {
        actualurl: {
            type: String,
            required: true
        },
        shrinkedurl: {
            type: String,
            required: true,
            unique : true
        },
        creatorId: {
            type: mongoose.Types.ObjectId,
            ref : 'User',
            required: true
        },
        clickedCount : {
            type : Number,
            required : false,
        }
    },
    {
        timestamps : true
    }
);

export const urlModel = new mongoose.model('Url',urlSchema,'urls');