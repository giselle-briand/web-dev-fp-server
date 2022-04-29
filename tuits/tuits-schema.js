import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    dislikes: Number,
    comments: Number,
    liked_users:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'}],
    bookmarked_users:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'}],
    commented_users:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    }],
    "api-post-id": String,
    name: String,
    username: String,
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'},
    date: {
        day: String,
        month: String,
        year: String,
        time: String
    },
    title: String,
    topic: String,
    video: String,
    image: String,
    "avatar-image": String
}, {collection: 'tuits'});
export default schema;