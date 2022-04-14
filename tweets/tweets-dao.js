import tweetsModel from './tweets-model.js';
export const findAllTweets = () => tweetsModel.find();
export const createTweet = (tweet) => tweetsModel.create(tweet);
export const deleteTweet = (tid) => tweetsModel.deleteOne({_id: tid});
export const updateTweet = (tid, tweet) => tweetsModel.updateOne({_id: tid}, {$set: tweet});