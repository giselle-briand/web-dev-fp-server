import mongoose from 'mongoose';
import TuitsSchema from "../tuits/tuits-schema.js";
const usersSchema = mongoose.Schema({
    name: String,
    username: String,
    password: {type: String, required: true},
    "avatar-image": {type: String, default: "../media/emptypp.webp"},
    header: {type: String, default: "../media/emptyheader.webp"},
    bio: String,
    followerCount: {type: Number, default: 0},
    followingCount: {type: Number, default: 0},
    followers: [usersSchema],
    following: [usersSchema],
    loggedIn: Boolean,
    tuits: [TuitsSchema],
    likes: [TuitsSchema],
    email: {type: String, required: true},
    phoneNumber: String
}, {collection: 'users'});
export default usersSchema;