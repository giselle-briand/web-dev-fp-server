import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    dislikes: Number,
    comments: Number,
    retuits: Number,
    liked: Boolean,
    disliked: Boolean,
    username: String,
    handle: String,
    verified: Boolean,
    time: String,
    title: String,
    topic: String,
    video: String,
    image: String,
    "avatar-image": String
}, {collection: 'tuits'});
export default schema;