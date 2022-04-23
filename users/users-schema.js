import mongoose from 'mongoose';
import TuitsSchema from "../tuits/tuits-schema.js";
const usersSchema = mongoose.Schema({
    name: {type: String, required: true},
    username: {type: String, required:true},
    password: {type: String, required: true},
    "avatar-image": {type: String, default: "../media/emptypp.webp"},
    header: {type: String, default: "../media/emptyheader.webp"},
    bio: String,
    followerCount: {type: Number, default: 0},
    followingCount: {type: Number, default: 0},
    followers: [{type: String, ref: 'UserModel'}],
    following: [{type: String, ref: 'UserModel'}],
    //loggedIn: Boolean,
    //tuits: [TuitsSchema],
    //likes: [TuitsSchema],
    //comments: [TuitsSchema],
    verified: Boolean,
    email: {type: String, required: true},
    phoneNumber: {type: String, require:true}
}, {collection: 'users'});
export default usersSchema;