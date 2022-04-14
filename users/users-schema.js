import mongoose from 'mongoose';
import TuitsSchema from "../tuits/tuits-schema.js";
const schema = mongoose.Schema({
    name: String,
    handle: String,
    "avatar-image": String,
    header: String,
    bio: String,
    followers: Number,
    following: Number,
    loggedIn: Boolean,
    tuits: [TuitsSchema],
    likes: [TuitsSchema],
    email: String,
    phoneNumber: String
}, {collection: 'users'});
export default schema;