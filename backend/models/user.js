import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        required: true,
        type: String,
        unique: true,
        trim: true,
    },
    password: {
        required: true,
        type: String,
        minLength: 6,
    },
    number: {
        required: true,
        type: String,
        minLength: 6,
    },
    username: {
        required: true,
        type: String,
        trim: true,
    },
});

const User = mongoose.model("user", userSchema);

export default User;
