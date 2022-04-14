import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tweet: String,
    tweetId: {type: String},
    username: String,
    handle: String,
    likes: {type: Number, default: 0},
    dislikes: {type: Number, default: 0},
    retweets: {type: Number, default: 0},
    comments: {type: Number, default: 0},
    ["profile-picture"]: String,
    time: String
}, {collection: "tweets"})
export default schema;