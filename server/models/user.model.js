import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        avatar: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
);

export const userModel = new mongoose.model('User', userSchema, 'users');