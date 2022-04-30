import mongoose from 'mongoose';
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
    liked_tuits:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TuitModel'}],
    bookmarks:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TuitModel'}],
    verified: {type: Boolean, default: false},
    email: {type: String, required: true},
    phoneNumber: {type: String, require:true},
    admin: {type: Boolean, required: true}
}, {collection: 'users'});
export default usersSchema;


