import mongoose from 'mongoose';
import tweetsSchema from "./tweets-schema.js";
const tweetsModel = mongoose.model('TweetModel', tweetsSchema);
export default tweetsModel;